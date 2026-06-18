-- ============================================================
--  戰鬥陀螺零件資料庫 Schema
--  對應 beyblade_data.js 結構
--  引擎: InnoDB | 字元集: utf8mb4
-- ============================================================

CREATE DATABASE IF NOT EXISTS beyblade_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE beyblade_db;

-- ------------------------------------------------------------
-- 1. blades (戰刃)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blades (
    id           INT UNSIGNED     NOT NULL AUTO_INCREMENT,
    part_key     VARCHAR(60)      NOT NULL COMMENT 'JS 物件鍵，e.g. Dran_Sword_v1',
    name         VARCHAR(80)      NOT NULL COMMENT '中文名稱',
    type         ENUM('攻擊型','防禦型','耐力型','平衡型') NOT NULL,
    weight       DECIMAL(5,1)     NOT NULL COMMENT '單位: 公克',
    img_url      VARCHAR(500)     NOT NULL DEFAULT '',
    shopee_url   VARCHAR(500)     NOT NULL DEFAULT '',
    stat_atk     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_def     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_sta     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_accel   TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_endurance TINYINT UNSIGNED NOT NULL DEFAULT 0,
    created_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_blade_part_key (part_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='戰刃零件';

-- ------------------------------------------------------------
-- 2. blade_versions (戰刃版本/貨號，一對多)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blade_versions (
    id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
    blade_id   INT UNSIGNED NOT NULL,
    version    VARCHAR(30)  NOT NULL COMMENT '貨號，e.g. BX-01',
    PRIMARY KEY (id),
    UNIQUE KEY uq_blade_version (blade_id, version),
    CONSTRAINT fk_bv_blade
        FOREIGN KEY (blade_id) REFERENCES blades(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='戰刃貨號版本';

-- ------------------------------------------------------------
-- 3. ratchets (固鎖輪盤)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ratchets (
    id           INT UNSIGNED     NOT NULL AUTO_INCREMENT,
    part_key     VARCHAR(20)      NOT NULL COMMENT 'JS 鍵，e.g. 3-60',
    name         VARCHAR(20)      NOT NULL,
    height       TINYINT UNSIGNED NOT NULL COMMENT '高度數值 (mm)',
    weight       DECIMAL(4,1)     NOT NULL COMMENT '單位: 公克',
    img_url      VARCHAR(500)     NOT NULL DEFAULT '',
    shopee_url   VARCHAR(500)     NOT NULL DEFAULT '',
    stat_atk     DECIMAL(4,1)     NOT NULL DEFAULT 0,
    stat_def     DECIMAL(4,1)     NOT NULL DEFAULT 0,
    stat_sta     DECIMAL(4,1)     NOT NULL DEFAULT 0,
    stat_accel   DECIMAL(4,1)     NOT NULL DEFAULT 0,
    stat_endurance DECIMAL(4,1)  NOT NULL DEFAULT 0,
    created_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_ratchet_part_key (part_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='固鎖輪盤零件';

-- ------------------------------------------------------------
-- 4. bits (軸心)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS bits (
    id           INT UNSIGNED     NOT NULL AUTO_INCREMENT,
    part_key     VARCHAR(40)      NOT NULL COMMENT 'JS 鍵，e.g. Flat / Gear Ball',
    name         VARCHAR(60)      NOT NULL COMMENT '中文名稱',
    type         ENUM('攻擊型','防禦型','耐力型','平衡型') NOT NULL,
    weight       DECIMAL(4,1)     NOT NULL COMMENT '單位: 公克',
    img_url      VARCHAR(500)     NOT NULL DEFAULT '',
    shopee_url   VARCHAR(500)     NOT NULL DEFAULT '',
    stat_atk     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_def     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_sta     TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_accel   TINYINT UNSIGNED NOT NULL DEFAULT 0,
    stat_endurance TINYINT UNSIGNED NOT NULL DEFAULT 0,
    created_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_bit_part_key (part_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='軸心零件';

-- ------------------------------------------------------------
-- 5. sets (套組 / 完整陀螺組合)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS sets (
    id         INT UNSIGNED     NOT NULL AUTO_INCREMENT,
    name       VARCHAR(100)     NOT NULL COMMENT '套組名稱',
    type       ENUM('攻擊型','防禦型','耐力型','平衡型') NOT NULL,
    img_url    VARCHAR(500)     NOT NULL DEFAULT '',
    shopee_url VARCHAR(500)     NOT NULL DEFAULT '',
    -- 外鍵串聯三個零件
    blade_id   INT UNSIGNED     NOT NULL,
    ratchet_id INT UNSIGNED     NOT NULL,
    bit_id     INT UNSIGNED     NOT NULL,
    created_at TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_set_blade
        FOREIGN KEY (blade_id)   REFERENCES blades(id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_set_ratchet
        FOREIGN KEY (ratchet_id) REFERENCES ratchets(id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_set_bit
        FOREIGN KEY (bit_id)     REFERENCES bits(id)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='完整套組 (Blade + Ratchet + Bit)';

-- ------------------------------------------------------------
-- 6. set_versions (套組貨號，一對多)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS set_versions (
    id      INT UNSIGNED NOT NULL AUTO_INCREMENT,
    set_id  INT UNSIGNED NOT NULL,
    version VARCHAR(30)  NOT NULL COMMENT '貨號，e.g. BX-01',
    PRIMARY KEY (id),
    UNIQUE KEY uq_set_version (set_id, version),
    CONSTRAINT fk_sv_set
        FOREIGN KEY (set_id) REFERENCES sets(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='套組貨號版本';

-- ============================================================
-- 範例資料 — 插入 2 筆 Blade 與其貨號，供測試用
-- ============================================================
INSERT INTO blades (part_key, name, type, weight, shopee_url, stat_atk, stat_def, stat_sta) VALUES
('Dran_Sword_v1',  '蒼龍神劍',       '攻擊型', 35.1, 'https://s.shopee.tw/2qSDoE4DbQ', 55, 25, 20),
('Dran_Sword_v2',  '蒼龍神劍 (強化)','攻擊型', 35.1, 'https://s.shopee.tw/4ftrzkfnIf', 60, 30, 25),
('Hells_Scythe_v1','惡魔紅鐮',       '平衡型', 33.7, 'https://s.shopee.tw/7VE3MymXxV', 30, 35, 35),
('Wizard_Arrow_v1','魔導幻箭',       '耐力型', 31.8, 'https://s.shopee.tw/7AbCyST2LA', 15, 30, 55),
('Knight_Shield_v1','騎士重盾',      '防禦型', 34.8, 'https://s.shopee.tw/6L25yx112O', 20, 55, 25);

INSERT INTO blade_versions (blade_id, version) VALUES
(1, 'BX-01'),(1, 'BX-07'),(1, 'BX-14-03'),(1, 'BX-17-01'),(1, 'BX-22'),
(2, 'BXC-00-01'),(2, 'BXC-00-02'),(2, 'BXG-25-01'),(2, 'BXG-18'),
(3, 'BX-02'),(3, 'BX-08-01'),(3, 'BX-14-04'),
(4, 'BX-03'),(4, 'BX-05'),(4, 'BX-08-03'),
(5, 'BX-04'),(5, 'BX-06'),(5, 'BX-08-02');
