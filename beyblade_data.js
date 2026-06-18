const BEYBLADE_DATABASE = {
    parts: {
        blades: {//7筆戰刃資料
            "Dran_Sword_v1": {// 第一種屬性:ATK 55 / DEF 25 / STA 20
                name: "蒼龍神劍",
                type: "攻擊型",
                weight: 35.1,
                imgUrl: "",
                shopeeUrl: "https://s.shopee.tw/2qSDoE4DbQ",
                stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 },
                versions: ["BX-01", "BX-07", "BX-14-03", "BX-17-01", "BX-22"]
            },
            "Dran_Sword_v2": {// 第二種屬性:ATK 60 / DEF 25 / STA 30
                name: "蒼龍神劍 (強化)",
                type: "攻擊型",
                weight: 35.1, // 如果重量有變可以自行調整
                imgUrl: "",
                shopeeUrl: "https://s.shopee.tw/4ftrzkfnIf",
                stats: { atk: 60, def: 30, sta: 25, accel: 0, endurance: 0 },
                versions: ["BXC-00-01", "BXC-00-02", "BXC-00-03", "BXC-04", "BXG-25-01", "BXG-12-04", "BXG-18", "BXG-52"]
            },        
            "Hells_Scythe_v1": {
                name: "惡魔紅鐮",
                type: "平衡型",
                weight: 33.7,
                imgUrl: "",
                shopeeUrl: "https://s.shopee.tw/7VE3MymXxV",
                stats: { atk: 30, def: 35, sta: 35, accel: 0, endurance: 0 }, // 假設這是第一種數值
                versions: ["BX-02",  "BX-08-01", "BX-14-04"]
            },
            "Hells_Scythe_v2": {
                name: "惡魔紅鐮 (強化)",
                type: "平衡型",
                weight: 33.7,
                imgUrl: "",
                shopeeUrl: "https://s.shopee.tw/9zvOLdWfbN",
                stats: { atk: 35, def: 40, sta: 40, accel: 0, endurance: 0 }, // 假設這是另一種數值
                versions: ["BXG-03", "BX-48-04"]
            },
            "Wizard_Arrow_v1": { 
                name: "魔導幻箭", 
                type: "耐力型", 
                weight: 31.8, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/7AbCyST2LA",
                stats: { atk: 15, def: 30, sta: 55, accel: 0, endurance: 0 },
                versions: ["BX-03", "BX-05", "BX-08-03", "BX-14-06", "BX-17-02", "BX-21-03", "BX-24-06"]
            },
            "Knight_Shield_v1": { 
                name: "騎士重盾", 
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/6L25yx112O",
                stats: { atk: 20, def: 55, sta: 25, accel: 0, endurance: 0 },
                versions: [ "BX-04", "BX-06", "BX-08-02", "BX-14-05", "BX-20-03"]
            },
            "Knight_Shield_v2": { 
                name: "騎士重盾 (強化)", 
                type: "防禦型", 
                weight: 34.8, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/5L9YnA9Jj9",
                stats: { atk: 25, def: 60, sta: 30, accel: 0, endurance: 0 },
                versions: [ "BXH-02"]
            },
            "Wizard_Rod_v1": { 
                name: "魔導神杖", 
                type: "耐力型", 
                weight:35.3, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/1LdRZ11aha",
                stats: { atk: 15, def: 25, sta: 60, accel: 0, endurance: 0 },
                versions: [ "UX-03", "BX-35-04", "UX-04-02"]
            },
            "Wizard_Rod_v2": { 
                name: "魔導神杖 (強化)", 
                type: "耐力型", 
                weight: 35.3, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/LkuNCqZ9P",
                stats: { atk: 20, def: 30, sta: 65, accel: 0, endurance: 0 },
                versions: [ "BXH-09"]
            },
            "Shark_Scale_v1": { 
                name: "鮫鯊狂鱗", 
                type: "攻擊型", 
                weight: 37.6, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/5VT0ekUta4",
                stats: { atk: 70, def: 15, sta: 15, accel: 0, endurance: 0 },
                versions: [ "UX-15-01"]
            },
            "Phoenix_Wing_v1": { 
                name: "鳳凰飛翼", 
                type: "攻擊型", 
                weight: 39, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/30lfhEgltA",
                stats: { atk: 60, def: 25, sta: 15, accel: 0, endurance: 0 },
                versions: [ "BX-35-05"]
            },
            "Phoenix_Wing_v2": { 
                name: "鳳凰飛翼 (強化)", 
                type: "攻擊型", 
                weight: 39, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/BRUK3vlgu",
                stats: { atk: 65, def: 30, sta: 20, accel: 0, endurance: 0 },
                versions: [ "BX-23", "BXG-35", "BXC-05"]
            },
            "Knight_Mail_v1": { 
                name: "騎士圓甲", 
                type: "防禦型", 
                weight: 36.7, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/W4LTl005x",
                stats: { atk: 10, def: 65, sta: 35, accel: 0, endurance: 0 },
                versions: [ "UX-10-01"]
            },
            "Knight_Mail_v2": { 
                name: "騎士圓甲 (強化)", 
                type: "防禦型", 
                weight: 36.7, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/9Kfk00o2Iq",
                stats: { atk: 15, def: 70, sta: 40, accel: 0, endurance: 0 },
                versions: [ "BXG-42"]
            },
            "Hells_Chain_v1": { 
                name: "惡魔鎖鏈", 
                type: "平衡型", 
                weight: 33.2, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/4ftuTbkbub",
                stats: { atk: 35, def: 40, sta: 25, accel: 0, endurance: 0 },
                versions: [ "BX-21-01", "BX-31-03"]
            },
            "Dran_Dagger_v1": { 
                name: "蒼龍利刃", 
                type: "攻擊型", 
                weight: 36, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/110cAEl1Mo",
                stats: { atk: 50, def: 25, sta: 25, accel: 0, endurance: 0 },
                versions: [ "BX-20-01", "BX-31-04", "UX-18-05"]
            },
            "Dran_Dagger_v2": { 
                name: "蒼龍利刃 (強化)", 
                type: "攻擊型", 
                weight: 36, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/4qDKjMUPMj",
                stats: { atk: 55, def: 30, sta: 30, accel: 0, endurance: 0 },
                versions: [ "BXG-14", "BXG-25-03"]
            },
            "DRANZER_SPIRAL_v1": { 
                name: "烈焰飛鳳S", 
                type: "平衡型", 
                weight: 27.7, 
                imgUrl: "", 
                shopeeUrl: "https://s.shopee.tw/7KuhDQgryq",
                stats: { atk: 35, def: 30, sta: 35, accel: 0, endurance: 0 },
                versions: [ "BXG-01", "BXG-15"]
            },
            },
        ratchets: { //17筆固鎖輪盤資料
            "1-60": { name: "1-60", height: 60, weight: 6.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/2LVxCJQYp3", stats: { atk: 17, def: 9, sta: 4, accel: 0, endurance: 0 } },
            "1-80": { name: "1-80", height: 80, weight: 6.7, imgUrl: "", shopeeUrl: "https://s.shopee.tw/2BCX00RCA2", stats: { atk: 17, def: 4, sta: 9, accel: 0, endurance: 0 } },
            "2-60": { name: "2-60", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/20t6nhRpV1", stats: { atk: 10, def: 13, sta: 7, accel: 0, endurance: 0 } },
            "2-80": { name: "2-80", height: 80, weight: 6.9, imgUrl: "", shopeeUrl: "https://s.shopee.tw/qh9RGXeji", stats: { atk: 10, def: 11, sta: 9, accel: 0, endurance: 0 } },            
            "3-60": { name: "3-60", height: 60, weight: 6.4, imgUrl: "", shopeeUrl: "https://s.shopee.tw/LksodYAsj", stats: { atk:15, def: 9, sta: 6, accel: 0, endurance: 0 } },
            "3-70": { name: "3-70", height: 70, weight: 6.4, imgUrl: "", shopeeUrl: "https://s.shopee.tw/6pyMYdiina", stats: { atk: 15, def: 8, sta: 7, accel: 0, endurance: 0 } },
            "3-80": { name: "3-80", height: 80, weight: 7.1, imgUrl: "", shopeeUrl: "https://s.shopee.tw/gNjCwfxIc", stats: { atk: 15, def: 7, sta: 8, accel: 0, endurance: 0 } },
            "3-85": { name: "3-85", height: 85, weight: 4.7, imgUrl: "", shopeeUrl: "https://s.shopee.tw/qh9PFfJxf", stats: { atk: 5, def: 15, sta: 10, accel: 0, endurance: 0 } },
            "4-50": { name: "4-50", height: 50, weight: 5.9, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9AMJ0boqBA", stats: { atk: 12, def: 13, sta: 5, accel: 0, endurance: 0 } },
            "4-60": { name: "4-60", height: 60, weight: 6.3, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1gGGOmc9Gq", stats: { atk: 11, def: 13, sta: 6, accel: 0, endurance: 0 } },
            "4-70": { name: "4-70", height: 70, weight: 6.4, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1qZgb5bVvt", stats: { atk: 11, def: 12, sta: 7, accel: 0, endurance: 0 } },
            "4-80": { name: "4-80", height: 80, weight: 7.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1LdQ0AdPwo", stats: { atk: 11, def: 11, sta: 8, accel: 0, endurance: 0 } },
            "5-60": { name: "5-60", height: 60, weight: 6.6, imgUrl: "", shopeeUrl: "https://s.shopee.tw/2VpNOkzfoT", stats:{ atk:12, def:9, sta:9, accel:0, endurance:0 } },
            "5-70": { name: "5-70", height: 70, weight: 6.7, imgUrl: "", shopeeUrl: "https://s.shopee.tw/20t6nq1ZpO", stats:{ atk:12, def:8.5, sta:9.5, accel:0, endurance:0 } },
            "5-80": { name: "5-80", height: 80, weight: 7.3, imgUrl: "", shopeeUrl: "https://s.shopee.tw/2BCX090wUR", stats:{ atk:12, def:8, sta:10, accel:0, endurance:0 } },
            "7-55": { name: "7-55", height: 55, weight: 5.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/6pyP6X4WCn", stats:{ atk:6, def:14, sta:10, accel:0, endurance:0 } },
            "7-70": { name: "7-70", height: 70, weight: 7.3, imgUrl: "", shopeeUrl: "https://s.shopee.tw/Lksom7vD6", stats:{ atk:8, def:12, sta:10, accel:0, endurance:0 } },
            "9-60": { name: "9-60", height: 60, weight: 6.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/W4J157Hs9", stats:{ atk:13, def:10, sta:7, accel:0, endurance:0 } },
            "9-80": { name: "9-80", height: 80, weight: 6.9, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9pby8Hx51W", stats:{ atk:13, def:10, sta:7, accel:0, endurance:0 } }
        },
        bits: {//27筆軸心資料，屬性是錯的，請以官方資料為準
            "Accel": { name: "A 加速", type: "攻擊型", weight: 2.6, imgUrl: "", shopeeUrl: "https://s.shopee.tw/40e9bdi6DI", stats: { atk: 40, def: 10, sta: 10, accel: 40, endurance: 80 } },    
            "Ball": { name: "B 球狀軸心", type: "耐力型", weight: 2.1, imgUrl: "", shopeeUrl: "https://s.shopee.tw/4AxZnwhSsL", stats: { atk: 15, def: 25, sta: 50, accel: 10, endurance: 30 } },
            "Cyclone": { name: "C 暴風", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "https://s.shopee.tw/4LH00FgpXO", stats: { atk: 40, def: 5, sta: 10, accel: 45, endurance: 80 } },
            "Dot": { name: "D 圓點", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/4VaQCYgCCR", stats: { atk: 10, def: 55, sta: 25, accel: 10, endurance: 30 } },
            "Elevate": { name: "E 仰昇", type: "平衡型", weight: 3.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/4ftqOrfYrU", stats: { atk: 30, def: 15, sta: 20, accel: 35, endurance: 30 } },
            "Flat": { name: "F 平底軸心", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9KffxXcyFp", stats: { atk: 40, def: 15, sta: 10, accel: 35, endurance: 80 } },
            "Glide": { name: "G 滑行", type: "耐力型", weight:2.5, imgUrl:"", shopeeUrl:"https://s.shopee.tw/9pbwYSb4Ew", stats:{ atk:20, def:10, sta:55, accel:15, endurance:30 } },
            "Hexa": { name: "H 六角軸心", type: "平衡型", weight: 2.6, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9fIWM9bhZv", stats: { atk: 30, def: 35, sta: 20, accel: 15, endurance: 80 } },
            "Ignition": { name: "I 點火", type: "攻擊型", weight: 2.4, imgUrl: "", shopeeUrl: "https://s.shopee.tw/8pjPMcesGm", stats: { atk: 50, def: 15, sta: 5, accel: 30, endurance: 80 } },                    
            "Point": { name: "P 針點平底軸心", type: "平衡型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/8fPzAJfVbl", stats: { atk: 25, def: 25, sta: 25, accel: 25, endurance: 80 } },
            "Needle": { name: "N 尖底軸心", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/7KubZyIWlG", stats: { atk: 10, def: 50, sta: 30, accel: 10, endurance: 30 } },
            "Taper": { name: "T 錐形軸心", type: "平衡型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/7VE1mHHtQJ", stats: { atk:35, def:20, sta:20, accel:25, endurance:80 } },
            "High Needle": { name: "HN 高位針狀軸", type: "防禦型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/70HlBMJnRE", stats: { atk: 15, def: 55, sta: 20, accel: 10, endurance: 30 } },
            "Low Flat": { name: "LF 低位偏平軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "https://s.shopee.tw/7AbBNfJA6H", stats: { atk: 45, def: 5, sta: 10, accel: 40, endurance: 80 } },
            "Orb": { name: "O 微球軸", type: "耐力型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/6feumkL47C", stats: { atk: 10, def: 30, sta: 50, accel: 10, endurance: 30 } },
            "Spike": { name: "S 尖刺軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/4VaQCrlii9", stats: { atk: 10, def: 45, sta: 35, accel: 10, endurance: 30 } },
            "Rush": { name: "R 奔馳軸", type: "攻擊型", weight: 2.1, imgUrl: "", shopeeUrl: "https://s.shopee.tw/40e9bwncj4", stats: { atk: 40, def: 10, sta: 20, accel: 30, endurance: 80 } },
            "High Taper": { name: "HT 高位錐形軸", type:"平衡型", weight:2.2, imgUrl:"", shopeeUrl:"https://s.shopee.tw/4AxZoFmzO7", stats:{ atk:30, def:25, sta:20, accel:25, endurance:80 } },
            "Gear Flat": { name: "GF 齒輪平頭軸", type: "攻擊型", weight: 2.3, imgUrl: "", shopeeUrl: "https://s.shopee.tw/50WgnmjohI", stats: { atk: 50, def: 5, sta: 5, accel: 40, endurance: 80 } },
            "Gear Ball": { name: "GB 齒輪球狀軸", type: "耐力型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/5Aq705jBML", stats: { atk: 10, def: 15, sta: 45, accel: 30, endurance: 30 } },
            "Gear Point": { name: "GP 齒輪尖點軸", type: "平衡型", weight: 2.3, imgUrl: "", shopeeUrl: "https://s.shopee.tw/6pyKzpPRii", stats: { atk: 30, def: 25, sta: 15, accel: 30, endurance: 80 } },
            "Disc Ball": { name: "DB 圓盤球狀軸", type: "耐力型", weight: 3.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1LdORAQukH", stats: { atk: 15, def: 20, sta: 55, accel: 10, endurance: 30 } },
            "Unite": { name: "U 聯結軸", type: "平衡型", weight:2.1, imgUrl:"", shopeeUrl:"https://s.shopee.tw/1qZf25P0jO", stats:{ atk:25, def:25, sta:30, accel:20, endurance:80 } },
            "Vortex": { name: "V 渦流", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1gGEpmPe4N", stats: { atk: 45, def: 10, sta: 5, accel: 40, endurance: 80 } },            
            "Quake": { name: "Q 躍動軸", type: "攻擊型", weight: 2.2, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9zvMlsPx9p", stats: { atk: 55, def: 15, sta: 5, accel: 25, endurance: 80 } },
            "Metal Needle": { name: "MN 金屬針狀軸", type: "防禦型", weight: 2.8, imgUrl: "", shopeeUrl: "https://s.shopee.tw/5L9XCZiIWX", stats: { atk: 8, def: 57, sta: 30, accel: 5, endurance: 30 } },
            "Free Ball": { name: "FB 自由旋轉球狀軸", type: "耐力型", weight: 1.9, imgUrl: "", shopeeUrl: "https://s.shopee.tw/5q5nnUgOVe", stats: { atk: 10, def: 25, sta: 60, accel: 5, endurance: 30 } },
            "Under Flat": { name: "UF 超平底軸", type: "攻擊型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/9fIZbm3dI4", stats: { atk: 55, def: 5, sta: 5, accel: 35, endurance: 80 } },
            "Bound Spike": { name: "BS 彈簧防禦軸", type: "防禦型", weight: 2.0, imgUrl: "", shopeeUrl: "https://s.shopee.tw/1VwsfCjXva", stats: { atk: 5, def: 60, sta: 30, accel: 5, endurance: 30 } }
        }
    },


    sets: [//19套組
        // === 蒼龍神劍 系列 ===
        { 
          name: "蒼龍神劍 3-60F",
          type: "攻擊型",
          imgUrl: "",
          shopeeUrl: "https://s.shopee.tw/8ATiXKOiqK",
          components: { blade: "Dran_Sword_v1", ratchet: "3-60", bit: "Flat" }, 
          versions: ["BX-01", "BX-07", "BX-17-01", "BX-22"]},
        { 
          name: "蒼龍神劍 3-80B",
          type: "攻擊型",
          imgUrl: "",
          shopeeUrl: "https://s.shopee.tw/2g8lzITkpq",
          components: { blade: "Dran_Sword_v1", ratchet: "3-80", bit: "Ball" },
          versions: ["BX-14-03"]},
        { 
          name: "蒼龍神劍 4-80DB 金屬塗層", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/180oQLUzv",
          components: { blade: "Dran_Sword_v2", ratchet: "4-80", bit: "Disc Ball" },
          versions: ["BXC-00-01", "BXC-00-02", "BXC-00-03", "BXG-25-01", "BXG-12-04", "BXG-52"]},

        // === 惡魔紅鐮 系列 ===
        { 
          name: "惡魔紅鐮 4-60T", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/3B52aGeJpd",
          components: { blade: "Hells_Scythe_v1", ratchet: "4-60", bit: "Taper" }, 
          versions: ["BX-02"]},
        { 
          name: "惡魔紅鐮 3-80B", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/6feuklV9ah",
          components: { blade: "Hells_Scythe_v1", ratchet: "3-80", bit: "Ball" },
          versions: ["BX-08-01"]},
        { 
          name: "惡魔紅鐮 4-60T 金屬塗層:燦金", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/6VLUYVB7ZL",
          components: { blade: "Hells_Scythe_v2", ratchet: "4-60", bit: "Taper" },
          versions: ["BXG-03"]},
        { 
          name: "惡魔紅鐮 4-80LF", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/40e9cIxVJa",
          components: { blade: "Hells_Scythe_v1", ratchet: "4-80", bit: "Low Flat" },
          versions: ["BX-14-04"]},
        { 
          name: "惡魔紅鐮 3-85GB 金屬塗層:燦金", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/2qSCEEknmc",
          components: { blade: "Hells_Scythe_v2", ratchet: "3-85", bit: "Gear Ball" },
          versions: ["BX-48-04"]},

        // === 魔導幻箭 系列 ===
        { 
          name: "魔導幻箭 4-80B", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/110Y0Vc6FD",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-80", bit: "Ball" },
          versions: ["BX-03", "BX-05"]},
        { 
          name: "魔導幻箭 4-60N", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/gNhbvR9In",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-60", bit: "Needle" },
          versions: ["BX-08-03"]},
        { 
          name: "魔導幻箭 3-60T", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/3B52axB3Xi",
          components: { blade: "Wizard_Arrow_v1", ratchet: "3-60", bit: "Taper" },
          versions: ["BX-14-06"]},
        { 
          name: "魔導幻箭 4-80B 水藍版", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/9fIWKvFT45",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-80", bit: "Ball" },
          versions: ["BX-17-02"]},
        { 
          name: "魔導幻箭 4-80N", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/8fPz96jXnC",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-80", bit: "Needle" },
          versions: ["BX-21-03"]},
        { 
          name: "魔導幻箭 4-80GB", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/7KubYgspYH",
          components: { blade: "Wizard_Arrow_v1", ratchet: "4-80", bit: "Gear Ball" },
          versions: ["BX-24-06"]},

        // === 騎士重盾 系列 ===
        { 
          name: "騎士重盾 3-80N", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/AUrdKXMzf7",
          components: { blade: "Knight_Shield_v1", ratchet: "3-80", bit: "Needle" },
          versions: ["BX-04","BX-06"]},
        { 
          name: "騎士重盾 4-80T", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/1BJyDPduaw",
          components: { blade: "Knight_Shield_v1", ratchet: "4-80", bit: "Taper" },
          versions: ["BX-08-02"]},
        { 
          name: "騎士重盾 4-60LF", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/9pbwXMTL1X",
          components: { blade: "Knight_Shield_v1", ratchet: "4-60", bit: "Low Flat" },
          versions: ["BX-14-05"]},
        { 
          name: "騎士重盾 5-80T", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/2LVvbbQ4tA",
          components: { blade: "Knight_Shield_v1", ratchet: "5-80", bit: "Taper" },
          versions: ["BX-20-03"]},
        { 
          name: "騎士重盾 3-80N 金屬塗層:燦金", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/5Aq6yxzQaf",
          components: { blade: "Knight_Shield_v2", ratchet: "3-80", bit: "Needle" },
          versions: ["BXH-02"]},

          //魔導神杖系列
          { 
          name: "魔導神杖 5-70DB", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/5fmQj1nnja",
          components: { blade: "Wizard_Rod_v1", ratchet: "5-70", bit: "Disc Ball" },
          versions: ["UX-03","UX-04-02"]},
          { 
          name: "魔導神杖 1-60R", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/8ATlhdoKSh",
          components: { blade: "Wizard_Rod_v1", ratchet: "1-60", bit: "Rush" },
          versions: ["BX-35-04"]},
          { 
          name: "魔導神杖 5-70DB 金屬塗層", 
          type: "耐力型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/5fmQj44w4a",
          components: { blade: "Wizard_Rod_v2", ratchet: "5-70", bit: "Disc Ball" },
          versions: ["BXH-09"]},
          
          //鮫鯊狂鱗系列
          { 
          name: "鮫鯊狂鱗 4-50UF", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/1gGI5jIHaU",
          components: { blade: "Shark_Scale_v1", ratchet: "4-50", bit: "Under Flat" },
          versions: ["UX-15-01"]},

          //鳳凰飛翼系列
          { 
          name: "鳳凰飛翼 5-80H", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/2LVyuIOq5R",
          components: { blade: "Phoenix_Wing_v1", ratchet: "5-80", bit: "Hexa" },
          versions: ["BX-35-05"]},
          { 
          name: "鳳凰飛翼 9-80DB", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/60PHH37nOM",
          components: { blade: "Phoenix_Wing_v2", ratchet: "9-80", bit: "Disc Ball" },
          versions: ["BXC-05"]},
          { 
          name: "鳳凰飛翼 9-60GF 金屬塗層", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/8fQ2Rxvvwz",
          components: { blade: "Phoenix_Wing_v2", ratchet: "9-60", bit: "Gear Flat" },
          versions: ["BX-23", "BXG-35"]},

          //騎士圓甲
          { 
          name: "騎士圓甲 3-85BS", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/8fQ3D77rX4",
          components: { blade: "Knight_Mail_v1", ratchet: "3-85", bit: "Bound Spike" },
          versions: ["UX-10-01"]},
          { 
          name: "騎士圓甲 3-85BS 金屬塗層", 
          type: "防禦型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/4LH43ANokD",
          components: { blade: "Knight_Mail_v2", ratchet: "3-85", bit: "Bound Spike" },
          versions: ["BXG-42"]},

          //惡魔鎖鏈
          { 
          name: "惡魔鎖鏈 5-60HT", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/3Vhx5f1jbt",
          components: { blade: "Hells_Chain_v1", ratchet: "5-60", bit: "High Taper" },
          versions: ["BX-21-01"]},
          { 
          name: "惡魔鎖鏈 9-80O", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/6feyrV31ar",
          components: { blade: "Hells_Chain_v1", ratchet: "9-80", bit: "Orb" },
          versions: ["BX-31-03"]},

          //蒼龍利刃
          { 
          name: "蒼龍利刃 4-60R", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/7VE5umgFjW",
          components: { blade: "Dran_Dagger_v1", ratchet: "4-60", bit: "Rush" },
          versions: ["BX-20-01"]},
          { 
          name: "蒼龍利刃 4-70P", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/BRVBK7UVb",
          components: { blade: "Dran_Dagger_v1", ratchet: "4-70", bit: "Point" },
          versions: ["BX-31-04"]},
          { 
          name: "蒼龍利刃 2-80GP 金屬塗層", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/8KnCuLmina",
          components: { blade: "Dran_Dagger_v2", ratchet: "2-80", bit: "Gear Point" },
          versions: ["BXG-14"]},
          { 
          name: "蒼龍利刃 9-60LF 金屬塗層", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/6feyvIoGM1",
          components: { blade: "Dran_Dagger_v2", ratchet: "9-60", bit: "Low Flat" },
          versions: ["BXG-25-03"]},
          { 
          name: "蒼龍利刃 7-55G", 
          type: "攻擊型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/6L28Whijb8",
          components: { blade: "Dran_Dagger_v1", ratchet: "7-55", bit: "Glide" },
          versions: ["UX-18-05"]},
          
          //烈焰飛鳳S
          { 
          name: "烈焰飛鳳S 3-80T", 
          type: "平衡型", 
          imgUrl: "", 
          shopeeUrl: "https://s.shopee.tw/9pc2CDNckj",
          components: { blade: "DRANZER_SPIRAL_v1", ratchet: "3-80", bit: "Taper" },
          versions: ["BXG-01", "BXG-15"]}
    ]
};

/* ── 類型顏色 ── */
const TYPE_COLOR = {
  "攻擊型":"#D85A30","平衡型":"#D8A030","耐力型":"#1D9E75","防禦型":"#378ADD"
};
