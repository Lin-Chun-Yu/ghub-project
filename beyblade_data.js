const BEYBLADE_DATABASE = {
    // 鋼鐵戰刃 (Blade)
    blades: [
        { 
            id: "BX-01", 
            name: "蒼龍神劍", 
            type: "攻擊型", 
            stats: { atk: 55, def: 25, sta: 20, height: 0, accel: 0, endurance: 0 } 
        },
        { 
            id: "BX-02", 
            name: "惡魔紅鐮", 
            type: "平衡型", 
            stats: { atk: 30, def: 35, sta: 35, height: 0, accel: 0, endurance: 0 } 
        }
    ],
    // 固鎖輪盤 (Ratchet)
    ratchets: [
        { 
            id: "3-60", 
            name: "3-60", 
            stats: { atk: 15, def: 9, sta: 6, height: 60, accel: 0, endurance: 0 } 
        },
        { 
            id: "4-60", 
            name: "4-60", 
            stats: { atk: 0, def: 0, sta: 0, height: 60, accel: 0, endurance: 0 } 
        }
    ],
    // 軸心 (Bit)
    bits: [
        { 
            id: "F", 
            name: "Flat (F)", 
            type: "攻擊型", 
            stats: { atk: 40, def: 15, sta: 10, height: 0, accel: 35, endurance: 80 } 
        },
        { 
            id: "T", 
            name: "Taper (T)", 
            type: "平衡型", 
            stats: { atk: 35, def: 20, sta: 20, height: 0, accel: 25, endurance: 80 } 
        }
    ],
    // 套組 (Sets)
    sets: [
        { id: "BX-01-Set", name: "蒼龍神劍 3-60F", components: ["BX-01", "3-60", "F"] },
        { id: "BX-02-Set", name: "惡魔紅鐮 4-60T", components: ["BX-02", "4-60", "T"] }
    ]
};

export default BEYBLADE_DATABASE;