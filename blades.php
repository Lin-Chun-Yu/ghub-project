<?php
// ============================================================
//  config.php 內容可獨立抽出；這裡合併示範
// ============================================================
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'beyblade_db');
define('DB_USER', 'root');       // ← 改成你的帳號
define('DB_PASS', 'your_password'); // ← 改成你的密碼
define('DB_CHARSET', 'utf8mb4');

// ============================================================
//  PDO 連線 (錯誤時丟出例外，不洩漏細節給前端)
// ============================================================
function getConnection(): PDO
{
    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=%s',
        DB_HOST, DB_PORT, DB_NAME, DB_CHARSET
    );

    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // 錯誤拋出例外
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // 預設關聯陣列
        PDO::ATTR_EMULATE_PREPARES   => false,                   // 使用真正的 Prepared Statement
    ];

    return new PDO($dsn, DB_USER, DB_PASS, $options);
}

// ============================================================
//  資料查詢 — 使用 Prepared Statement 防止 SQL Injection
//  (範例: 可用 GET 參數 ?type=攻擊型 篩選；沒帶就列全部)
// ============================================================
$error   = null;
$blades  = [];
$total   = 0;

try {
    $pdo = getConnection();

    // 1. 取得總筆數 (Prepared Statement 綁定參數)
    $filterType = $_GET['type'] ?? '';
    $allowedTypes = ['攻擊型', '防禦型', '耐力型', '平衡型'];

    if ($filterType !== '' && in_array($filterType, $allowedTypes, true)) {
        // 有篩選條件
        $stmtCount = $pdo->prepare('SELECT COUNT(*) FROM blades WHERE type = :type');
        $stmtCount->execute([':type' => $filterType]);

        $stmtData  = $pdo->prepare('
            SELECT b.id, b.part_key, b.name, b.type, b.weight,
                   b.shopee_url,
                   b.stat_atk, b.stat_def, b.stat_sta,
                   GROUP_CONCAT(bv.version ORDER BY bv.version SEPARATOR ", ") AS versions
            FROM   blades b
            LEFT JOIN blade_versions bv ON bv.blade_id = b.id
            WHERE  b.type = :type
            GROUP  BY b.id
            ORDER  BY b.name ASC
        ');
        $stmtData->execute([':type' => $filterType]);
    } else {
        // 不篩選，列全部
        $filterType = '';
        $stmtCount  = $pdo->query('SELECT COUNT(*) FROM blades');
        $stmtData   = $pdo->prepare('
            SELECT b.id, b.part_key, b.name, b.type, b.weight,
                   b.shopee_url,
                   b.stat_atk, b.stat_def, b.stat_sta,
                   GROUP_CONCAT(bv.version ORDER BY bv.version SEPARATOR ", ") AS versions
            FROM   blades b
            LEFT JOIN blade_versions bv ON bv.blade_id = b.id
            GROUP  BY b.id
            ORDER  BY b.name ASC
        ');
        $stmtData->execute();
    }

    $total  = (int) $stmtCount->fetchColumn();
    $blades = $stmtData->fetchAll();

} catch (PDOException $e) {
    // 生產環境請寫入 log，不要直接輸出錯誤訊息
    $error = '資料庫連線或查詢失敗，請稍後再試。';
    error_log('[Beyblade DB] ' . $e->getMessage());
}

// ============================================================
//  類型對應色彩 (與 beyblade_data.js TYPE_COLOR 一致)
// ============================================================
$typeColor = [
    '攻擊型' => '#D85A30',
    '平衡型' => '#D8A030',
    '耐力型' => '#1D9E75',
    '防禦型' => '#378ADD',
];

function badge(string $type, array $colorMap): string
{
    $color = htmlspecialchars($colorMap[$type] ?? '#888');
    $label = htmlspecialchars($type);
    return "<span class=\"badge\" style=\"background:{$color}\">{$label}</span>";
}

function statBar(int $value, string $color = '#4a90d9'): string
{
    $pct  = min(100, $value);
    $safeColor = htmlspecialchars($color);
    return "<div class=\"bar-wrap\">
                <div class=\"bar-fill\" style=\"width:{$pct}%;background:{$safeColor}\"></div>
                <span class=\"bar-label\">{$value}</span>
            </div>";
}
?>
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>戰鬥陀螺 ─ 戰刃資料庫</title>
    <style>
        /* === Reset & Base === */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', 'Noto Sans TC', sans-serif;
            background: #0f111a;
            color: #e0e4ef;
            min-height: 100vh;
        }

        /* === Header === */
        header {
            background: linear-gradient(135deg, #1a1d2e 0%, #252840 100%);
            border-bottom: 2px solid #3a3f6e;
            padding: 1.5rem 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        header h1 { font-size: 1.6rem; color: #c8d0f8; letter-spacing: .04em; }
        header p  { font-size: .85rem; color: #7a82a8; margin-top: .2rem; }

        /* === Main layout === */
        main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }

        /* === Filter bar === */
        .filter-bar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: .6rem;
            margin-bottom: 1.5rem;
        }
        .filter-bar span { font-size: .85rem; color: #7a82a8; }
        .filter-bar a {
            display: inline-block;
            padding: .35rem .85rem;
            border-radius: 999px;
            border: 1px solid #3a3f6e;
            font-size: .82rem;
            text-decoration: none;
            color: #c8d0f8;
            background: #1a1d2e;
            transition: background .15s;
        }
        .filter-bar a:hover  { background: #252840; }
        .filter-bar a.active { background: #3a3f8e; border-color: #5a60b8; color: #fff; }

        /* === Stats row === */
        .stats-row {
            font-size: .82rem;
            color: #7a82a8;
            margin-bottom: 1.2rem;
        }

        /* === Error === */
        .alert-error {
            background: #3a1515;
            border: 1px solid #7a2020;
            color: #f8b0b0;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }

        /* === Table === */
        .table-wrap { overflow-x: auto; }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: .88rem;
        }
        thead tr {
            background: #1a1d2e;
            border-bottom: 2px solid #3a3f6e;
        }
        thead th {
            padding: .75rem 1rem;
            text-align: left;
            font-weight: 600;
            color: #9ba3cc;
            white-space: nowrap;
        }
        tbody tr {
            border-bottom: 1px solid #1e2138;
            transition: background .12s;
        }
        tbody tr:hover { background: #181b2e; }
        tbody td { padding: .7rem 1rem; vertical-align: middle; }

        /* === Badge === */
        .badge {
            display: inline-block;
            padding: .2rem .6rem;
            border-radius: 999px;
            font-size: .75rem;
            font-weight: 700;
            color: #fff;
            white-space: nowrap;
        }

        /* === Stat bars === */
        .bar-wrap {
            display: flex;
            align-items: center;
            gap: .5rem;
            min-width: 90px;
        }
        .bar-fill {
            height: 6px;
            border-radius: 3px;
            flex: 1;
            max-width: 80px;
        }
        .bar-label { font-size: .78rem; color: #9ba3cc; }

        /* === Shopee link === */
        .shopee-link {
            display: inline-block;
            padding: .25rem .65rem;
            background: #d4430a;
            color: #fff;
            border-radius: 6px;
            font-size: .75rem;
            text-decoration: none;
            white-space: nowrap;
        }
        .shopee-link:hover { background: #e8561a; }

        /* === Versions chip === */
        .versions { font-size: .75rem; color: #7a82a8; }

        /* === Empty state === */
        .empty {
            text-align: center;
            padding: 3rem;
            color: #5a6080;
            font-size: .95rem;
        }

        /* === Footer === */
        footer {
            text-align: center;
            padding: 2rem;
            font-size: .78rem;
            color: #3a4060;
        }
    </style>
</head>
<body>

<header>
    <div>
        <h1>⚔️ 戰鬥陀螺 零件資料庫</h1>
        <p>Beyblade X — Blade 戰刃管理後台</p>
    </div>
</header>

<main>

    <!-- 篩選器 -->
    <div class="filter-bar">
        <span>類型篩選：</span>
        <a href="blades.php" class="<?= $filterType === '' ? 'active' : '' ?>">全部</a>
        <?php foreach ($typeColor as $t => $c): ?>
        <a href="blades.php?type=<?= urlencode($t) ?>"
           class="<?= $filterType === $t ? 'active' : '' ?>"
           style="<?= $filterType === $t ? "background:{$c};border-color:{$c}" : '' ?>">
            <?= htmlspecialchars($t) ?>
        </a>
        <?php endforeach; ?>
    </div>

    <!-- 錯誤提示 -->
    <?php if ($error): ?>
        <div class="alert-error">⚠️ <?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <!-- 筆數統計 -->
    <p class="stats-row">
        共找到 <strong><?= $total ?></strong> 筆戰刃資料
        <?= $filterType ? '（類型：' . htmlspecialchars($filterType) . '）' : '' ?>
    </p>

    <!-- 資料表格 -->
    <?php if (!empty($blades)): ?>
    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>零件代碼</th>
                    <th>名稱</th>
                    <th>類型</th>
                    <th>重量 (g)</th>
                    <th>ATK</th>
                    <th>DEF</th>
                    <th>STA</th>
                    <th>貨號版本</th>
                    <th>蝦皮連結</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($blades as $row): ?>
                <tr>
                    <td><?= (int) $row['id'] ?></td>
                    <td><code><?= htmlspecialchars($row['part_key']) ?></code></td>
                    <td><?= htmlspecialchars($row['name']) ?></td>
                    <td><?= badge($row['type'], $typeColor) ?></td>
                    <td><?= htmlspecialchars($row['weight']) ?></td>
                    <td><?= statBar((int)$row['stat_atk'], '#D85A30') ?></td>
                    <td><?= statBar((int)$row['stat_def'], '#378ADD') ?></td>
                    <td><?= statBar((int)$row['stat_sta'], '#1D9E75') ?></td>
                    <td class="versions"><?= htmlspecialchars($row['versions'] ?? '—') ?></td>
                    <td>
                        <?php if (!empty($row['shopee_url'])): ?>
                        <a class="shopee-link"
                           href="<?= htmlspecialchars($row['shopee_url']) ?>"
                           target="_blank" rel="noopener">🛒 蝦皮</a>
                        <?php else: ?>
                        <span style="color:#5a6080">—</span>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php else: ?>
        <div class="empty">目前沒有符合條件的戰刃資料。</div>
    <?php endif; ?>

</main>

<footer>Beyblade X Parts Database &copy; <?= date('Y') ?></footer>

</body>
</html>
