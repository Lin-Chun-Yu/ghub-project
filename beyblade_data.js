const BEYBLADE_DATABASE = {
    // 零件定義區:所有可能的零件放在這裡，方便管理與新增
    parts: {
        blades: { //12筆
            "BX-01": { name: "蒼龍神劍", type: "攻擊型", weight: 35.1, imgUrl: "", stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 } },
            "BX-02": { name: "惡魔紅鐮", type: "平衡型", weight: 33.7, imgUrl: "", stats: { atk: 30, def: 35, sta: 35, accel: 0, endurance: 0 } },
            "BX-03": { name: "魔導幻箭", type: "耐力型", weight: 31.8, imgUrl: "", stats: { atk: 15, def: 30, sta: 55, accel: 0, endurance: 0 } },
            "BX-04": { name: "騎士重盾", type: "防禦型", weight: 34.8, imgUrl: "", stats: { atk: 20, def: 55, sta: 25, accel: 0, endurance: 0 } },
            "BX-00-DR": { name: "烈焰飛鳳S", type: "平衡型", weight: 34.5, imgUrl: "", stats: { atk: 35, def: 30, sta: 35, accel: 0, endurance: 0 } },
            "BX-07": { name: "蒼龍神劍 特別Ver.", type: "攻擊型", weight: 35.1, imgUrl: "", stats: { atk: 55, def: 25, sta: 20, accel: 0, endurance: 0 } },
            "BX-00-BS": { name: "蒼穹龍神 金屬塗層:藍", type: "攻擊型", weight: 34.5, imgUrl: "", stats: { atk: 70, def: 35, sta: 25, accel: 0, endurance: 0 } }
        },
        ratchets: { //10筆
            "1-60": { name: "1-60", height: 60, weight: 6.5, imgUrl: "", stats: { atk: 17, def: 9, sta: 4, accel: 0, endurance: 0 } },
            "1-80": { name: "1-80", height: 80, weight: 6.5, imgUrl: "", stats: { atk: 17, def: 4, sta: 9, accel: 0, endurance: 0 } },
            "2-60": { name: "2-60", height: 60, weight: 6.5, imgUrl: "", stats: { atk: 10, def: 13, sta: 7, accel: 0, endurance: 0 } },
            "2-80": { name: "2-80", height: 80, weight: 6.5, imgUrl: "", stats: { atk: 10, def: 11, sta: 9, accel: 0, endurance: 0 } },            
            "3-60": { name: "3-60", height: 60, weight: 6.5, imgUrl: "", stats: { atk: 15, def: 9, sta: 6, accel: 0, endurance: 0 } },
            "3-80": { name: "3-80", height: 80, weight: 6.5, imgUrl: "", stats: { atk: 15, def: 7, sta: 8, accel: 0, endurance: 0 } },
            "4-60": { name: "4-60", height: 60, weight: 6.8, imgUrl: "", stats: { atk: 11, def: 13, sta: 6, accel: 0, endurance: 0 } },
            "4-80": { name: "4-80", height: 80, weight: 6.5, imgUrl: "", stats: { atk: 11, def: 11, sta: 8, accel: 0, endurance: 0 } },
            "5-60": { name: "5-60", height: 60, weight: 6.5, imgUrl: "", stats: { atk: 12, def: 9, sta: 9, accel: 0, endurance: 0 } },
            "5-80": { name: "5-80", height: 80, weight: 6.5, imgUrl: "", stats: { atk: 12, def: 8, sta: 10, accel: 0, endurance: 0 } }
        },
        bits: {//12筆
            "Accel": { name: "加速", type: "攻擊型", weight: 2.59, imgUrl: "", stats: { atk: 40, def: 10, sta: 10, accel: 40, endurance: 80 } },    
            "Ball": { name: "球狀軸心", type: "耐力型", weight: 2.01, imgUrl: "", stats: { atk: 15, def: 25, sta: 50, accel: 10, endurance: 30 } },
            "Cyclone": { name: "暴風", type: "耐力型", weight: 2.11, imgUrl: "", stats: { atk: 40, def: 5, sta: 10, accel: 45, endurance: 80 } },
            "Dot": { name: "圓點", type: "耐力型", weight: 2.0, imgUrl: "", stats: { atk: 10, def: 55, sta: 25, accel: 10, endurance: 30 } },
            "Elevate": { name: "仰昇", type: "耐力型", weight: 3.26, imgUrl: "", stats: { atk: 30, def: 15, sta: 20, accel: 35, endurance: 30 } },
            "Flat": { name: "平底軸心", type: "耐力型", weight: 2.15, imgUrl: "", stats: { atk: 40, def: 15, sta: 10, accel: 35, endurance: 80 } },
            "Glide": { name: "滑行", type: "耐力型", weight: 2.54, imgUrl: "", stats: { atk: 20, def: 10, sta: 55, accel: 15, endurance: 30 } },
            "Hexa": { name: "六角軸心", type: "耐力型", weight: 2.57, imgUrl: "", stats: { atk: 30, def: 35, sta: 20, accel: 15, endurance: 80 } },
            "Impact": { name: "衝擊", type: "耐力型", weight: 2.1, imgUrl: "", stats: { atk: 50, def: 15, sta: 5, accel: 30, endurance: 80 } },                    
            "Point": { name: "針點平底軸心", type: "攻擊型", weight: 2.23, imgUrl: "", stats: { atk: 25, def: 25, sta: 25, accel: 25, endurance: 80 } },
            "Needle": { name: "尖底軸心", type: "防禦型", weight: 2.01, imgUrl: "", stats: { atk: 10, def: 50, sta: 30, accel: 10, endurance: 30 } },
            "Taper": { name: "錐形軸心", type: "平衡型", weight: 2.22, imgUrl: "", stats: { atk: 35, def: 20, sta: 20, accel: 25, endurance: 80 } }
        }
    },

    // 套組定義區：純粹用來定義官方推薦的組合
    sets: [
        { id: "S-01", name: "蒼龍神劍", type: "攻擊型", components: { blade: "BX-01", ratchet: "3-60", bit: "Flat" } },
        { id: "S-02", name: "惡魔紅鐮", type: "平衡型", components: { blade: "BX-02", ratchet: "4-60", bit: "Taper" } },
        { id: "S-03", name: "魔導幻箭", type: "耐力型", components: { blade: "BX-03", ratchet: "4-80", bit: "Ball" } },
        { id: "S-04", name: "騎士重盾", type: "防禦型", components: { blade: "BX-04", ratchet: "3-80", bit: "Needle" } },
        { id: "S-05", name: "魔導幻箭", type: "耐力型", components: { blade: "BX-03", ratchet: "4-80", bit: "Ball" } },
        { id: "S-06", name: "騎士重盾", type: "防禦型", components: { blade: "BX-04", ratchet: "3-80", bit: "Needle" } },
        { id: "S-00", name: "烈焰飛鳳S", type: "平衡型", components: { blade: "BX-00-DR", ratchet: "3-80", bit: "Taper" } },
        { id: "S-07", name: "蒼龍神劍 特別Ver.", type: "攻擊型", components: { blade: "BX-07", ratchet: "3-60", bit: "Flat" } },
        { id: "S-08", name: "惡魔紅鐮", type: "平衡型", components: { blade: "BX-02", ratchet: "3-80", bit: "Ball" } },
        { id: "S-08", name: "騎士重盾", type: "防禦型", components: { blade: "BX-04", ratchet: "4-80", bit: "Taper" } }        
    ]
};

/* ── 類型顏色 ── */
const TYPE_COLOR = {
  "攻擊型":"#D85A30","平衡型":"#D8A030","耐力型":"#1D9E75","防禦型":"#378ADD"
};
