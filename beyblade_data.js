const BEYBLADE_DATABASE = {
    parts: {
        blades: {
            "dran_sword_v1": {// 第一種屬性：ATK 55 / DEF 25 / STA 20
                name: "蒼龍神劍",
                engName: "Dran Sword",
                type: "攻擊型",
                weight: 35.1,
                stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 },
                versions: [// 把所有符合這個數值的官方版本都收納在這邊
                    { code: "BX-01", subName: "原色版" },
                    { code: "BX-07", subName: "特別版" },
                    { code: "BX-14-03", subName: "抽抽包版" },
                    { code: "BX-17-01", subName: "火紅版" },
                    { code: "BX-22", subName: "鋼鐵戰刃版" }// 假設 BX-22 是這款特殊數值                 
                ]
            },
            "dran_sword_v2": {// 第二種屬性：ATK 60 / DEF 25 / STA 30
                name: "蒼龍神劍 (強化型)",
                engName: "Dran Sword (Special)",
                type: "攻擊型",
                weight: 35.1, // 如果重量有變可以自行調整
                stats: { atk: 60, def: 30, sta: 25, accel: 0, endurance: 0 },
                versions: [
                    { code: "BXC-00-01", subName: "金屬塗層:燦金" },
                    { code: "BXC-00-02", subName: "金屬塗層:白銀" },
                    { code: "BXC-00-03", subName: "金屬塗層:黃銅" },
                    { code: "BXC-04", subName: "鋼鐵戰刃 金屬塗層:藍" },
                    { code: "BXG-25-01", subName: "金屬塗層:珍珠白" },
                    { code: "BXG-12-04", subName: "閃耀貼紙版" },
                    { code: "BXG-52", subName: "金屬塗層:闇黑" }                
                ]
            },        
            "hells_scythe_v1": {
                name: "惡魔紅鐮",
                engName: "Hells Scythe",
                type: "平衡型",
                weight: 33.7,
                stats: { atk: 30, def: 35, sta: 35, accel: 0, endurance: 0 }, // 假設這是第一種數值
                versions: [
                    { code: "BX-02", subName: "紅色版" },
                    { code: "BX-08-01", subName: "橘色板" }
                ]
            },
            "hells_scythe_v2": {
                name: "惡魔紅鐮 (強化型)",
                engName: "Hells Scythe (Special)",
                type: "平衡型",
                weight: 33.7,
                stats: { atk: 35, def: 40, sta: 40, accel: 0, endurance: 0 }, // 假設這是另一種數值
                versions: [
                    { code: "BXG-03", subName: "金屬塗層:燦金" },
                    { code: "BX-14-04", subName: "綠色版" },
                    { code: "BX-48-04", subName: "金屬塗層:燦金版" }
                ]
            },
            "Wizard_Arrow_v1": { 
                name: "魔導幻箭", 
                engName: "Wizard Arrow",
                type: "耐力型", 
                weight: 31.8, 
                imgUrl: "", 
                stats: { atk: 15, def: 30, sta: 55, accel: 0, endurance: 0 },
                versions: [
                    { code: "BX-03", subName: "原色黃色版" },
                    { code: "BX-05", subName: "紅色版" },
                    { code: "BX-08-03", subName: "綠色版" },
                    { code: "BX-14-06", subName: "鋼鐵戰刃版" },
                    { code: "BX-17-02", subName: "水藍版" },
                    { code: "BX-21-03", subName: "橘紅色版" },
                    { code: "BX-24-06", subName: "紫色版" }
                ]
            },
            "Knight_Shield_v1": { 
                name: "騎士重盾", 
                engName: "Knight Shield ",
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                stats: { atk: 20, def: 55, sta: 25, accel: 0, endurance: 0 },
                versions: [
                    { code: "BX-04", subName: "原色綠色版" }, 
                    { code: "BX-06", subName: "藍色版" }, 
                    { code: "BX-08-02", subName: "紅色版" }, 
                    { code: "BX-14-05", subName: "淺藍版" }, 
                    { code: "BX-20-03", subName: "紫色版" } 
                ]
            },
            "Knight_Shield_v2": { 
                name: "騎士重盾 (強化型)", 
                engName: "Knight Shield (Special)",
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                stats: { atk: 25, def: 60, sta: 30, accel: 0, endurance: 0 },
                versions: [
                    { code: "BXH-02", subName: "金屬塗層:燦金" }
                ]
            }
            /*
            "Dranzer S": { name: "烈焰飛鳳S", type: "平衡型", weight: 34.5, imgUrl: "", stats: { atk: 35, def: 30, sta: 35, accel: 0, endurance: 0 } },
            "Dran Sword Special Ver": { name: "蒼龍神劍 特別Ver.", type: "攻擊型", weight: 35.1, imgUrl: "", stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 } },
            "Cobalt Dragoon Blue Metal": { name: "蒼穹龍神 金屬塗層:藍", type: "攻擊型", weight: 34.5, imgUrl: "", stats: { atk: 70, def: 35, sta: 25, accel: 0, endurance: 0 } },

            // ----- 其他戰刃資料 -----
            "Knight Lance": { name: "聖槍騎士", type: "防禦型", weight: 32.6, imgUrl: "", stats: { atk: 25, def: 40, sta: 15, accel: 0, endurance: 0 } },
            "Shark Edge": { name: "狂鯊銳刃", type: "攻擊型", weight: 34.5, imgUrl: "", stats: { atk: 55, def: 5, sta: 10, accel: 0, endurance: 0 } },
            "Leon Claw": { name: "猛獅霸爪", type: "平衡型", weight: 30.8, imgUrl: "", stats: { atk: 35, def: 35, sta: 10, accel: 0, endurance: 0 } },
            "Viper Tail": { name: "毒蛇神尾", type: "耐力型", weight: 34.7, imgUrl: "", stats: { atk: 20, def: 20, sta: 40, accel: 0, endurance: 0 } },
            "Rhino Horn": { name: "狂犀戰角", type: "防禦型", weight: 32.15, imgUrl: "", stats: { atk: 15, def: 45, sta: 10, accel: 0, endurance: 0 } },
            "Dran Dagger": { name: "蒼龍匕首", type: "攻擊型", weight: 34.7, imgUrl: "", stats: { atk: 45, def: 10, sta: 15, accel: 0, endurance: 0 } },
            "Hells Chain": { name: "業火鎖鏈", type: "平衡型", weight: 33.2, imgUrl: "", stats: { atk: 25, def: 35, sta: 25, accel: 0, endurance: 0 } },
            "Phoenix Feather": { name: "不死鳥之羽", type: "攻擊型", weight: 33.0, imgUrl: "", stats: { atk: 40, def: 15, sta: 15, accel: 0, endurance: 0 } },
            "Phoenix Wing": { name: "不死鳥飛翼", type: "攻擊型", weight: 38.0, imgUrl: "", stats: { atk: 55, def: 10, sta: 15, accel: 0, endurance: 0 } },
            "Wyvern Gale": { name: "飛龍疾風", type: "耐力型", weight: 31.9, imgUrl: "", stats: { atk: 15, def: 20, sta: 45, accel: 0, endurance: 0 } },
            "Unicorn Sting": { name: "獨角獸神刺", type: "平衡型", weight: 33.4, imgUrl: "", stats: { atk: 35, def: 35, sta: 10, accel: 0, endurance: 0 } },
            "Sphinx Cowl": { name: "獅身聖神", type: "防禦型", weight: 32.8, imgUrl: "", stats: { atk: 15, def: 45, sta: 20, accel: 0, endurance: 0 } },
            "Dran Buster": { name: "蒼龍巨刃", type: "攻擊型", weight: 36.4, imgUrl: "", stats: { atk: 60, def: 5, sta: 5, accel: 0, endurance: 0 } },
            "Wizard Rod": { name: "幻靈法杖", type: "耐力型", weight: 35.4, imgUrl: "", stats: { atk: 10, def: 20, sta: 60, accel: 0, endurance: 0 } },
            "Hells Hammer": { name: "業火戰鎚", type: "平衡型", weight: 33.0, imgUrl: "", stats: { atk: 40, def: 20, sta: 20, accel: 0, endurance: 0 } },
            "Shinobi Shadow": { name: "忍者闇影", type: "防禦型", weight: 28.0, imgUrl: "", stats: { atk: 10, def: 50, sta: 20, accel: 0, endurance: 0 } },
            "Tyranno Beat": { name: "暴龍重擊", type: "攻擊型", weight: 36.7, imgUrl: "", stats: { atk: 50, def: 15, sta: 15, accel: 0, endurance: 0 } },
            "Weiss Tiger": { name: "皓白猛虎", type: "平衡型", weight: 34.6, imgUrl: "", stats: { atk: 40, def: 20, sta: 20, accel: 0, endurance: 0 } },
            "Cobalt Dragoon": { name: "鈷藍青龍", type: "攻擊型", weight: 37.8, imgUrl: "", stats: { atk: 50, def: 10, sta: 15, accel: 0, endurance: 0 } },
            "Black Shell": { name: "黑甲玄武", type: "防禦型", weight: 32.4, imgUrl: "", stats: { atk: 15, def: 55, sta: 10, accel: 0, endurance: 0 } },
            "Bear Scratch": { name: "狂熊裂爪", type: "攻擊型", weight: 29.9, imgUrl: "", stats: { atk: 35, def: 20, sta: 15, accel: 0, endurance: 0 } },
            "Ptera Swing": { name: "翼龍迴旋", type: "耐力型", weight: 34.3, imgUrl: "", stats: { atk: 25, def: 15, sta: 40, accel: 0, endurance: 0 } },
            "Silver Wolf": { name: "銀狼", type: "耐力型", weight: 36.8, imgUrl: "", stats: { atk: 20, def: 20, sta: 50, accel: 0, endurance: 0 } },
            "Cobalt Drake": { name: "鈷藍巨龍 (稀有品)", type: "攻擊型", weight: 38.0, imgUrl: "", stats: { atk: 55, def: 15, sta: 10, accel: 0, endurance: 0 } },
            "Gold Hells Scythe": { name: "業火鐮刀 (黃金版)", type: "平衡型", weight: 33.4, imgUrl: "", stats: { atk: 30, def: 30, sta: 30, accel: 0, endurance: 0 } },
            "Gold Leon Claw": { name: "猛獅霸爪 (黃金版)", type: "平衡型", weight: 31.5, imgUrl: "", stats: { atk: 35, def: 35, sta: 10, accel: 0, endurance: 0 } },
            "Black Hells Chain": { name: "業火鎖鏈 (黑化版)", type: "平衡型", weight: 33.6, imgUrl: "", stats: { atk: 25, def: 35, sta: 25, accel: 0, endurance: 0 } },
            "Driger S": { name: "白虎 S (復刻)", type: "平衡型", weight: 28.5, imgUrl: "", stats: { atk: 30, def: 15, sta: 20, accel: 0, endurance: 0 } },
            "Lightning L-Drago (Absorb)": { name: "閃電天龍 (吸收)", type: "耐力型", weight: 33.5, imgUrl: "", stats: { atk: 30, def: 10, sta: 40, accel: 0, endurance: 0 } },
            "Lightning L-Drago (Attack)": { name: "閃電天龍 (連打)", type: "攻擊型", weight: 33.0, imgUrl: "", stats: { atk: 45, def: 10, sta: 15, accel: 0, endurance: 0 } },
            "Optimus Prime": { name: "柯博文", type: "平衡型", weight: 31.7, imgUrl: "", stats: { atk: 30, def: 30, sta: 20, accel: 0, endurance: 0 } },
            "Optimus Primal": { name: "金剛王", type: "平衡型", weight: 34.8, imgUrl: "", stats: { atk: 40, def: 20, sta: 20, accel: 0, endurance: 0 } },
            "Starscream": { name: "天王星", type: "耐力型", weight: 29.6, imgUrl: "", stats: { atk: 20, def: 15, sta: 40, accel: 0, endurance: 0 } },
            "Megatron": { name: "密卡登", type: "攻擊型", weight: 31.4, imgUrl: "", stats: { atk: 45, def: 15, sta: 10, accel: 0, endurance: 0 } },
            "Spider-Man": { name: "蜘蛛人", type: "平衡型", weight: 32.7, imgUrl: "", stats: { atk: 25, def: 25, sta: 30, accel: 0, endurance: 0 } },
            "Venom": { name: "猛毒", type: "攻擊型", weight: 34.4, imgUrl: "", stats: { atk: 45, def: 15, sta: 15, accel: 0, endurance: 0 } },
            "Iron Man": { name: "鋼鐵人", type: "平衡型", weight: 32.0, imgUrl: "", stats: { atk: 30, def: 30, sta: 20, accel: 0, endurance: 0 } },
            "Thanos": { name: "薩諾斯", type: "攻擊型", weight: 29.2, imgUrl: "", stats: { atk: 40, def: 20, sta: 10, accel: 0, endurance: 0 } },
            "Luke Skywalker": { name: "路克·天行者", type: "平衡型", weight: 29.9, imgUrl: "", stats: { atk: 25, def: 25, sta: 30, accel: 0, endurance: 0 } },
            "Darth Vader": { name: "達斯·維達", type: "攻擊型", weight: 30.6, imgUrl: "", stats: { atk: 40, def: 20, sta: 15, accel: 0, endurance: 0 } },
            "The Mandalorian": { name: "曼達洛人", type: "平衡型", weight: 30.0, imgUrl: "", stats: { atk: 30, def: 30, sta: 20, accel: 0, endurance: 0 } },
            "Moff Gideon": { name: "莫夫·吉迪恩", type: "平衡型", weight: 30.3, imgUrl: "", stats: { atk: 35, def: 25, sta: 15, accel: 0, endurance: 0 } }
            */
            },
        ratchets: { //15筆固鎖輪盤資料
            "1-60": { name: "", height: 60, weight: 6.1, imgUrl: "", shopeeUrl: "", stats: { atk: 17, def: 9, sta: 4, accel: 0, endurance: 0 } },
            "1-80": { name: "", height: 80, weight: 6.5, imgUrl: "", shopeeUrl: "", stats: { atk: 17, def: 4, sta: 9, accel: 0, endurance: 0 } },
            "2-60": { name: "", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 13, sta: 7, accel: 0, endurance: 0 } },
            "2-80": { name: "", height: 80, weight: 6.9, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 11, sta: 9, accel: 0, endurance: 0 } },            
            "3-60": { name: "", height: 60, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 9, sta: 6, accel: 0, endurance: 0 } },
            "3-70": { name: "", height: 70, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 8, sta: 7, accel: 0, endurance: 0 } },
            "3-80": { name: "", height: 80, weight: 7.1, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 7, sta: 8, accel: 0, endurance: 0 } },
            "4-60": { name: "", height: 60, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 13, sta: 6, accel: 0, endurance: 0 } },
            "4-70": { name: "", height: 70, weight: 6.5, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 12, sta: 7, accel: 0, endurance: 0 } },
            "4-80": { name: "", height: 80, weight: 7.0, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 11, sta: 8, accel: 0, endurance: 0 } },
            "5-60": { name: "", height: 60, weight: 6.6, imgUrl: "", shopeeUrl: "", stats: { atk: 12, def: 9, sta: 9, accel: 0, endurance: 0 } },
            "5-70": { name: "", height: 70, weight: 6.7, imgUrl: "", shopeeUrl: "", stats: { atk: 12, def: 8.5, sta: 9.5, accel: 0, endurance: 0 } },
            "5-80": { name: "", height: 80, weight: 7.2, imgUrl: "", shopeeUrl: "", stats: { atk: 12, def: 8, sta: 10, accel: 0, endurance: 0 } },
            "9-60": { name: "", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "", stats: { atk: 13, def: 10, sta: 7, accel: 0, endurance: 0 } },
            "9-80": { name: "", height: 80, weight: 6.8, imgUrl: "", shopeeUrl: "", stats: { atk: 13, def: 10, sta: 7, accel: 0, endurance: 0 } }

        },
        bits: {//26筆軸心資料，屬性是錯的，請以官方資料為準
            "Accel": { name: "加速", type: "攻擊型", weight: 2.59, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 10, sta: 10, accel: 40, endurance: 80 } },    
            "Ball": { name: "球狀軸心", type: "耐力型", weight: 2.01, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 25, sta: 50, accel: 10, endurance: 30 } },
            "Cyclone": { name: "暴風", type: "耐力型", weight: 2.11, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 5, sta: 10, accel: 45, endurance: 80 } },
            "Dot": { name: "圓點", type: "耐力型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 55, sta: 25, accel: 10, endurance: 30 } },
            "Elevate": { name: "仰昇", type: "耐力型", weight: 3.26, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 15, sta: 20, accel: 35, endurance: 30 } },
            "Flat": { name: "平底軸心", type: "耐力型", weight: 2.15, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 15, sta: 10, accel: 35, endurance: 80 } },
            "Glide": { name: "滑行", type: "耐力型", weight: 2.54, imgUrl: "", shopeeUrl: "", stats: { atk: 20, def: 10, sta: 55, accel: 15, endurance: 30 } },
            "Hexa": { name: "六角軸心", type: "耐力型", weight: 2.57, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 35, sta: 20, accel: 15, endurance: 80 } },
            "Impact": { name: "衝擊", type: "耐力型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 50, def: 15, sta: 5, accel: 30, endurance: 80 } },                    
            "Point": { name: "針點平底軸心", type: "攻擊型", weight: 2.23, imgUrl: "", shopeeUrl: "", stats: { atk: 25, def: 25, sta: 25, accel: 25, endurance: 80 } },
            "Needle": { name: "尖底軸心", type: "防禦型", weight: 2.01, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 50, sta: 30, accel: 10, endurance: 30 } },
            "Taper": { name: "錐形軸心", type: "平衡型", weight: 2.22, imgUrl: "", shopeeUrl: "", stats: { atk: 35, def: 20, sta: 20, accel: 25, endurance: 80 } },
            "High Needle": { name: "高位針狀軸", type: "防禦型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 55, sta: 20, accel: 10, endurance: 30 } },
            "Low Flat": { name: "低位偏平軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 45, def: 5, sta: 10, accel: 40, endurance: 80 } },
            "Orb": { name: "微球軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 30, sta: 50, accel: 10, endurance: 30 } },
            "Spike": { name: "尖刺軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 45, sta: 35, accel: 10, endurance: 30 } },
            "Rush": { name: "奔馳軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 10, sta: 20, accel: 30, endurance: 80 } },
            "High Taper": { name: "高位錐形軸", type: "平衡型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 25, sta: 20, accel: 25, endurance: 80 } },
            "Gear Flat": { name: "齒輪平頭軸", type: "攻擊型", weight: 2.3, imgUrl: "", shopeeUrl: "", stats: { atk: 50, def: 5, sta: 5, accel: 40, endurance: 80 } },
            "Gear Ball": { name: "齒輪球狀軸", type: "耐力型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 15, sta: 45, accel: 30, endurance: 30 } },
            "Gear Point": { name: "齒輪尖點軸", type: "平衡型", weight: 2.3, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 25, sta: 15, accel: 30, endurance: 80 } },
            "Disc Ball": { name: "圓盤球狀軸", type: "耐力型", weight: 3.1, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 20, sta: 55, accel: 10, endurance: 30 } },
            "Unite": { name: "聯結軸", type: "平衡型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 25, def: 25, sta: 30, accel: 20, endurance: 80 } },
            "Vortex": { name: "渦流", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 45, def: 10, sta: 5, accel: 40, endurance: 80 } },            
            "Quake": { name: "躍動軸", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 55, def: 15, sta: 5, accel: 25, endurance: 80 } },
            "Metal Needle": { name: "金屬針狀軸", type: "防禦型", weight: 2.7, imgUrl: "", shopeeUrl: "", stats: { atk: 8, def: 57, sta: 30, accel: 5, endurance: 30 } },
            "Free Ball": { name: "自由旋轉球狀軸", type: "耐力型", weight: 1.9, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 25, sta: 60, accel: 5, endurance: 30 } }
        }
    },


    sets: [// 10筆套組定義區：修正 Blade 代號為英文名稱，並修正重複 ID
// === 蒼龍神劍 系列 ===
        { id: "S-01", name: "蒼龍神劍", type: "攻擊型", components: { blade: "dran_sword_v1", ratchet: "3-60", bit: "Flat" } },
        { id: "S-11", name: "蒼龍神劍 (強化型)", type: "攻擊型", components: { blade: "dran_sword_v2", ratchet: "1-60", bit: "Vortex" } },

        { id: "S-02", name: "惡魔紅鐮", type: "平衡型", components: { blade: "Hells_scythe_v1", ratchet: "4-60", bit: "Taper" } },
        { id: "S-08", name: "惡魔紅鐮 (強化型)", type: "平衡型", components: { blade: "Hells_scythe_v2", ratchet: "3-80", bit: "Ball" } },

        // === 魔導幻箭 系列 ===
        { id: "S-03", name: "魔導幻箭", type: "耐力型", components: { blade: "wizard_arrow_v1", ratchet: "4-80", bit: "Ball" } },

        // === 騎士重盾 系列 ===
        { id: "S-04", name: "騎士重盾", type: "防禦型", components: { blade: "knight_shield_v1", ratchet: "3-80", bit: "Needle" } },
        { id: "S-09", name: "騎士重盾 (強化型)", type: "防禦型", components: { blade: "knight_shield_v2", ratchet: "4-80", bit: "Taper" } }
    ]
};

/* ── 類型顏色 ── */
const TYPE_COLOR = {
  "攻擊型":"#D85A30","平衡型":"#D8A030","耐力型":"#1D9E75","防禦型":"#378ADD"
};
