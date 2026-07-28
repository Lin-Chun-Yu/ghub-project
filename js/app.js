/* ═══════════════════════════════════════════
   G-Hub 戰鬥陀螺 X 台灣 — app.js  v3.6.1
═══════════════════════════════════════════ */

const TYPE_WEIGHTS = {
  "攻擊型": { atk:.35, def:.10, sta:.15, accel:.25, endurance:.15 },
  "防禦型": { atk:.10, def:.35, sta:.15, accel:.10, endurance:.30 },
  "耐力型": { atk:.10, def:.15, sta:.35, accel:.10, endurance:.30 },
  "平衡型": { atk:.22, def:.22, sta:.22, accel:.17, endurance:.17 }
};

// ★ v3.6.1 修復：動態抓取當前網域，不硬寫
const SITE_URL = window.location.origin +
  (window.location.pathname !== '/' ? window.location.pathname.replace(/\/$/, '') : '');

const FORM_URL  = "https://docs.google.com/forms/d/e/1FAIpQLSfOET3LO_fbMNnPVmx_dNSt4IfbdxrmPtAueEJxtJ8BaFICYg/formResponse";
const ENTRY_ID  = "entry.1318000550";

function typeBadgeHtml(t, s = 9) {
  const c = TYPE_COLOR[t] || "#9090a8";
  return t ? `<span style="font-size:${s}px;padding:1px 6px;border-radius:20px;color:${c};background:${c}18;border:.5px solid ${c}44;white-space:nowrap;flex-shrink:0">${t}</span>` : "";
}
function versStr(a) {
  if (!a || !a.length) return "";
  return a.length <= 5 ? a.join("　") : a.slice(0, 4).join("　") + " …";
}
function getRatchetGroup(key) {
  const p = key.split("-")[0];
  if (!/^\d+$/.test(p)) return "other";
  const n = parseInt(p, 10);
  if (n === 0) return "other";
  if (n <= 3)  return "1~3";
  if (n <= 5)  return "4~5";
  if (n <= 9)  return "6~9";
  return "other";
}
function getProngInfo(key) {
  const pfx = key.split("-")[0];
  const grp = getRatchetGroup(key);
  const colors = { "1~3":"#5DCAA5", "4~5":"#D8A030", "6~9":"#378ADD", "other":"#C49EF0" };
  const label = /^\d+$/.test(pfx) && parseInt(pfx) > 0 ? `${pfx} 側` : "特殊";
  return { label, color: colors[grp] || "#9090a8" };
}
function getSetTotalWeight(set) {
  const bl = BEYBLADE_DATABASE.parts.blades[set.components.blade];
  const ra = BEYBLADE_DATABASE.parts.ratchets[set.components.ratchet];
  const bi = BEYBLADE_DATABASE.parts.bits[set.components.bit];
  return parseFloat((((bl?.weight || 0) + (ra?.weight || 0) + (bi?.weight || 0)).toFixed(2)));
}
function getSetSeriesPrefixes(set) {
  const s = new Set();
  (set.versions || []).forEach(v => { const m = v.match(/^(UX|CX|BX)/); if (m) s.add(m[1]); });
  return s;
}
function calcScore(atk, def, sta, accel, endurance, w, type) {
  const wt = TYPE_WEIGHTS[type] || TYPE_WEIGHTS["平衡型"];
  const v = { atk, def, sta, accel, endurance };
  let raw = 0, lb = 0;
  for (const k of Object.keys(wt)) {
    raw += Math.min(v[k], 100) * wt[k];
    if (v[k] > 100) lb += Math.min((v[k] - 100) * .10, 3);
  }
  return Math.min(Math.round((raw / 100) * 87 + lb + Math.min(Math.max(w - 40, 0) * .3, 6) + 3), 100);
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
function goto(page, el) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelectorAll("[data-m]").forEach(b => b.classList.remove("active"));
  const ids = { home:"nb-home", bey:"nb-bey", cl:"nb-cl" };
  if (ids[page]) document.getElementById(ids[page]).classList.add("active");
  document.querySelectorAll(`[data-m="${page}"]`).forEach(b => b.classList.add("active"));
  if (page === "home") setTimeout(() => { initMap(); if (lmap) lmap.invalidateSize(); }, 80);
  if (page === "bey")  setTimeout(resizeRadar, 50);
}
function toggleMob() {
  const menu = document.getElementById("mob-menu");
  const btn  = document.getElementById("hamburger-btn");
  const isOpen = menu.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  btn.setAttribute("aria-expanded", isOpen);
  btn.setAttribute("aria-label", isOpen ? "關閉選單" : "開啟選單");
}

/* ─────────────────────────────────────────
   SETS DROPDOWN
───────────────────────────────────────── */
function renderSetsDropdown() {
  const inner = document.getElementById("ddi-sets"); inner.innerHTML = "";
  const query = (document.getElementById("sets-search")?.value || "").trim().toLowerCase();
  const sf = document.getElementById("sets-series")?.value || "全部";
  const tf = document.getElementById("sets-type")?.value   || "全部";
  const sm = document.getElementById("sets-sort")?.value   || "default";

  let filtered = BEYBLADE_DATABASE.sets.filter(set => {
    if (sf !== "全部") { const sp = getSetSeriesPrefixes(set); if (!sp.has(sf)) return false; }
    if (tf !== "全部" && set.type !== tf) return false;
    if (query) {
      const nm = set.name.toLowerCase().includes(query);
      const vm = (set.versions || []).some(v => v.toLowerCase().includes(query));
      if (!nm && !vm) return false;
    }
    return true;
  }).map(set => ({ set, origIdx: BEYBLADE_DATABASE.sets.indexOf(set), w: getSetTotalWeight(set) }));

  if (sm === "heavy") filtered.sort((a, b) => b.w - a.w);
  else if (sm === "light") filtered.sort((a, b) => a.w - b.w);

  if (!filtered.length) { inner.innerHTML = `<div class="pd-empty">無符合條件的套組</div>`; return; }

  filtered.forEach(({ set, origIdx, w }) => {
    const st = set.type || "平衡型";
    const div = document.createElement("div"); div.className = "pd-item"; div.dataset.idx = origIdx;
    div.innerHTML = `<div class="pd-main"><div class="pd-toprow"><span class="pd-name">${set.name}</span>${typeBadgeHtml(st)}</div>${set.versions?.length ? `<div class="pd-ver">${versStr(set.versions)}</div>` : ""}</div><span class="pd-weight">${w}g</span><i class="ti ti-check pd-check"></i>`;
    div.addEventListener("click", () => { applySet(origIdx); closeAllDD(); });
    inner.appendChild(div);
  });
  if (selSet) {
    const ci = BEYBLADE_DATABASE.sets.indexOf(selSet);
    inner.querySelectorAll(".pd-item").forEach(el => el.classList.toggle("active", parseInt(el.dataset.idx) === ci));
  }
}

/* ─────────────────────────────────────────
   PARTS DROPDOWNS
───────────────────────────────────────── */
const filterState = {
  blade:   { val: "全部", sort: "default" },
  ratchet: { val: "全部", sort: "default" },
  bit:     { val: "全部", sort: "default" }
};
function setFilter(pt, val, btn) {
  filterState[pt].val = val;
  document.querySelectorAll(`#toolbar-${pt} .pd-filter-btn`).forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderFilteredList(pt);
}
function setSort(pt, val) { filterState[pt].sort = val; renderFilteredList(pt); }

function renderFilteredList(partType) {
  const dbKey = { blade:"blades", ratchet:"ratchets", bit:"bits" }[partType];
  const parts = BEYBLADE_DATABASE.parts[dbKey];
  const inner = document.getElementById("ddi-" + partType); inner.innerHTML = "";
  const { val: fVal, sort: fSort } = filterState[partType];

  let entries = Object.entries(parts).filter(([key, p]) => {
    if (partType === "ratchet") return fVal === "全部" || getRatchetGroup(key) === fVal;
    return fVal === "全部" || p.type === fVal;
  });
  if (fSort === "heavy") entries.sort((a, b) => b[1].weight - a[1].weight);
  else if (fSort === "light") entries.sort((a, b) => a[1].weight - b[1].weight);
  if (!entries.length) { inner.innerHTML = `<div class="pd-empty">此條件無零件資料</div>`; return; }

  const curSel = { blade: selBlade, ratchet: selRatchet, bit: selBit }[partType];
  entries.forEach(([key, p]) => {
    const div = document.createElement("div"); div.className = "pd-item"; div.dataset.key = key;
    if (partType === "blade") {
      div.innerHTML = `<div class="pd-main"><div class="pd-toprow"><span class="pd-name">${p.name}</span>${typeBadgeHtml(p.type)}</div>${p.versions?.length ? `<div class="pd-ver">${versStr(p.versions)}</div>` : ""}</div><span class="pd-weight">${p.weight}g</span><i class="ti ti-check pd-check"></i>`;
    } else if (partType === "ratchet") {
      const { label, color } = getProngInfo(key);
      const pB = `<span style="font-size:9px;padding:1px 6px;border-radius:20px;color:${color};background:${color}18;border:.5px solid ${color}44;white-space:nowrap;flex-shrink:0">${label}</span>`;
      div.innerHTML = `<div class="pd-main"><div class="pd-toprow"><span class="pd-name">${p.name}</span>${pB}</div><div class="pd-ver" style="color:var(--t3)">高度 ${p.height} mm</div></div><span class="pd-weight">${p.weight}g</span><i class="ti ti-check pd-check"></i>`;
    } else {
      div.innerHTML = `<div class="pd-main"><div class="pd-toprow"><span class="pd-name">${p.name}</span>${typeBadgeHtml(p.type)}</div></div><span class="pd-weight">${p.weight}g</span><i class="ti ti-check pd-check"></i>`;
    }
    div.addEventListener("click", () => {
      selSet = null;
      document.getElementById("disp-sets-name").textContent = "請選擇套組";
      document.getElementById("disp-sets-type").style.display = "none";
      document.getElementById("disp-sets-ver").textContent = "—";
      document.getElementById("disp-sets-weight").style.display = "none";
      selectPart(partType, key);
      closeAllDD();
    });
    if (curSel && curSel._key === key) div.classList.add("active");
    inner.appendChild(div);
  });
}

/* ─────────────────────────────────────────
   DROPDOWN OPEN/CLOSE
───────────────────────────────────────── */
const ALL_DD = ["sets", "blade", "ratchet", "bit"];
function toggleDD(type) {
  const dd   = document.getElementById("dd-"   + type);
  const arr  = document.getElementById("arr-"  + type);
  const trig = document.getElementById("trig-" + type);
  const wasOpen = dd.classList.contains("open");
  closeAllDD();
  if (!wasOpen) {
    dd.classList.add("open"); arr.classList.add("open"); trig.classList.add("open");
    if (type === "sets") renderSetsDropdown();
  }
}
function closeAllDD() {
  ALL_DD.forEach(t => {
    const dd   = document.getElementById("dd-"   + t);
    const arr  = document.getElementById("arr-"  + t);
    const trig = document.getElementById("trig-" + t);
    if (dd)   dd.classList.remove("open");
    if (arr)  arr.classList.remove("open");
    if (trig) trig.classList.remove("open");
  });
}
document.addEventListener("click", e => {
  if (e.target.closest(".pd-toolbar") || e.target.closest(".pd-toolbar-old")) return;
  if (!e.target.closest(".part-group")) closeAllDD();
});

/* ─────────────────────────────────────────
   APPLY SET / SELECT PART
───────────────────────────────────────── */
let selSet = null;
function applySet(idx) {
  const set = BEYBLADE_DATABASE.sets[idx]; if (!set) return;
  selSet = set;
  const st = set.type || "平衡型"; const tc = TYPE_COLOR[st] || "#9090a8";
  document.getElementById("disp-sets-name").textContent = set.name;
  const tEl = document.getElementById("disp-sets-type");
  tEl.textContent = st;
  tEl.style.cssText = `display:inline;font-size:9px;padding:1px 6px;border-radius:20px;color:${tc};background:${tc}18;border:.5px solid ${tc}44`;
  document.getElementById("disp-sets-ver").textContent = set.versions?.length ? versStr(set.versions) : "";
  const sw = document.getElementById("disp-sets-weight");
  sw.textContent = getSetTotalWeight(set) + "g"; sw.style.display = "";
  renderSetsDropdown();
  selectPart("blade",   set.components.blade);
  selectPart("ratchet", set.components.ratchet);
  selectPart("bit",     set.components.bit);
}

let selBlade = null, selRatchet = null, selBit = null;
function selectPart(type, key) {
  const map = { blade:"blades", ratchet:"ratchets", bit:"bits" };
  const p = BEYBLADE_DATABASE.parts[map[type]][key]; if (!p) return;
  const obj = { _key: key, ...p };
  if (type === "blade")   selBlade   = obj;
  if (type === "ratchet") selRatchet = obj;
  if (type === "bit")     selBit     = obj;
  const tc = TYPE_COLOR[p.type] || "";

  if (type === "blade") {
    document.getElementById("disp-blade-name").textContent = p.name;
    const tEl = document.getElementById("disp-blade-type");
    if (p.type) { tEl.textContent = p.type; tEl.style.cssText = `display:inline;font-size:9px;padding:1px 6px;border-radius:20px;color:${tc};background:${tc}18;border:.5px solid ${tc}44`; } else tEl.style.display = "none";
    document.getElementById("disp-blade-ver").textContent    = versStr(p.versions) || "";
    document.getElementById("disp-blade-weight").textContent = p.weight + "g";
    renderFilteredList("blade");
  } else if (type === "ratchet") {
    document.getElementById("disp-ratchet-name").textContent = p.name;
    const { label, color } = getProngInfo(key);
    const pEl = document.getElementById("disp-ratchet-prong");
    pEl.textContent = label;
    pEl.style.cssText = `display:inline;font-size:9px;padding:1px 6px;border-radius:20px;color:${color};background:${color}18;border:.5px solid ${color}44;white-space:nowrap;flex-shrink:0`;
    document.getElementById("disp-ratchet-meta").textContent   = `高度 ${p.height} mm`;
    document.getElementById("disp-ratchet-weight").textContent = p.weight + "g";
    renderFilteredList("ratchet");
  } else {
    document.getElementById("disp-bit-name").textContent   = p.name;
    document.getElementById("disp-bit-weight").textContent = p.weight + "g";
    const tEl = document.getElementById("disp-bit-type");
    if (p.type) { tEl.textContent = p.type; tEl.style.cssText = `display:inline;font-size:9px;padding:1px 6px;border-radius:20px;color:${tc};background:${tc}18;border:.5px solid ${tc}44`; } else tEl.style.display = "none";
    renderFilteredList("bit");
  }
  document.querySelectorAll(`#ddi-${type} .pd-item`).forEach(el => el.classList.toggle("active", el.dataset.key === key));
  updateStats();
}

/* ─────────────────────────────────────────
   RADAR CHART
───────────────────────────────────────── */
const AXES = [
  { key:"atk",       label:"攻擊",  color:"#D85A30" },
  { key:"def",       label:"防禦",  color:"#378ADD" },
  { key:"endurance", label:"耐久度",color:"#D85070" },
  { key:"accel",     label:"加速",  color:"#D8A030" },
  { key:"sta",       label:"耐力",  color:"#1D9E75" }
];
const N = 5, STEPS = 5;
let rCvs = null, rCtx = null, rSize = 0, rCX = 0, rCY = 0, rMax = 0;
let rVals   = { atk:0, def:0, sta:0, accel:0, endurance:0 };
let rTarget = { atk:0, def:0, sta:0, accel:0, endurance:0 };
let rScale = 100, rScaleTarget = 100;

function calcRadarScale(v) {
  const m = Math.max(...Object.values(v));
  return m <= 100 ? 100 : Math.ceil(m / 20) * 20;
}
function resizeRadar() {
  const col = document.querySelector(".col-radar"); if (!col || !rCvs) return;
  const isMobile = window.innerWidth <= 768;
  const availW = col.offsetWidth - 24;
  const availH = isMobile ? Math.min(availW, 300) : (col.offsetHeight - 78);
  rSize = Math.max(160, Math.min(availW, availH));
  rCvs.width = rCvs.height = rSize;
  rCX = rSize / 2; rCY = rSize / 2; rMax = rSize * .30;
}
function initRadar() {
  rCvs = document.getElementById("radar-canvas");
  rCtx = rCvs.getContext("2d");
  document.getElementById("radar-legend").innerHTML =
    [{ label:"攻擊", color:"#D85A30" }, { label:"防禦", color:"#378ADD" },
     { label:"耐力", color:"#1D9E75" }, { label:"加速", color:"#D8A030" },
     { label:"耐久度", color:"#D85070" }]
    .map(a => `<div class="rl-item"><div class="rl-dot" style="background:${a.color}"></div><span>${a.label}</span></div>`).join("");
  resizeRadar();
  radarLoop();
}
function radarLoop() {
  AXES.forEach(a => { const d = rTarget[a.key] - rVals[a.key]; rVals[a.key] += Math.abs(d) > .15 ? d * .12 : d; });
  const sd = rScaleTarget - rScale; rScale += Math.abs(sd) > .15 ? sd * .12 : sd;
  if (rCtx) drawRadar();
  requestAnimationFrame(radarLoop);
}
function rPt(idx, val)  { const a = (idx / N) * Math.PI * 2 - Math.PI / 2, r = (val / rScale) * rMax; return { x: rCX + Math.cos(a) * r, y: rCY + Math.sin(a) * r }; }
function rGpt(idx, step){ const a = (idx / N) * Math.PI * 2 - Math.PI / 2, r = (step / STEPS) * rMax; return { x: rCX + Math.cos(a) * r, y: rCY + Math.sin(a) * r }; }
function axisTA(a) { return Math.cos(a) > 0.3 ? "left" : Math.cos(a) < -0.3 ? "right" : "center"; }
function axisTB(a) { return Math.sin(a) < -0.3 ? "bottom" : Math.sin(a) > 0.3 ? "top" : "middle"; }

function drawRadar() {
  const c = rCtx; c.clearRect(0, 0, rSize, rSize);
  const isOver = rScaleTarget > 100;
  for (let s = 1; s <= STEPS; s++) {
    c.beginPath();
    for (let i = 0; i < N; i++) { const p = rGpt(i, s); if (i === 0) c.moveTo(p.x, p.y); else c.lineTo(p.x, p.y); }
    c.closePath();
    if (s < STEPS) { c.fillStyle = "rgba(24,24,31,0.55)"; c.fill(); }
    if (s === STEPS && isOver) { c.strokeStyle = "#FF450066"; c.lineWidth = 1.2; c.setLineDash([4,3]); c.stroke(); c.setLineDash([]); }
    else { c.strokeStyle = s === STEPS ? "#363648aa" : "#2a2a3866"; c.lineWidth = s === STEPS ? 1 : .6; c.stroke(); }
  }
  c.save(); c.font = "9px sans-serif"; c.fillStyle = isOver ? "#D8A030" : "#5a5a70"; c.textAlign = "center"; c.textBaseline = "middle";
  const tp = rGpt(0, STEPS); c.fillText(Math.round(rScale), tp.x, tp.y - 10); c.restore();
  for (let i = 0; i < N; i++) { const o = rGpt(i, STEPS); c.beginPath(); c.moveTo(rCX, rCY); c.lineTo(o.x, o.y); c.strokeStyle = "#2a2a3888"; c.lineWidth = .7; c.stroke(); }
  c.beginPath();
  for (let i = 0; i < N; i++) { const p = rPt(i, rVals[AXES[i].key]); if (i === 0) c.moveTo(p.x, p.y); else c.lineTo(p.x, p.y); }
  c.closePath();
  if (isOver) {
    const g = c.createRadialGradient(rCX,rCY,0,rCX,rCY,rMax);
    g.addColorStop(0,"rgba(255,69,0,0.35)"); g.addColorStop(.5,"rgba(138,43,226,0.2)"); g.addColorStop(1,"rgba(138,43,226,0.05)");
    c.fillStyle = g; c.fill(); c.strokeStyle = "rgba(255,100,50,0.85)"; c.lineWidth = 2; c.stroke();
  } else {
    const g = c.createRadialGradient(rCX,rCY,0,rCX,rCY,rMax);
    g.addColorStop(0,"rgba(55,138,221,0.42)"); g.addColorStop(1,"rgba(55,138,221,0.08)");
    c.fillStyle = g; c.fill(); c.strokeStyle = "rgba(133,183,235,0.75)"; c.lineWidth = 1.8; c.stroke();
  }
  const LR = rMax + 18, VR = rMax + 32;
  for (let i = 0; i < N; i++) {
    const ax = AXES[i], angle = (i / N) * Math.PI * 2 - Math.PI / 2;
    const rv = Math.round(rTarget[ax.key]), dp = rPt(i, rVals[ax.key]);
    c.beginPath(); c.arc(dp.x, dp.y, 4.5, 0, Math.PI * 2); c.fillStyle = rv > 100 ? "#FF4500" : ax.color; c.fill();
    c.strokeStyle = "#0a0a0f88"; c.lineWidth = 1.5; c.stroke();
    if (rv > 100) { c.beginPath(); c.arc(dp.x, dp.y, 7, 0, Math.PI * 2); c.strokeStyle = "#FF450055"; c.lineWidth = 2; c.stroke(); }
    const ta = axisTA(angle), tb = axisTB(angle);
    const lx = rCX + Math.cos(angle) * LR, ly = rCY + Math.sin(angle) * LR;
    c.save(); c.font = "10px sans-serif"; c.fillStyle = "#9090a8"; c.textAlign = ta; c.textBaseline = tb; c.fillText(ax.label, lx, ly); c.restore();
    const vx = rCX + Math.cos(angle) * VR, vy = rCY + Math.sin(angle) * VR;
    c.save(); c.font = "bold 13px sans-serif"; c.fillStyle = rv > 100 ? "#FF4500" : ax.color; c.textAlign = ta; c.textBaseline = tb;
    if (rv > 100) { c.shadowColor = "#FF4500"; c.shadowBlur = 8; }
    c.fillText(rv, vx, vy); c.shadowBlur = 0; c.restore();
  }
}

/* ─────────────────────────────────────────
   UPDATE STATS
───────────────────────────────────────── */
const STAT_META = {
  atk:       { color:"#D85A30", desk:{ sv:"v-atk",   sb:"sb-atk",   bar:"bar-atk"   }, mob:{ sv:"mob-v-atk",   sb:"mob-sb-atk",   bar:"mob-bar-atk"   } },
  def:       { color:"#378ADD", desk:{ sv:"v-def",   sb:"sb-def",   bar:"bar-def"   }, mob:{ sv:"mob-v-def",   sb:"mob-sb-def",   bar:"mob-bar-def"   } },
  sta:       { color:"#1D9E75", desk:{ sv:"v-sta",   sb:"sb-sta",   bar:"bar-sta"   }, mob:{ sv:"mob-v-sta",   sb:"mob-sb-sta",   bar:"mob-bar-sta"   } },
  accel:     { color:"#D8A030", desk:{ sv:"v-accel", sb:"sb-accel", bar:"bar-accel" }, mob:{ sv:"mob-v-accel", sb:"mob-sb-accel", bar:"mob-bar-accel" } },
  endurance: { color:"#D85070", desk:{ sv:"v-end",   sb:"sb-end",   bar:"bar-end"   }, mob:{ sv:"mob-v-end",   sb:"mob-sb-end",   bar:"mob-bar-end"   } }
};
function applyStatUI(ids, v, color, lb) {
  const svEl = document.getElementById(ids.sv);
  const sbEl = document.getElementById(ids.sb);
  const barEl= document.getElementById(ids.bar);
  if (!svEl || !sbEl || !barEl) return;
  svEl.textContent = v;
  sbEl.classList.toggle("limitbreak", lb);
  svEl.classList.toggle("limitbreak", lb);
  if (!lb) svEl.style.color = color;
  barEl.style.width      = Math.min(v / 100, 1) * 100 + "%";
  barEl.style.background = lb ? "#FF4500" : color;
  barEl.classList.toggle("limitbreak", lb);
  if (lb) barEl.style.color = "#FF4500";
}

let currentCombo = { comboName:"", score:0, type:"", totalWeight:0, bladeKey:"", ratchetKey:"", bitKey:"", atk:0, def:0, sta:0, accel:0, endurance:0, height:60 };

function updateStats() {
  if (!selBlade || !selRatchet || !selBit) return;
  const b = selBlade.stats, r = selRatchet.stats, bt = selBit.stats;
  const atk       = (b.atk       || 0) + (r.atk       || 0) + (bt.atk       || 0);
  const def       = (b.def       || 0) + (r.def       || 0) + (bt.def       || 0);
  const sta       = (b.sta       || 0) + (r.sta       || 0) + (bt.sta       || 0);
  const accel     = (b.accel     || 0) + (r.accel     || 0) + (bt.accel     || 0);
  const endurance = (b.endurance || 0) + (r.endurance || 0) + (bt.endurance || 0);
  const height      = selRatchet.height || 60;
  const totalWeight = parseFloat(((selBlade.weight || 0) + (selRatchet.weight || 0) + (selBit.weight || 0)).toFixed(2));
  const vals = { atk, def, sta, accel, endurance };
  const ns   = calcRadarScale(vals);
  rScaleTarget = ns; rTarget = { ...vals };
  const isOver = ns > 100;
  document.getElementById("radar-scale-label").textContent = isOver ? `極限突破！刻度上限：${ns}` : `刻度上限：100`;
  document.getElementById("radar-scale-badge").classList.toggle("overscale", isOver);
  Object.entries(vals).forEach(([k, v]) => {
    const m = STAT_META[k]; if (!m) return;
    const lb = v > 100; applyStatUI(m.desk, v, m.color, lb); applyStatUI(m.mob, v, m.color, lb);
  });
  const comboText = selSet
    ? `${selSet.name}  /  ${selBlade.name} ・ ${selRatchet.name} ・ ${selBit.name}`
    : `${selBlade.name} / ${selRatchet.name} / ${selBit.name}`;
  const max = Math.max(atk, def, sta);
  let type = "平衡型", tc = "#BA7517";
  if (max === atk && atk - def > 15 && atk - sta > 15) { type = "攻擊型"; tc = "#D85A30"; }
  else if (max === def && def - atk > 15 && def - sta > 15) { type = "防禦型"; tc = "#378ADD"; }
  else if (max === sta && sta - atk > 15 && sta - def > 15) { type = "耐力型"; tc = "#1D9E75"; }
  const score = calcScore(atk, def, sta, accel, endurance, totalWeight, type);
  const badgeText = `${score} 分・${type}`;
  ["combo-name","mob-combo-name"].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = comboText; });
  ["height-val","mob-height-val"].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = height + " mm"; });
  ["mrow","mob-mrow"].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = `<span class="mp">⚖ ${totalWeight}g</span>`; });
  ["sbadge","mob-sbadge"].forEach(id => {
    const el = document.getElementById(id); if (!el) return;
    el.textContent = badgeText; el.style.color = tc; el.style.borderColor = tc + "44";
    el.classList.toggle("limitbreak-score", isOver);
  });
  document.getElementById("cl-atk").textContent = atk;
  document.getElementById("cl-def").textContent = def;
  document.getElementById("cl-sta").textContent = sta;
  currentCombo = { comboName:comboText, score, type, totalWeight, bladeKey:selBlade._key, ratchetKey:selRatchet._key, bitKey:selBit._key, atk, def, sta, accel, endurance, height };
}

/* ─────────────────────────────────────────
   SHOPEE
───────────────────────────────────────── */
function shopeeOpen(url) { window.open((url && url !== "") ? url : "https://shopee.tw/search?keyword=戰鬥陀螺X", "_blank"); }
function shopeeOpenPart(type) { const pm = { blade:selBlade, ratchet:selRatchet, bit:selBit }; shopeeOpen(pm[type]?.shopeeUrl || ""); }
function shopeeOpenSet() { shopeeOpen(selSet?.shopeeUrl || ""); }

/* ─────────────────────────────────────────
   ★ v3.6.1 BUG FIX 1 & 2: DEEP LINK
   用 resolveKey() 容錯比對，套用後同步官方套組欄位
───────────────────────────────────────── */
function resolveKey(raw, dict) {
  if (!raw) return null;
  if (dict[raw]) return raw;
  const decoded = decodeURIComponent(raw);
  if (dict[decoded]) return decoded;
  const lower = decoded.toLowerCase();
  return Object.keys(dict).find(k => k.toLowerCase() === lower) || null;
}

function applyDeepLink() {
  const params  = new URLSearchParams(window.location.search);
  const bRaw    = params.get("b");
  const rRaw    = params.get("r");
  const bitRaw  = params.get("bit");
  if (!bRaw && !rRaw && !bitRaw) return;

  const blades   = BEYBLADE_DATABASE.parts.blades;
  const ratchets = BEYBLADE_DATABASE.parts.ratchets;
  const bits     = BEYBLADE_DATABASE.parts.bits;

  const bKey   = resolveKey(bRaw,   blades);
  const rKey   = resolveKey(rRaw,   ratchets);
  const bitKey = resolveKey(bitRaw, bits);
  if (!bKey && !rKey && !bitKey) return;

  // 自動切換至神配置計算機
  goto("bey", document.getElementById("nb-bey"));

  // 套用零件
  if (bKey)   selectPart("blade",   bKey);
  if (rKey)   selectPart("ratchet", rKey);
  if (bitKey) selectPart("bit",     bitKey);

  // ★ Bug Fix：比對官方套組，同步更新套組欄位
  const matchedSetIdx = BEYBLADE_DATABASE.sets.findIndex(set =>
    set.components.blade   === bKey &&
    set.components.ratchet === rKey &&
    set.components.bit     === bitKey
  );
  if (matchedSetIdx !== -1) {
    const matchedSet = BEYBLADE_DATABASE.sets[matchedSetIdx];
    selSet = matchedSet;
    const st = matchedSet.type || "平衡型"; const tc = TYPE_COLOR[st] || "#9090a8";
    document.getElementById("disp-sets-name").textContent = matchedSet.name;
    const tEl = document.getElementById("disp-sets-type");
    tEl.textContent = st;
    tEl.style.cssText = `display:inline;font-size:9px;padding:1px 6px;border-radius:20px;color:${tc};background:${tc}18;border:.5px solid ${tc}44`;
    document.getElementById("disp-sets-ver").textContent = matchedSet.versions?.length ? versStr(matchedSet.versions) : "";
    const sw = document.getElementById("disp-sets-weight");
    sw.textContent = getSetTotalWeight(matchedSet) + "g"; sw.style.display = "";
    renderSetsDropdown();
  } else {
    // 自訂配置，清空套組欄位
    selSet = null;
    document.getElementById("disp-sets-name").textContent = "自訂配置";
    document.getElementById("disp-sets-type").style.display = "none";
    document.getElementById("disp-sets-ver").textContent = "—";
    document.getElementById("disp-sets-weight").style.display = "none";
    renderSetsDropdown();
  }

  // 顯示 Banner
  const parts = [
    bKey   ? blades[bKey].name   : null,
    rKey   || null,
    bitKey ? bits[bitKey].name   : null
  ].filter(Boolean);
  const banner = document.getElementById("deeplink-banner");
  document.getElementById("deeplink-msg").textContent = `✅ 已從分享連結載入：${parts.join(" ＋ ")}`;
  banner.classList.add("show");
  setTimeout(() => banner.classList.remove("show"), 5000);
}

/* ─────────────────────────────────────────
   SHARE MODAL
───────────────────────────────────────── */
function buildShareUrl() {
  const { bladeKey, ratchetKey, bitKey } = currentCombo;
  return `${SITE_URL}/?b=${encodeURIComponent(bladeKey)}&r=${encodeURIComponent(ratchetKey)}&bit=${encodeURIComponent(bitKey)}`;
}
function buildShareText(url) {
  const { comboName, score, totalWeight } = currentCombo;
  return `我在 G-Hub 配出了一套 ${comboName}！評分 ${score} 分，總重 ${totalWeight}g。這組實戰有搞頭嗎？🔥 ${url}`;
}
function openShareModal() {
  if (!selBlade || !selRatchet || !selBit) return;
  document.getElementById("modal-share").classList.add("open");
  if (navigator.share) document.getElementById("share-native-btn").classList.add("show");
  document.getElementById("share-link-preview").textContent = buildShareUrl();
  document.getElementById("share-ig-hint").style.display = "none";
  const cpBtn = document.getElementById("copy-link-btn");
  cpBtn.classList.remove("copied"); cpBtn.innerHTML = '<span class="share-btn-icon">🔗</span> 複製連結';
  generateShareCard();
}
function closeShareModalOutside(e) { if (e.target === document.getElementById("modal-share")) closeModal("modal-share"); }

function generateShareCard() {
  const loading = document.getElementById("share-card-loading"); loading.style.display = "flex";
  const sc = document.getElementById("share-canvas"); const SIZE = 600;
  sc.width = sc.height = SIZE; const c = sc.getContext("2d");
  c.fillStyle = "#0a0a0f"; c.fillRect(0, 0, SIZE, SIZE);
  const g = c.createRadialGradient(SIZE/2,SIZE/2,0,SIZE/2,SIZE/2,SIZE*.6);
  g.addColorStop(0,"rgba(55,138,221,0.14)"); g.addColorStop(1,"rgba(10,10,15,0)");
  c.fillStyle = g; c.fillRect(0, 0, SIZE, SIZE);
  c.strokeStyle = "rgba(55,138,221,0.3)"; c.lineWidth = 1.5; c.strokeRect(1, 1, SIZE-2, SIZE-2);
  c.fillStyle = "#378ADD"; c.font = "bold 22px sans-serif"; c.textAlign = "left"; c.fillText("G-Hub", 22, 40);
  c.fillStyle = "#5a5a70"; c.font = "11px sans-serif"; c.fillText("戰鬥陀螺 X 台灣 × 神配置計算機", 22, 58);
  c.strokeStyle = "rgba(55,138,221,0.2)"; c.lineWidth = .8; c.beginPath(); c.moveTo(20, 68); c.lineTo(SIZE-20, 68); c.stroke();
  const { atk, def, sta, accel, endurance } = currentCombo;
  const vals = { atk, def, sta, accel, endurance }; const sc2 = calcRadarScale(vals);
  const CX = SIZE/2, CY = SIZE/2 - 10, RM = 130;
  const SAXES = [
    { key:"atk",       label:"攻擊",  color:"#D85A30" },
    { key:"def",       label:"防禦",  color:"#378ADD" },
    { key:"endurance", label:"耐久",  color:"#D85070" },
    { key:"accel",     label:"加速",  color:"#D8A030" },
    { key:"sta",       label:"耐力",  color:"#1D9E75" }
  ];
  const spt  = (idx,v)    => { const a=(idx/5)*Math.PI*2-Math.PI/2, r=(v/sc2)*RM; return {x:CX+Math.cos(a)*r, y:CY+Math.sin(a)*r}; };
  const sgpt = (idx,step) => { const a=(idx/5)*Math.PI*2-Math.PI/2, r=(step/5)*RM; return {x:CX+Math.cos(a)*r, y:CY+Math.sin(a)*r}; };
  for (let s=1;s<=5;s++) {
    c.beginPath();
    for (let i=0;i<5;i++){const p=sgpt(i,s);if(i===0)c.moveTo(p.x,p.y);else c.lineTo(p.x,p.y);}
    c.closePath(); c.strokeStyle=s===5?"#363648dd":"#2a2a3866"; c.lineWidth=s===5?1:.6; c.stroke();
  }
  for (let i=0;i<5;i++){const o=sgpt(i,5);c.beginPath();c.moveTo(CX,CY);c.lineTo(o.x,o.y);c.strokeStyle="#2a2a3888";c.lineWidth=.7;c.stroke();}
  c.beginPath();
  for (let i=0;i<5;i++){const p=spt(i,vals[SAXES[i].key]);if(i===0)c.moveTo(p.x,p.y);else c.lineTo(p.x,p.y);}
  c.closePath();
  const rg=c.createRadialGradient(CX,CY,0,CX,CY,RM);
  rg.addColorStop(0,"rgba(55,138,221,0.4)"); rg.addColorStop(1,"rgba(55,138,221,0.08)");
  c.fillStyle=rg; c.fill(); c.strokeStyle="rgba(133,183,235,0.8)"; c.lineWidth=1.8; c.stroke();
  const LR=RM+22, VR=RM+38;
  for (let i=0;i<5;i++) {
    const ax=SAXES[i], angle=(i/5)*Math.PI*2-Math.PI/2, rv=Math.round(vals[ax.key]), dp=spt(i,vals[ax.key]);
    c.beginPath();c.arc(dp.x,dp.y,5,0,Math.PI*2);c.fillStyle=rv>100?"#FF4500":ax.color;c.fill();
    const cos=Math.cos(angle),sin=Math.sin(angle);
    const ta=cos>0.3?"left":cos<-0.3?"right":"center";
    const tb=sin<-0.3?"bottom":sin>0.3?"top":"middle";
    c.save();c.font="12px sans-serif";c.fillStyle="#9090a8";c.textAlign=ta;c.textBaseline=tb;c.fillText(ax.label,CX+cos*LR,CY+sin*LR);c.restore();
    c.save();c.font="bold 15px sans-serif";c.fillStyle=rv>100?"#FF4500":ax.color;c.textAlign=ta;c.textBaseline=tb;c.fillText(rv,CX+cos*VR,CY+sin*VR);c.restore();
  }
  const bY = SIZE - 150;
  c.strokeStyle="rgba(55,138,221,0.2)";c.lineWidth=.8;c.beginPath();c.moveTo(20,bY);c.lineTo(SIZE-20,bY);c.stroke();
  const cname=currentCombo.comboName.length>38?currentCombo.comboName.slice(0,38)+"…":currentCombo.comboName;
  c.fillStyle="#f0f0f8";c.font="bold 15px sans-serif";c.textAlign="left";c.fillText(cname,24,bY+22);
  const tc=TYPE_COLOR[currentCombo.type]||"#9090a8";
  c.fillStyle=tc;c.font="13px sans-serif";c.fillText(currentCombo.type,24,bY+46);
  c.fillStyle="#f0f0f8";c.font="bold 36px sans-serif";c.textAlign="right";c.fillText(currentCombo.score+" 分",SIZE-24,bY+46);
  c.fillStyle="#B8C8DC";c.font="13px sans-serif";c.textAlign="left";c.fillText(`⚖ ${currentCombo.totalWeight}g`,24,bY+70);
  c.fillStyle="#9090a8";c.font="12px sans-serif";c.fillText(`↕ ${currentCombo.height} mm`,110,bY+70);
  c.fillStyle="rgba(133,183,235,0.5)";c.font="11px sans-serif";c.textAlign="right";c.fillText(buildShareUrl(),SIZE-24,SIZE-18);
  loading.style.display = "none";
}
function downloadCard() {
  generateShareCard();
  const sc = document.getElementById("share-canvas");
  const link = document.createElement("a");
  link.download = `ghub_${selBlade?._key || "config"}.png`;
  link.href = sc.toDataURL("image/png"); link.click();
}
async function copyShareLink() {
  const url = buildShareUrl(); const btn = document.getElementById("copy-link-btn");
  try { await navigator.clipboard.writeText(url); } catch (e) {
    const t = document.createElement("textarea"); t.value = url;
    document.body.appendChild(t); t.select(); document.execCommand("copy"); document.body.removeChild(t);
  }
  btn.classList.add("copied"); btn.innerHTML = '<span class="share-btn-icon">✅</span> 已複製！';
  setTimeout(() => { btn.classList.remove("copied"); btn.innerHTML = '<span class="share-btn-icon">🔗</span> 複製連結'; }, 2500);
}
function openThreads()  { const u=buildShareUrl(); window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(buildShareText(u))}`,"_blank"); return false; }
function openLine()     { const u=buildShareUrl(); window.open(`https://line.me/R/msg/text/?${encodeURIComponent(buildShareText(u))}`,"_blank"); return false; }
function openFBShare()  { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(buildShareUrl())}`,"_blank","width=600,height=400"); return false; }
function openIG() {
  const text = buildShareText(buildShareUrl());
  try { navigator.clipboard.writeText(text); } catch(e) { const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();document.execCommand("copy");document.body.removeChild(t); }
  document.getElementById("share-ig-hint").style.display = "block";
  downloadCard();
}
async function nativeShare() {
  const url = buildShareUrl();
  if (navigator.share) { try { await navigator.share({ title:"G-Hub 神配置", text:buildShareText(url), url }); } catch(e){} }
}

/* ─────────────────────────────────────────
   MODALS (GENERAL)
───────────────────────────────────────── */
let footerOpen = false;
function toggleFooter() {
  footerOpen = !footerOpen;
  document.getElementById("footer-body").classList.toggle("open", footerOpen);
  document.getElementById("footer-chevron").classList.toggle("open", footerOpen);
}
function openModal(id)  { document.getElementById("modal-" + id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }
function closeModalOutside(e, id) { if (e.target === document.getElementById(id)) closeModal(id); }
document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
});

/* ─────────────────────────────────────────
   FEEDBACK
───────────────────────────────────────── */
const handleFeedbackSubmit = async (msg) => {
  const fd = new FormData(); fd.append(ENTRY_ID, msg);
  try { await fetch(FORM_URL, { method:"POST", mode:"no-cors", body:fd }); return true; } catch(e) { return false; }
};
let selectedRating = 0, selectedCat = "", fbHistory = [];
function selectRating(btn) {
  document.querySelectorAll(".rating-btn").forEach(b => { b.classList.remove("selected"); b.style.cssText = ""; });
  btn.classList.add("selected");
  const c = ["","#D85A30","#D8A030","#D8D030","#1D9E75","#5DCAA5"];
  const v = parseInt(btn.dataset.val); selectedRating = v;
  btn.style.color = c[v]; btn.style.borderColor = c[v] + "88"; btn.style.background = c[v] + "18";
}
function selectCat(btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected"); selectedCat = btn.textContent.trim();
}
function updateChar() { document.getElementById("char-count").textContent = document.getElementById("fb-text").value.length; }
async function submitFeedback() {
  const txt = document.getElementById("fb-text").value.trim();
  if (!txt) { document.getElementById("fb-text").style.borderColor = "#A32D2D"; setTimeout(() => document.getElementById("fb-text").style.borderColor = "", 1500); return; }
  const btn = document.getElementById("fb-submit-btn");
  btn.disabled = true; btn.innerHTML = '<i class="ti ti-loader-2"></i>送出中…';
  const r  = selectedRating ? `[滿意度: ${"⭐".repeat(selectedRating)}]` : "";
  const ct = selectedCat   ? `[${selectedCat}]` : "";
  const ok = await handleFeedbackSubmit([r, ct, txt].filter(Boolean).join(" "));
  btn.disabled = false; btn.innerHTML = '<i class="ti ti-send"></i>送出回饋';
  if (ok) {
    const el = document.getElementById("fb-ok"); el.style.display = "flex"; setTimeout(() => el.style.display = "none", 4000);
    const now = new Date();
    fbHistory.push({ msg:txt, rating:selectedRating, cat:selectedCat, time:`${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}` });
    renderFbHistory();
    document.getElementById("fb-text").value = ""; document.getElementById("char-count").textContent = "0";
    document.querySelectorAll(".rating-btn").forEach(b => { b.classList.remove("selected"); b.style.cssText = ""; });
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("selected"));
    selectedRating = 0; selectedCat = "";
  } else { const el = document.getElementById("fb-err"); el.style.display = "flex"; setTimeout(() => el.style.display = "none", 4000); }
}
function renderFbHistory() {
  if (!fbHistory.length) return;
  document.getElementById("fb-history").style.display = "block";
  const c = ["","#D85A30","#D8A030","#D8D030","#1D9E75","#5DCAA5"];
  document.getElementById("fb-history-list").innerHTML = fbHistory.slice(-3).reverse().map(h =>
    `<div class="fb-history-item">${h.msg.length > 60 ? h.msg.slice(0,60)+"…" : h.msg}<div class="fb-history-meta">${h.rating?`<span style="color:${c[h.rating]}">${"⭐".repeat(h.rating)}</span>`:""} ${h.cat?`<span>${h.cat}</span>`:""}<span>${h.time}</span></div></div>`
  ).join("");
}

/* ─────────────────────────────────────────
   EVENTS & MAP
───────────────────────────────────────── */

const TODAY = new Date(); TODAY.setHours(0,0,0,0);
function parseEventDate(str) { const [y,m,d] = str.split("/").map(Number); return new Date(y, m-1, d); }
function classifyEvents() {
  const upcoming = [], past = [];
  EVT_RAW.forEach(e => {
    const ed = parseEventDate(e.date), diff = Math.round((ed - TODAY) / 86400000);
    let item = { ...e, _diffDays: diff };
    if (ed.getTime() < TODAY.getTime()) { item.badge = "badge-past"; item.bt = "已結束"; past.push(item); }
    else {
      if (diff === 0)       { item.badge = "badge-open"; item.bt = "今天開賽"; }
      else if (diff <= 7)   { item.badge = "badge-soon"; item.bt = "即將開始"; }
      else                  { item.badge = "badge-open"; item.bt = "報名中"; }
      upcoming.push(item);
    }
  });
  upcoming.sort((a,b) => a._diffDays - b._diffDays);
  past.sort((a,b) => b._diffDays - a._diffDays);
  return { upcoming, past };
}
let EVT = { upcoming:[], past:[] }, curTab = "upcoming", lmap = null, mapMarkers = [];
function makeIcon(col) {
  return L.divIcon({ html:`<svg width="22" height="28" viewBox="0 0 22 28"><path d="M11 0C4.9 0 0 4.9 0 11c0 6.6 11 17 11 17S22 17.6 22 11C22 4.9 17.1 0 11 0z" fill="${col}"/><circle cx="11" cy="11" r="4.5" fill="white" opacity="0.9"/></svg>`, iconSize:[22,28], iconAnchor:[11,28], popupAnchor:[0,-28], className:"" });
}
function renderMapMarkers(tab) {
  mapMarkers.forEach(m => m.remove()); mapMarkers = [];
  EVT[tab].forEach(e => {
    const col = tab === "upcoming" ? "#378ADD" : "#5a5a70";
    const m = L.marker([e.lat, e.lng], { icon:makeIcon(col) }).addTo(lmap)
      .bindPopup(`<div class="pop-name">${e.name}</div><div class="pop-meta"><span>${e.date}</span><span>${e.loc}</span></div>`);
    mapMarkers.push(m);
  });
}
function initMap() {
  if (lmap) return;
  lmap = L.map("leaflet-map", { center:[23.8,121.0], zoom:7 });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright" style="color:#85B7EB">OpenStreetMap</a>', maxZoom:18
  }).addTo(lmap);
  renderMapMarkers("upcoming");
}
function renderEvents(tab) {
  const list = EVT[tab];
  document.getElementById("count-upcoming").textContent = EVT.upcoming.length;
  document.getElementById("count-past").textContent     = EVT.past.length;
  if (!list.length) {
    document.getElementById("elist").innerHTML = `<div class="elist-empty"><i class="ti ti-calendar-off"></i><span>${tab==="upcoming"?"目前沒有近期賽事":"目前沒有歷史賽事紀錄"}</span></div>`;
    return;
  }
  document.getElementById("elist").innerHTML = list.map(e =>
    `<div class="ecard ${tab}"><div class="etop"><div class="ename">${e.name}</div><span class="ebadge ${e.badge}">${e.bt}</span></div><div class="emeta"><span><i class="ti ti-calendar"></i>${e.date}</span><span><i class="ti ti-map-pin"></i>${e.loc}</span></div></div>`
  ).join("");
}
function switchTab(tab, el) {
  curTab = tab;
  document.querySelectorAll(".etab").forEach(b => b.classList.remove("active")); el.classList.add("active");
  renderEvents(tab); if (lmap) renderMapMarkers(tab);
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
EVT = classifyEvents();
renderEvents("upcoming");
setTimeout(() => initMap(), 200);
initRadar();
renderSetsDropdown();
renderFilteredList("blade");
renderFilteredList("ratchet");
renderFilteredList("bit");
applySet(0); // 預設載入第一組套組

// ★ v3.6.1：資料全部就緒後，用 setTimeout(0) 確保 DOM 渲染完再解析 Deep Link
setTimeout(() => applyDeepLink(), 0);

window.addEventListener("resize", () => resizeRadar());