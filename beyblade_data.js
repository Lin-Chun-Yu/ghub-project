const BEYBLADE_DATABASE = {
    parts: {
        blades: {
            "Dran_Sword_v1": {// 第一種屬性:ATK 55 / DEF 25 / STA 20
                name: "蒼龍神劍",
                type: "攻擊型",
                weight: 35.1,
                imgUrl: "",
                shopeeUrl: "",
                stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 },
                versions: ["BX-01", "BX-07", "BX-14-03", "BX-17-01", "BX-22"]
            },
            "Dran_Sword_v2": {// 第二種屬性:ATK 60 / DEF 25 / STA 30
                name: "蒼龍神劍 (強化型)",
                type: "攻擊型",
                weight: 35.1, // 如果重量有變可以自行調整
                imgUrl: "",
                shopeeUrl: "",
                stats: { atk: 60, def: 30, sta: 25, accel: 0, endurance: 0 },
                versions: ["BXC-00-01", "BXC-00-02", "BXC-00-03", "BXC-04", "BXG-25-01", "BXG-12-04", "BXG-18", "BXG-52"]
            },        
            "Hells_Scythe_v1": {
                name: "惡魔紅鐮",
                type: "平衡型",
                weight: 33.7,
                imgUrl: "",
                shopeeUrl: "",
                stats: { atk: 30, def: 35, sta: 35, accel: 0, endurance: 0 }, // 假設這是第一種數值
                versions: ["BX-02",  "BX-08-01"]
            },
            "Hells_Scythe_v2": {
                name: "惡魔紅鐮 (特別版)",
                type: "平衡型",
                weight: 33.7,
                imgUrl: "",
                shopeeUrl: "",
                stats: { atk: 35, def: 40, sta: 40, accel: 0, endurance: 0 }, // 假設這是另一種數值
                versions: ["BXG-03", "BX-14-04", "BX-48-04"]
            },
            "Wizard_Arrow_v1": { 
                name: "魔導幻箭", 
                type: "耐力型", 
                weight: 31.8, 
                imgUrl: "", 
                shopeeUrl: "",
                stats: { atk: 15, def: 30, sta: 55, accel: 0, endurance: 0 },
                versions: ["BX-03", "BX-05", "BX-08-03", "BX-14-06", "BX-17-02", "BX-21-03", "BX-24-06"]
            },
            "Knight_Shield_v1": { 
                name: "騎士重盾", 
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                shopeeUrl: "",
                stats: { atk: 20, def: 55, sta: 25, accel: 0, endurance: 0 },
                versions: [ "BX-04", "BX-06", "BX-08-02", "BX-14-05", "BX-20-03"]
            },
            "Knight_Shield_v2": { 
                name: "騎士重盾 (特別版)", 
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                shopeeUrl: "",
                stats: { atk: 25, def: 60, sta: 30, accel: 0, endurance: 0 },
                versions: [ "BXH-02"]
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
            "1-60": { name: "1-60", height: 60, weight: 6.1, imgUrl: "", shopeeUrl: "", stats: { atk: 17, def: 9, sta: 4, accel: 0, endurance: 0 } },
            "1-80": { name: "1-80", height: 80, weight: 6.5, imgUrl: "", shopeeUrl: "", stats: { atk: 17, def: 4, sta: 9, accel: 0, endurance: 0 } },
            "2-60": { name: "2-60", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 13, sta: 7, accel: 0, endurance: 0 } },
            "2-80": { name: "2-80", height: 80, weight: 6.9, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 11, sta: 9, accel: 0, endurance: 0 } },            
            "3-60": { name: "3-60", height: 60, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk:15, def: 9, sta: 6, accel: 0, endurance: 0 } },
            "3-70": { name: "3-70", height: 70, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 8, sta: 7, accel: 0, endurance: 0 } },
            "3-80": { name: "3-80", height: 80, weight: 7.1, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 7, sta: 8, accel: 0, endurance: 0 } },
            "4-60": { name: "4-60", height: 60, weight: 6.4, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 13, sta: 6, accel: 0, endurance: 0 } },
            "4-70": { name: "4-70", height: 70, weight: 6.5, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 12, sta: 7, accel: 0, endurance: 0 } },
            "4-80": { name: "4-80", height: 80, weight: 7.0, imgUrl: "", shopeeUrl: "", stats: { atk: 11, def: 11, sta: 8, accel: 0, endurance: 0 } },
            "5-60": { name: "5-60", height: 60, weight: 6.6, imgUrl: "", shopeeUrl: "", stats:{ atk:12, def:9, sta:9, accel:0, endurance:0 } },
            "5-70": { name: "5-70", height: 70, weight: 6.7, imgUrl: "", shopeeUrl: "", stats:{ atk:12, def:8.5, sta:9.5, accel:0, endurance:0 } },
            "5-80": { name: "5-80", height: 80, weight: 7.2, imgUrl: "", shopeeUrl: "", stats:{ atk:12, def:8, sta:10, accel:0, endurance:0 } },
            "9-60": { name: "9-60", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "", stats:{ atk:13, def:10, sta:7, accel:0, endurance:0 } },
            "9-80": { name: "9-80", height: 80, weight: 6.8, imgUrl: "", shopeeUrl: "", stats:{ atk:13, def:10, sta:7, accel:0, endurance:0 } }

        },
        bits: {//26筆軸心資料，屬性是錯的，請以官方資料為準
            "Accel": { name: "A 加速", type: "攻擊型", weight: 2.59, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 10, sta: 10, accel: 40, endurance: 80 } },    
            "Ball": { name: "B 球狀軸心", type: "耐力型", weight: 2.01, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 25, sta: 50, accel: 10, endurance: 30 } },
            "Cyclone": { name: "C 暴風", type: "耐力型", weight: 2.11, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 5, sta: 10, accel: 45, endurance: 80 } },
            "Dot": { name: "D 圓點", type: "耐力型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 55, sta: 25, accel: 10, endurance: 30 } },
            "Elevate": { name: "E 仰昇", type: "耐力型", weight: 3.26, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 15, sta: 20, accel: 35, endurance: 30 } },
            "Flat": { name: "F 平底軸心", type: "耐力型", weight: 2.15, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 15, sta: 10, accel: 35, endurance: 80 } },
            "Glide": { name: "G 滑行", type: "耐力型", weight:2.54, imgUrl:"", shopeeUrl:"", stats:{ atk:20, def:10, sta:55, accel:15, endurance:30 } },
            "Hexa": { name: "H 六角軸心", type: "耐力型", weight: 2.57, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 35, sta: 20, accel: 15, endurance: 80 } },
            "Impact": { name: "I 衝擊", type: "耐力型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 50, def: 15, sta: 5, accel: 30, endurance: 80 } },                    
            "Point": { name: "P 針點平底軸心", type: "攻擊型", weight: 2.23, imgUrl: "", shopeeUrl: "", stats: { atk: 25, def: 25, sta: 25, accel: 25, endurance: 80 } },
            "Needle": { name: "N 尖底軸心", type: "防禦型", weight: 2.01, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 50, sta: 30, accel: 10, endurance: 30 } },
            "Taper": { name: "T 錐形軸心", type: "平衡型", weight: 2.22, imgUrl: "", shopeeUrl: "", stats: { atk:35, def:20, sta:20, accel:25, endurance:80 } },
            "High Needle": { name: "HN 高位針狀軸", type: "防禦型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 55, sta: 20, accel: 10, endurance: 30 } },
            "Low Flat": { name: "LF 低位偏平軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 45, def: 5, sta: 10, accel: 40, endurance: 80 } },
            "Orb": { name: "O 微球軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 30, sta: 50, accel: 10, endurance: 30 } },
            "Spike": { name: "S 尖刺軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 45, sta: 35, accel: 10, endurance: 30 } },
            "Rush": { name: "R 奔馳軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 40, def: 10, sta: 20, accel: 30, endurance: 80 } },
            "High Taper": { name: "HT 高位錐形軸", type:"平衡型", weight:2.2, imgUrl:"", shopeeUrl:"", stats:{ atk:30, def:25, sta:20, accel:25, endurance:80 } },
            "Gear Flat": { name: "GF 齒輪平頭軸", type: "攻擊型", weight: 2.3, imgUrl: "", shopeeUrl: "", stats: { atk: 50, def: 5, sta: 5, accel: 40, endurance: 80 } },
            "Gear Ball": { name: "GB 齒輪球狀軸", type: "耐力型", weight: 2.1, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 15, sta: 45, accel: 30, endurance: 30 } },
            "Gear Point": { name: "GP 齒輪尖點軸", type: "平衡型", weight: 2.3, imgUrl: "", shopeeUrl: "", stats: { atk: 30, def: 25, sta: 15, accel: 30, endurance: 80 } },
            "Disc Ball": { name: "DB 圓盤球狀軸", type: "耐力型", weight: 3.1, imgUrl: "", shopeeUrl: "", stats: { atk: 15, def: 20, sta: 55, accel: 10, endurance: 30 } },
            "Unite": { name: "U 聯結軸", type: "平衡型", weight:2.1, imgUrl:"", shopeeUrl:"", stats:{ atk:25, def:25, sta:30, accel:20, endurance:80 } },
            "Vortex": { name: "V 渦流", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 45, def: 10, sta: 5, accel: 40, endurance: 80 } },            
            "Quake": { name: "Q 躍動軸", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "", stats: { atk: 55, def: 15, sta: 5, accel: 25, endurance: 80 } },
            "Metal Needle": { name: "MN 金屬針狀軸", type: "防禦型", weight: 2.7, imgUrl: "", shopeeUrl: "", stats: { atk: 8, def: 57, sta: 30, accel: 5, endurance: 30 } },
            "Free Ball": { name: "FB 自由旋轉球狀軸", type: "耐力型", weight: 1.9, imgUrl: "", shopeeUrl: "", stats: { atk: 10, def: 25, sta: 60, accel: 5, endurance: 30 } }
        }
    },


    sets: [
        // === 蒼龍神劍 系列 ===
        { 
          name: "蒼龍神劍 3-60F",
          type: "攻擊型",
          imgUrl: "",
          shopeeUrl: "",
          components: { blade: "Dran_Sword_v1", ratchet: "3-60", bit: "Flat" }, 
          versions: ["BX-01", "BX-07", "BX-17-01", "BX-22"]

        },
        { 
          name: "蒼龍神劍 3-80B",
          type: "攻擊型",
          imgUrl: "",
          shopeeUrl: "",
          components: { blade: "Dran_Sword_v1", ratchet: "3-80", bit: "Ball" },
          versions: ["BX-14-03"]

        },
        { 
          name: "蒼龍神劍 4-80DB 金屬塗層", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Dran_Sword_v2", ratchet: "4-80", bit: "Disc Ball" },
          versions: ["BXC-00-01", "BXC-00-02", "BXC-00-03", "BXG-25-01", "BXG-12-04", "BXG-52"] 
        },

        // === 惡魔紅鐮 系列 ===
        { 
          name: "惡魔紅鐮", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Hells_Scythe_v1", ratchet: "4-60", bit: "Taper" }, 
          versions: [] 
        },
        { 
          name: "惡魔紅鐮 (強化型)", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Hells_Scythe_v2", ratchet: "3-80", bit: "Ball" },
          versions: []           
        },

        // === 魔導幻箭 系列 ===
        { 
          name: "魔導幻箭", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-80", bit: "Ball" },
          versions: [] 
        },

        // === 騎士重盾 系列 ===
        { 
          name: "騎士重盾", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Knight_Shield_v1", ratchet: "3-80", bit: "Needle" },
          versions: [] 
        },
        { 
          name: "騎士重盾 (強化型)", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "",
          components: { blade: "Knight_Shield_v2", ratchet: "4-80", bit: "Taper" },
          versions: [] 
        }
    ]
};

/* ── 類型顏色 ── */
const TYPE_COLOR = {
  "攻擊型":"#D85A30","平衡型":"#D8A030","耐力型":"#1D9E75","防禦型":"#378ADD"
};
