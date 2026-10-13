// ── Equipment ──────────────────────────────────────────────────
const EQUIPMENT = {
  stange: 'Klimmzugstange',
  hantel: 'Kurzhanteln',
  band:   'Widerstandsband',
};

// ── Übungen ────────────────────────────────────────────────────
const EX = {
  // Körpergewicht
  kniebeuge:      { name: 'Kniebeugen',           gear: null, how: 'Füße schulterbreit, Gewicht auf den Fersen. Hüfte nach hinten unten, bis die Oberschenkel mindestens parallel zum Boden sind, dann kraftvoll hochdrücken.', tip: 'Knie zeigen in Richtung der Fußspitzen, Rücken bleibt gerade.' },
  liegestuetz:    { name: 'Liegestütze',           gear: null, how: 'Hände etwas breiter als die Schultern, Körper bildet eine gerade Linie. Brust bis knapp über den Boden senken, dann hochdrücken.', tip: 'Zu schwer? Auf den Knien ausführen. Bauch und Po angespannt halten.' },
  situp:          { name: 'Sit-ups',               gear: null, how: 'Auf dem Rücken liegen, Knie gebeugt. Oberkörper aufrichten bis die Brust die Knie fast berührt, kontrolliert ablegen.', tip: 'Nicht am Nacken ziehen, die Kraft kommt aus dem Bauch.' },
  burpee:         { name: 'Burpees',               gear: null, how: 'Aus dem Stand in die Hocke, Beine nach hinten springen, Liegestütz, Beine heranspringen, Strecksprung mit Klatschen über dem Kopf.', tip: 'Lieber sauber und gleichmäßig als hektisch.' },
  climber:        { name: 'Mountain Climbers',     gear: null, how: 'Liegestützposition, abwechselnd die Knie zügig Richtung Brust ziehen. Jedes Bein zählt als eine Wiederholung.', tip: 'Hüfte tief halten, Schultern über den Händen.' },
  hampelmann:     { name: 'Hampelmänner',          gear: null, how: 'Gleichzeitig Beine grätschen und Arme über den Kopf führen, dann zurück springen.', tip: 'Locker auf den Fußballen landen.' },
  ausfallschritt: { name: 'Ausfallschritte',       gear: null, how: 'Großer Schritt nach vorn, hinteres Knie Richtung Boden senken, zurück in den Stand. Abwechselnd links und rechts.', tip: 'Vorderes Knie bleibt über dem Fußgelenk.' },
  strecksprung:   { name: 'Strecksprünge',         gear: null, how: 'Kniebeuge, dann explosiv nach oben abspringen und weich wieder in der Hocke landen.', tip: 'Leise landen ist ein gutes Zeichen für saubere Technik.' },
  plank:          { name: 'Unterarmstütz',         gear: null, timed: true, how: 'Auf den Unterarmen und Zehenspitzen abstützen, Körper bildet eine gerade Linie. Position halten.', tip: 'Nicht ins Hohlkreuz fallen, Po leicht anspannen.' },
  // Klimmzugstange
  klimmzug:       { name: 'Klimmzüge',             gear: 'stange', how: 'Schulterbreiter oder weiter Griff an der Stange hängen. Körper nach oben ziehen bis das Kinn über der Stange ist.', tip: 'Schulterblätter zu Beginn aktiv nach unten ziehen. Kein Schwingen.' },
  knieheben:      { name: 'Hänge-Knieheben',       gear: 'stange', how: 'An der Stange hängen. Knie gesammelt zur Brust ziehen, kurz halten, dann langsam absenken.', tip: 'Langsames Absenken bringt mehr als schnelles Hochreißen.' },
  // Kurzhanteln
  schulterpress:  { name: 'Schulterdrücken',       gear: 'hantel', how: 'Hanteln auf Schulterhöhe, Handflächen nach vorn. Arme senkrecht nach oben strecken bis die Hanteln oben sind, dann kontrolliert senken.', tip: 'Bauch anspannen, nicht ins Hohlkreuz fallen.' },
  hrow:           { name: 'Kurzhantel-Rudern',     gear: 'hantel', how: 'Oberkörper 45° vorgebeugt, Knie leicht gebeugt. Hanteln seitlich nach oben zum Bauch ziehen, Ellbogen eng am Körper.', tip: 'Schulterblätter am oberen Punkt zusammendrücken.' },
  // Widerstandsband
  bandrow:        { name: 'Band-Rudern',           gear: 'band', how: 'Band um einen festen Punkt wickeln. Mit gestreckten Armen beginnen, dann Ellbogen hinter den Körper ziehen.', tip: 'Band gleichmäßig gespannt halten, Schulterblätter zusammenziehen.' },
  bandpress:      { name: 'Band-Drücken',          gear: 'band', how: 'Band mit den Füßen fixieren, Enden auf Schulterhöhe greifen. Arme senkrecht nach oben drücken.', tip: 'Rumpf stabil halten, nicht mit dem Rücken schwingen.' },
  // Mobility (Monat 4)
  katzekuh:       { name: 'Katze-Kuh',             gear: null, timed: true, mobility: true, how: 'Im Vierfüßlerstand abwechselnd Rücken nach oben (Katze) und durchhängen lassen (Kuh), je 4–5 Sekunden halten. Atme dabei tief.', tip: 'Langsam und bewusst bewegen, keine ruckhaften Bewegungen.' },
  hüftbeuger:     { name: 'Hüftbeuger-Dehnung',   gear: null, timed: true, mobility: true, how: 'Ausfallschritt, hinteres Knie am Boden. Hüfte vorwärts und nach unten schieben, aufrecht bleiben. Position halten.', tip: 'Beide Seiten! Auf 30 Sekunden pro Seite steigern.' },
  schulteröffner: { name: 'Schulteröffner',        gear: null, timed: true, mobility: true, how: 'Arme auf Schulterhöhe seitlich ausbreiten, Daumen nach oben. Kreise nach hinten drehen, dann Arme hinter dem Rücken verschränken und Brust öffnen.', tip: 'Auch im Sitzen möglich – ideal für Schreibtischalltag.' },
  weltmeister:    { name: 'Weltmeisterpose',       gear: null, timed: true, mobility: true, how: 'Aus dem tiefen Ausfallschritt Hände beidseitig des Vorderfußes auf den Boden. Innenarm nach oben öffnen und der Decke entgegendrehen. Position halten.', tip: 'Hüfte so weit wie möglich Richtung Boden bringen.' },
  kindshaltung:   { name: 'Kindshaltung',          gear: null, timed: true, mobility: true, how: 'Knie boden, Gesäß zu den Fersen, Arme gestreckt nach vorn legen. Stirn auf den Boden, tief in den Rücken atmen.', tip: 'Je länger du hältst, desto tiefer entspannt sich die Rückenmuskulatur.' },
};

// ── Warm-up Schritte ───────────────────────────────────────────
const WARMUP_STEPS = [
  { ex: 'hampelmann',     reps: 20, warmup: true, round: 1, of: 1 },
  { ex: 'kniebeuge',      reps: 10, warmup: true, round: 1, of: 1 },
  { ex: 'ausfallschritt', reps: 8,  warmup: true, round: 1, of: 1 },
  { ex: 'schulteröffner', sec:  20, warmup: true, round: 1, of: 1 },
  { ex: 'climber',        reps: 16, warmup: true, round: 1, of: 1 },
];

// ── Hilfsfunktionen für Schritte ──────────────────────────────
function rounds(n, list, rest) {
  const steps = [];
  for (let r = 0; r < n; r++) {
    list.forEach(([ex, v]) => steps.push(EX[ex].timed ? { ex, sec: v, round: r+1, of: n } : { ex, reps: v, round: r+1, of: n }));
    if (r < n - 1 && rest) steps.push({ rest });
  }
  return steps;
}
function pyramid(levels, pair) {
  const steps = [];
  levels.forEach((v, i) => {
    pair.forEach(ex => steps.push({ ex, reps: v, round: i+1, of: levels.length }));
    if (i < levels.length - 1) steps.push({ rest: 20 });
  });
  return steps;
}

// ── Workouts ───────────────────────────────────────────────────
const WORKOUTS = [
  { id: 'kurz',          gear: null,     name: 'Kurzer Prozess',    desc: '4 Runden Ganzkörper, ca. 10 Min.',             steps: () => rounds(4, [['burpee',8],['climber',20],['kniebeuge',15]], 45) },
  { id: 'treppe',        gear: null,     name: 'Treppenhaus',       desc: 'Pyramide 5–10–15–10–5, Oberkörper & Bauch',   steps: () => pyramid([5,10,15,10,5], ['liegestuetz','situp']) },
  { id: 'dauer',         gear: null,     name: 'Dauerbrenner',      desc: '5 Runden mit Unterarmstütz, ca. 20 Min.',     steps: () => rounds(5, [['hampelmann',20],['ausfallschritt',16],['liegestuetz',10],['plank',30]], 40) },
  { id: 'beine',         gear: null,     name: 'Standfest',         desc: '3 Runden Beine, ca. 12 Min.',                 steps: () => rounds(3, [['kniebeuge',20],['strecksprung',10],['ausfallschritt',20]], 60) },
  { id: 'zugkraft',      gear: 'stange', name: 'Zugkraft',          desc: '4 Runden Klimmzüge & Core, ca. 15 Min.',      steps: () => rounds(4, [['klimmzug',5],['knieheben',10],['liegestuetz',12]], 60) },
  { id: 'druecken',      gear: 'hantel', name: 'Drücken & Ziehen',  desc: '3 Runden Oberkörper mit Hanteln, ca. 15 Min.',steps: () => rounds(3, [['schulterpress',12],['hrow',10],['burpee',6]], 50) },
  { id: 'bandkraft',     gear: 'band',   name: 'Bandkraft',         desc: '4 Runden mit Widerstandsband, ca. 18 Min.',   steps: () => rounds(4, [['bandrow',15],['bandpress',12],['kniebeuge',20],['situp',15]], 45) },
  { id: 'mobility',      gear: null,     name: 'Beweglichkeit',     desc: 'Mobility & Stretching, ca. 12 Min.', mobility: true,
    steps: () => [
      { ex: 'katzekuh',       sec: 60, round: 1, of: 3 },
      { ex: 'hüftbeuger',     sec: 30, round: 1, of: 3 },
      { rest: 10 },
      { ex: 'weltmeister',    sec: 30, round: 2, of: 3 },
      { ex: 'schulteröffner', sec: 30, round: 2, of: 3 },
      { rest: 10 },
      { ex: 'kindshaltung',   sec: 60, round: 3, of: 3 },
    ]
  },
];

// ── 4-Wochen-Programme ─────────────────────────────────────────
const PROGRAMS = [
  {
    id: 'start4',
    name: 'Kraftwerk Start',
    desc: 'Einsteiger-Programm, 3×/Woche, 4 Wochen. Perfekt für den Anfang.',
    color: '#2B44FF',
    weeks: [
      [null,'kurz',null,'beine',null,'treppe',null],
      [null,'kurz',null,'dauer',null,'beine',null],
      [null,'treppe',null,'kurz',null,'dauer',null],
      [null,'dauer',null,'treppe',null,'kurz',null],
    ],
  },
  {
    id: 'push4',
    name: 'Push Hard',
    desc: 'Fortgeschritten, 4×/Woche, 4 Wochen. Fokus auf Kraft und Kondition.',
    color: '#E53935',
    weeks: [
      ['kurz','beine',null,'treppe','dauer',null,null],
      ['treppe','beine',null,'kurz','dauer',null,null],
      ['dauer','kurz',null,'beine','treppe',null,null],
      ['kurz','dauer',null,'treppe','beine',null,null],
    ],
  },
  {
    id: 'mobil4',
    name: 'Beweglich & Stark',
    desc: '3×/Woche Kraft + 2×/Woche Mobility. Für Ausgewogenheit über 4 Wochen.',
    color: '#1F9D6B',
    weeks: [
      ['mobility','kurz',null,'mobility','beine',null,null],
      ['mobility','treppe',null,'mobility','kurz',null,null],
      ['mobility','dauer',null,'mobility','treppe',null,null],
      ['mobility','kurz',null,'mobility','dauer',null,null],
    ],
  },
];

// ── Zustand ────────────────────────────────────────────────────
const S = {
  factor: 1,
  log: [],
  equipment: [],
  favorites: [],
  darkMode: null,
  goal: null,
  measurements: [],
  activeProgram: null,
  warmupEnabled: false,
  customWorkouts: [],
  hiit: { work: 30, rest: 15, rounds: 8 },
  favOnly: false,
};

let view = 'home';
let statsTab = 'overview';
let plansTab = 'programs';
let detail = null;
let P = null;
let F = null;
let HT = null;
let builder = { name: '', rounds: 3, exercises: [], addingEx: false };

// ── Speicher ───────────────────────────────────────────────────
function load() {
  try {
    const r = localStorage.getItem('kraftwerk-state');
    if (r) Object.assign(S, JSON.parse(r));
    if (!Array.isArray(S.equipment))     S.equipment = [];
    if (!Array.isArray(S.favorites))     S.favorites = [];
    if (!Array.isArray(S.measurements))  S.measurements = [];
    if (!Array.isArray(S.customWorkouts)) S.customWorkouts = [];
    if (!S.hiit) S.hiit = { work: 30, rest: 15, rounds: 8 };
  } catch(e) {}
}
function save() {
  try { localStorage.setItem('kraftwerk-state', JSON.stringify(S)); }
  catch(e) { console.error('Speichern fehlgeschlagen', e); }
}

// ── Dark Mode ─────────────────────────────────────────────────
function applyTheme() {
  const el = document.documentElement;
  if (S.darkMode === true)       el.dataset.theme = 'dark';
  else if (S.darkMode === false) el.dataset.theme = 'light';
  else {
    if (matchMedia('(prefers-color-scheme: dark)').matches) el.dataset.theme = 'dark';
    else el.dataset.theme = 'light';
  }
}
function toggleDark() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  S.darkMode = !isDark;
  save(); applyTheme(); render();
}

// ── Streak & Stats ─────────────────────────────────────────────
function daysWithWorkout() {
  const set = new Set(S.log.map(l => new Date(l.date).toDateString()));
  return set;
}
function calcStreak() {
  if (!S.log.length) return 0;
  const today = new Date(); today.setHours(0,0,0,0);
  const days = daysWithWorkout();
  let streak = 0, d = new Date(today);
  while (true) {
    if (days.has(d.toDateString())) { streak++; d.setDate(d.getDate() - 1); }
    else if (streak === 0 && d.getTime() === today.getTime()) {
      d.setDate(d.getDate() - 1);
      if (days.has(d.toDateString())) { streak = 1; d.setDate(d.getDate() - 1); }
      else break;
    }
    else break;
  }
  return streak;
}
function calcBestStreak() {
  if (!S.log.length) return 0;
  const dates = [...daysWithWorkout()].map(s => new Date(s)).sort((a,b)=>a-b);
  let best = 1, cur = 1;
  for (let i = 1; i < dates.length; i++) {
    const diff = (dates[i] - dates[i-1]) / 86400000;
    if (diff === 1) { cur++; best = Math.max(best, cur); } else cur = 1;
  }
  return best;
}
function workoutsByDateStr() {
  const map = {};
  S.log.forEach(l => {
    const k = new Date(l.date).toDateString();
    map[k] = (map[k] || 0) + 1;
  });
  return map;
}
function recoveryScore() {
  if (!S.log.length) return 100;
  const today = new Date(); today.setHours(0,0,0,0);
  const last = new Date(Math.max(...S.log.map(l => l.date)));
  const daysSince = Math.floor((today - last) / 86400000);
  const last7 = S.log.filter(l => (today - new Date(l.date)) < 7 * 86400000).length;
  const avgRpe = (() => {
    const rpes = S.log.slice(-5).filter(l => l.rpe).map(l => l.rpe);
    return rpes.length ? rpes.reduce((a,b)=>a+b,0)/rpes.length : 5;
  })();
  let score = 50;
  if (daysSince === 0) score += 0;
  else if (daysSince === 1) score += 30;
  else if (daysSince === 2) score += 50;
  else score += 60;
  score -= Math.max(0, (last7 - 4) * 10);
  score -= Math.max(0, (avgRpe - 7) * 8);
  return Math.min(100, Math.max(0, Math.round(score)));
}
function totalTrainingTime() {
  return S.log.reduce((s, l) => s + l.t, 0);
}
const fmt = ms => { const t = Math.floor(ms/1000); return Math.floor(t/60)+':'+String(t%60).padStart(2,'0'); };
const fmtH = ms => { const h = Math.floor(ms/3600000); const m = Math.floor((ms%3600000)/60000); return h ? `${h}h ${m}m` : `${m}m`; };

// ── Hilfsfunktionen ────────────────────────────────────────────
const $ = s => document.querySelector(s);
const scale = v => Math.max(1, Math.round(v * S.factor));
const scaled = w => {
  const base = w.steps();
  const steps = base.map(s => s.rest ? s : s.sec ? { ...s, sec: scale(s.sec) } : { ...s, reps: scale(s.reps) });
  if (S.warmupEnabled && !w.mobility) return [...WARMUP_STEPS, ...steps];
  return steps;
};
const best = id => { const t = S.log.filter(l => l.w === id).map(l => l.t); return t.length ? Math.min(...t) : null; };
const stepLabel = s => s.rest ? `${s.rest} s Pause` : s.sec ? `${s.sec} s ${EX[s.ex].name}` : `${s.reps}× ${EX[s.ex].name}`;
const availableWorkouts = () => WORKOUTS.filter(w => !w.gear || S.equipment.includes(w.gear));
const allWorkouts = () => [...availableWorkouts(), ...S.customWorkouts.map(c => ({
  ...c, steps: () => rounds(c.rounds, c.exercises.map(e => [e.exId, e.reps]))
}))];

let audio;
function signal() {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain();
    o.frequency.value = 880;
    g.gain.setValueAtTime(.2, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .25);
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + .25);
  } catch(e) {}
  if (navigator.vibrate) navigator.vibrate(120);
}

// ── Render ─────────────────────────────────────────────────────
function render() {
  const app = $('#app');
  if (F)  { app.innerHTML = finishView(); return; }
  if (HT && HT.phase !== 'config') { app.innerHTML = hiitOverlay(); tickHiit(); return; }
  if (P)  { app.innerHTML = playerView(); updatePlayer(); return; }
  let body = '';
  if (view === 'home')  body = detail ? detailView() : homeView();
  if (view === 'ex')    body = exView();
  if (view === 'stats') body = statsView();
  if (view === 'plans') body = plansView();
  const isDark = document.documentElement.dataset.theme === 'dark';
  app.innerHTML = `<main>${body}</main>
  <nav>
    <button data-nav="home"  aria-current="${view==='home'}"><span class="nav-icon">💪</span>Training</button>
    <button data-nav="ex"    aria-current="${view==='ex'}"><span class="nav-icon">📖</span>Übungen</button>
    <button data-nav="stats" aria-current="${view==='stats'}"><span class="nav-icon">📊</span>Stats</button>
    <button data-nav="plans" aria-current="${view==='plans'}"><span class="nav-icon">🗓</span>Pläne</button>
  </nav>`;
}

// ── Equipment Selector ─────────────────────────────────────────
function equipmentSelector() {
  return `<section class="eq-section">
    <p class="eq-label">Dein Equipment</p>
    <div class="eq-chips">
      <span class="eq-chip always">Körpergewicht</span>
      ${Object.entries(EQUIPMENT).map(([id, label]) =>
        `<button class="eq-chip${S.equipment.includes(id)?' on':''}" data-eq="${id}">${label}</button>`
      ).join('')}
    </div>
  </section>`;
}

// ── Home View ──────────────────────────────────────────────────
function homeView() {
  const streak = calcStreak();
  const isDark = document.documentElement.dataset.theme === 'dark';
  const GOALS = { kraft:'💪 Kraft', ausdauer:'🏃 Ausdauer', abnehmen:'🔥 Abnehmen', beweglich:'🧘 Beweglichkeit' };
  const workouts = (S.favOnly
    ? availableWorkouts().filter(w => S.favorites.includes(w.id))
    : availableWorkouts()
  );
  return `
  <div class="page-header">
    <h1 class="display">Heute<br>trainieren</h1>
    <div class="header-actions">
      <button class="btn-icon" data-dark title="Dark Mode">${isDark?'☀️':'🌙'}</button>
    </div>
  </div>
  <div class="streak-row">
    <div class="streak-badge${streak===0?' cold':''}">🔥 ${streak}</div>
    <span class="streak-label">${streak===0?'Starte heute deinen Streak':streak===1?'Tag Streak – bleib dran!':streak+' Tage Streak'}</span>
  </div>
  <section class="goal-section">
    <p class="goal-label">Dein Ziel</p>
    <div class="goal-chips">
      ${Object.entries(GOALS).map(([id,label])=>
        `<button class="goal-chip${S.goal===id?' on':''}" data-goal="${id}">${label}</button>`
      ).join('')}
    </div>
  </section>
  <div class="level"><b>${Math.round(S.factor*100)} %</b><span class="sub">Dein Level. Passt sich nach jedem Workout an.</span></div>
  ${equipmentSelector()}
  <button class="fav-only-toggle${S.favOnly?' on':''}" data-favonly>⭐ ${S.favOnly?'Alle anzeigen':'Nur Favoriten'}</button>
  <div class="wo-list">
    ${workouts.length ? workouts.map(w => {
      const b = best(w.id);
      const isFav = S.favorites.includes(w.id);
      return `<button class="wo" data-wo="${w.id}">
        <h2 class="display">${w.name}</h2>
        <div class="meta"><span>${w.desc}</span><span class="best">${b?'Bestzeit '+fmt(b):''}</span></div>
        <button class="fav-btn${isFav?' on':''}" data-fav="${w.id}" title="Favorit">${isFav?'⭐':'☆'}</button>
      </button>`;
    }).join('') : '<p class="empty">Keine Workouts für diese Auswahl.</p>'}
  </div>`;
}

// ── Detail View ────────────────────────────────────────────────
function detailView() {
  const w = allWorkouts().find(x => x.id === detail);
  const steps = scaled(w);
  let lastRound = 0, items = '';
  steps.forEach(s => {
    if (s.warmup) { items += `<li class="warmup-step"><span class="n">${s.sec?s.sec+' s':s.reps}</span>${EX[s.ex].name}</li>`; return; }
    if (s.rest)   { items += `<li class="rest"><span class="n"></span>${s.rest} s Pause</li>`; return; }
    if (s.round !== lastRound) { lastRound = s.round; items += `<li class="round">Runde ${s.round} von ${s.of}</li>`; }
    items += `<li><span class="n">${s.sec?s.sec+' s':s.reps}</span>${EX[s.ex].name}</li>`;
  });
  return `<button class="back" data-back>‹ Alle Workouts</button>
  <h1 class="display">${w.name}</h1><p class="sub">${w.desc}</p>
  ${!w.mobility ? `<div class="warmup-row">
    <label class="toggle-sw"><input type="checkbox" data-warmup${S.warmupEnabled?' checked':''}><span class="toggle-knob"></span></label>
    <label>5 Min. Warm-up einschalten</label>
  </div>` : ''}
  <ul class="steps">${items}</ul>
  <button class="big-btn" data-start="${w.id}">Workout starten</button>`;
}

// ── Exercises View ─────────────────────────────────────────────
function exView() {
  const exercises = Object.entries(EX).filter(([,e]) => !e.gear || S.equipment.includes(e.gear));
  const bodyweight = exercises.filter(([,e]) => !e.gear && !e.mobility);
  const equipment  = exercises.filter(([,e]) =>  e.gear);
  const mobility   = exercises.filter(([,e]) =>  e.mobility);
  const renderGroup = (list) => list.map(([id, e]) =>
    `<details><summary>${e.name}${e.gear?`<span class="ex-gear">${EQUIPMENT[e.gear]}</span>`:''}${e.mobility?'<span class="ex-mobility">Mobility</span>':''}</summary><p>${e.how}</p><p class="tip">${e.tip}</p></details>`
  ).join('');
  return `<h1 class="display">Übungen</h1>
  <p class="sub" style="margin-bottom:14px">So führst du jede Übung richtig aus.</p>
  ${equipmentSelector()}
  <h2 class="display" style="font-size:24px;margin:0 0 12px">Körpergewicht</h2>
  ${renderGroup(bodyweight)}
  ${equipment.length ? `<h2 class="display" style="font-size:24px;margin:20px 0 12px">Mit Equipment</h2>${renderGroup(equipment)}` : ''}
  ${mobility.length  ? `<h2 class="display" style="font-size:24px;margin:20px 0 12px">Mobility & Stretching</h2>${renderGroup(mobility)}` : ''}`;
}

// ── Stats View ─────────────────────────────────────────────────
function statsView() {
  const tabs = [['overview','Übersicht'],['heatmap','Heatmap'],['body','Körper']];
  const tabsHtml = `<div class="view-tabs">${tabs.map(([id,l])=>`<button class="view-tab${statsTab===id?' on':''}" data-stab="${id}">${l}</button>`).join('')}</div>`;
  let content = '';
  if (statsTab === 'overview') content = statsOverview();
  if (statsTab === 'heatmap')  content = statsHeatmap();
  if (statsTab === 'body')     content = statsBody();
  return `<h1 class="display">Stats</h1>${tabsHtml}${content}`;
}

function statsOverview() {
  const streak = calcStreak();
  const best_s = calcBestStreak();
  const total = S.log.length;
  const totalTime = totalTrainingTime();
  const rec = recoveryScore();
  const recClass = rec >= 70 ? '' : rec >= 40 ? ' mid' : ' low';
  const fillClass = rec >= 70 ? '' : rec >= 40 ? ' mid' : ' low';

  // Weekly bars (last 7 days)
  const DAYS = ['Mo','Di','Mi','Do','Fr','Sa','So'];
  const today = new Date(); today.setHours(0,0,0,0);
  const dayMap = workoutsByDateStr();
  const weekBars = Array.from({length:7},(_,i)=>{
    const d = new Date(today); d.setDate(today.getDate() - 6 + i);
    const count = dayMap[d.toDateString()] || 0;
    const h = Math.min(64, count * 32);
    const isToday = d.toDateString() === today.toDateString();
    return `<div class="week-col">
      <div class="week-bar${count===0?' empty':''}" style="height:${h||3}px;${isToday?'opacity:1':''}"></div>
      <span class="week-day-lbl" style="${isToday?'color:var(--accent)':''}">${DAYS[d.getDay()===0?6:d.getDay()-1]}</span>
    </div>`;
  }).join('');

  // Bestzeiten
  const pbRows = WORKOUTS.map(w => {
    const b = best(w.id);
    return `<div class="pb-row"><span class="pb-name">${w.name}</span>${b?`<span class="pb-time">${fmt(b)}</span>`:'<span class="pb-empty">–</span>'}</div>`;
  }).join('');

  // Recent log
  const logRows = [...S.log].reverse().slice(0,5).map(l=>{
    const w = allWorkouts().find(x=>x.id===l.w);
    const d = new Date(l.date).toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'short'});
    const dots = Array.from({length:10},(_,i)=>`<span class="rpe-dot${l.rpe&&i<l.rpe?' on':''}"></span>`).join('');
    return `<div class="log-row"><div><b>${w?w.name:l.w}</b><div class="sub">${d}, ${Math.round(l.factor*100)} %</div><div class="rpe-dots">${dots}</div></div><div class="t">${fmt(l.t)}</div></div>`;
  }).join('');

  return `
  <div class="dash-grid">
    <div class="dash-card"><div class="val">${total}</div><div class="lbl">Workouts gesamt</div></div>
    <div class="dash-card"><div class="val" style="font-size:28px">${fmtH(totalTime)}</div><div class="lbl">Trainingszeit</div></div>
    <div class="dash-card"><div class="val">🔥${streak}</div><div class="lbl">Aktueller Streak</div></div>
    <div class="dash-card"><div class="val">${best_s}</div><div class="lbl">Bester Streak</div></div>
  </div>
  <div class="recovery-section">
    <div class="sub" style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Erholung</div>
    <div class="recovery-score${recClass}">${rec}</div>
    <div class="rb-track"><div class="rb-fill${fillClass}" style="width:${rec}%"></div></div>
    <div class="rb-hint">${rec>=70?'Bereit für ein intensives Workout':rec>=40?'Moderat trainieren empfohlen':'Heute besser pausieren oder Mobility machen'}</div>
  </div>
  <div class="week-section">
    <div class="sub" style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Diese Woche</div>
    <div class="week-bars">${weekBars}</div>
  </div>
  <h2 class="display" style="font-size:24px;margin-bottom:14px">Bestzeiten</h2>
  ${pbRows}
  <h2 class="display" style="font-size:24px;margin:24px 0 14px">Verlauf</h2>
  ${logRows || '<p class="empty">Noch keine Einträge.</p>'}
  ${S.log.length ? `<button class="back" style="margin-top:20px;color:var(--danger)" data-reset>Verlauf und Level zurücksetzen</button>` : ''}`;
}

function statsHeatmap() {
  const dayMap = workoutsByDateStr();
  const today = new Date(); today.setHours(0,0,0,0);
  const weeks = 16;
  const totalDays = weeks * 7;
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - totalDays + 1);
  // align to Monday
  const dow = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1;
  startDate.setDate(startDate.getDate() - dow);

  const cells = [];
  const monthLabels = [];
  let lastMonth = -1;
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + w * 7 + d);
      const count = dayMap[date.toDateString()] || 0;
      const future = date > today;
      const lvl = future ? '' : count === 0 ? '' : count === 1 ? 'hm-l1' : count === 2 ? 'hm-l2' : 'hm-l3';
      if (d === 0) {
        const m = date.getMonth();
        if (m !== lastMonth) { monthLabels.push({ w, month: date.toLocaleString('de-DE',{month:'short'}) }); lastMonth = m; }
      }
      cells.push(`<div class="hm-cell ${lvl}" title="${date.toLocaleDateString('de-DE')}${count?' · '+count+' Workout':''}"></div>`);
    }
  }

  const monthHtml = monthLabels.map((ml, i) => {
    const next = monthLabels[i+1];
    const span = next ? (next.w - ml.w) : (weeks - ml.w);
    return `<span style="flex:${span};min-width:0;overflow:hidden">${ml.month}</span>`;
  }).join('');

  return `<div class="heatmap-wrap">
    <div class="hm-months">${monthHtml}</div>
    <div class="heatmap">${cells.join('')}</div>
  </div>
  <div style="display:flex;gap:6px;align-items:center;font-size:12px;color:var(--muted)">
    <span>Weniger</span>
    <div class="hm-cell"></div>
    <div class="hm-cell hm-l1"></div>
    <div class="hm-cell hm-l2"></div>
    <div class="hm-cell hm-l3"></div>
    <span>Mehr</span>
  </div>`;
}

function statsBody() {
  const lastM = S.measurements.length ? S.measurements[S.measurements.length-1] : null;
  return `<h2 class="display" style="font-size:24px;margin-bottom:14px">Körpermaße erfassen</h2>
  <div class="measure-form">
    <div class="measure-field"><label>Gewicht (kg)</label><input type="number" id="m-weight" step="0.1" placeholder="${lastM?lastM.weight:''}" min="30" max="300"></div>
    <div class="measure-field"><label>Brust (cm)</label><input type="number" id="m-chest" step="0.5" placeholder="${lastM?lastM.chest:''}" min="50" max="200"></div>
    <div class="measure-field"><label>Taille (cm)</label><input type="number" id="m-waist" step="0.5" placeholder="${lastM?lastM.waist:''}" min="40" max="200"></div>
    <div class="measure-field"><label>Hüfte (cm)</label><input type="number" id="m-hip" step="0.5" placeholder="${lastM?lastM.hip:''}" min="50" max="200"></div>
  </div>
  <button class="big-btn" data-measure-save>Eintrag speichern</button>
  ${S.measurements.length ? `
  <div class="measure-log" style="margin-top:28px">
    <h2 class="display" style="font-size:24px;margin-bottom:14px">Verlauf</h2>
    ${[...S.measurements].reverse().slice(0,10).map(m => {
      const d = new Date(m.date).toLocaleDateString('de-DE',{day:'numeric',month:'short',year:'2-digit'});
      return `<div class="measure-log-row">
        <span class="sub">${d}</span>
        <div style="display:flex;gap:16px;align-items:baseline">
          ${m.weight?`<span><span class="measure-val">${m.weight}</span><span class="sub" style="font-size:12px"> kg</span></span>`:''}
          ${m.waist?`<span><span class="measure-val">${m.waist}</span><span class="sub" style="font-size:12px"> cm</span></span>`:''}
        </div>
      </div>`;
    }).join('')}
  </div>` : ''}`;
}

// ── Plans View ─────────────────────────────────────────────────
function plansView() {
  const tabs = [['programs','Programme'],['timer','HIIT-Timer'],['builder','Builder']];
  const tabsHtml = `<div class="view-tabs">${tabs.map(([id,l])=>`<button class="view-tab${plansTab===id?' on':''}" data-ptab="${id}">${l}</button>`).join('')}</div>`;
  let content = '';
  if (plansTab === 'programs') content = plansPrograms();
  if (plansTab === 'timer')    content = plansTimer();
  if (plansTab === 'builder')  content = plansBuilder();
  return `<h1 class="display">Pläne</h1>${tabsHtml}${content}`;
}

function plansPrograms() {
  const today = new Date(); today.setHours(0,0,0,0);
  return PROGRAMS.map(prog => {
    const isActive = S.activeProgram && S.activeProgram.id === prog.id;
    let daysHtml = '';
    if (isActive) {
      const start = new Date(S.activeProgram.startDate); start.setHours(0,0,0,0);
      const elapsed = Math.floor((today - start) / 86400000);
      const pct = Math.min(100, Math.round(elapsed / 28 * 100));
      const dayMap = workoutsByDateStr();
      daysHtml = `<div class="prog-progress"><div class="prog-progress-fill" style="width:${pct}%"></div></div>
      <div class="prog-pct">${elapsed}/28 Tage · ${pct} %</div>
      <div class="prog-days-grid">${Array.from({length:28},(_,i)=>{
        const d = new Date(start); d.setDate(start.getDate()+i);
        const week = Math.floor(i/7), dow = i%7;
        const workoutId = prog.weeks[week]?.[dow];
        const isRest = !workoutId;
        const isPast = d < today;
        const isToday2 = d.toDateString() === today.toDateString();
        const done = isPast && dayMap[d.toDateString()];
        const cls = isRest ? 'rest' : isToday2 ? 'today' : done ? 'done' : isPast ? '' : '';
        const lbl = isRest ? '' : (i+1).toString();
        return `<div class="prog-day${cls?' '+cls:''}">${lbl}</div>`;
      }).join('')}</div>
      <button class="big-btn danger" data-stop-prog="${prog.id}" style="margin-top:14px;font-size:18px;padding:14px">Programm beenden</button>`;
    }
    return `<div class="prog-card${isActive?' active':''}">
      <h3>${prog.name}</h3>
      <p>${prog.desc}</p>
      ${daysHtml}
      ${!isActive ? `<button class="big-btn" style="margin-top:14px;font-size:20px;padding:14px" data-start-prog="${prog.id}">Programm starten</button>` : ''}
    </div>`;
  }).join('') + (S.customWorkouts.length ? `
  <h2 class="display" style="font-size:22px;margin:28px 0 14px">Eigene Workouts</h2>
  ${S.customWorkouts.map(c=>`<div class="prog-card">
    <h3>${c.name}</h3><p>${c.rounds} Runden, ${c.exercises.length} Übungen</p>
    <div style="display:flex;gap:8px;margin-top:12px">
      <button class="big-btn" style="font-size:18px;padding:12px" data-wo="${c.id}">Starten</button>
      <button class="big-btn outline" style="font-size:16px;padding:12px;flex:0 0 auto" data-del-custom="${c.id}">Löschen</button>
    </div>
  </div>`).join('')}` : '');
}

function plansTimer() {
  const h = S.hiit;
  return `<div class="timer-config">
    <div class="timer-row"><label>⚡ Arbeitszeit</label><div class="stepper">
      <button data-hiit-adj="work:-5">−</button><span>${h.work} s</span><button data-hiit-adj="work:5">+</button>
    </div></div>
    <div class="timer-row"><label>😮‍💨 Pause</label><div class="stepper">
      <button data-hiit-adj="rest:-5">−</button><span>${h.rest} s</span><button data-hiit-adj="rest:5">+</button>
    </div></div>
    <div class="timer-row"><label>🔄 Runden</label><div class="stepper">
      <button data-hiit-adj="rounds:-1">−</button><span>${h.rounds}</span><button data-hiit-adj="rounds:1">+</button>
    </div></div>
  </div>
  <div style="background:var(--card);border-radius:8px;padding:16px;margin-bottom:20px;color:var(--muted);font-size:14px">
    Gesamt: ~${Math.round(h.rounds*(h.work+h.rest)/60)} Min. · ${h.rounds} Runden · ${h.work}s//${h.rest}s
  </div>
  <button class="big-btn" data-hiit-start>Timer starten</button>`;
}

function plansBuilder() {
  const exList = Object.entries(EX).filter(([,e]) => !e.mobility);
  const addSection = builder.addingEx ? `
    <select id="builder-ex-select" class="builder-select">
      ${exList.map(([id,e])=>`<option value="${id}">${e.name}${e.gear?' ('+EQUIPMENT[e.gear]+')':''}</option>`).join('')}
    </select>
    <button class="big-btn outline" data-builder-confirm style="font-size:16px;padding:12px">Übung hinzufügen</button>
  ` : `<button class="builder-add-btn" data-builder-add>+ Übung hinzufügen</button>`;

  return `<div class="builder-name"><input type="text" id="builder-name" placeholder="Workout-Name" value="${builder.name}" style="font-size:18px;font-weight:600"></div>
  <div class="timer-row" style="margin-bottom:16px"><label>Runden</label><div class="stepper">
    <button data-builder-rounds="-1">−</button><span>${builder.rounds}</span><button data-builder-rounds="1">+</button>
  </div></div>
  <div class="builder-list">
    ${builder.exercises.map((e,i)=>`<div class="builder-ex">
      <span class="ex-name">${EX[e.exId]?.name||e.exId}</span>
      <input class="ex-reps" type="number" value="${e.reps}" min="1" max="100" data-builder-reps="${i}">
      <button class="rm-btn" data-builder-rm="${i}">✕</button>
    </div>`).join('')}
  </div>
  ${addSection}
  ${builder.exercises.length ? `<button class="big-btn" style="margin-top:16px" data-builder-save>Workout speichern</button>` : ''}`;
}

// ── Player View ────────────────────────────────────────────────
function playerView() {
  const s = P.steps[P.i], nxt = P.steps[P.i+1];
  const isWarmup = !!s.warmup;
  const resting = !!s.rest;
  const num  = s.rest ? s.rest : s.sec ? s.sec : s.reps;
  const name = s.rest ? 'Pause' : EX[s.ex].name;
  const btn  = s.rest ? 'Pause beenden' : s.sec ? 'Überspringen' : 'Fertig';
  const phaseClass = resting ? 'resting' : isWarmup ? 'warmup-phase' : '';
  return `<div class="player ${phaseClass}">
    <div class="p-top"><span>${P.w.name}${s.round?' · Runde '+s.round+'/'+s.of:isWarmup?' · Warm-up':''}</span><span class="p-clock" id="clock">0:00</span></div>
    <div class="p-progress"><i id="prog"></i></div>
    <div class="p-main">
      <div class="display p-num" id="num">${num}</div>
      <div class="display p-name">${name}</div>
      <div class="p-next">${nxt?'Danach: '+stepLabel(nxt):'Letzte Übung'}</div>
    </div>
    <button class="p-done" data-next>${btn}</button>
    <div class="p-small"><button data-pause>${P.paused?'Weiter':'Anhalten'}</button><button data-quit>Abbrechen</button></div>
  </div>`;
}

function tick() {
  if (!P) return;
  const now = performance.now(), d = now - P.last; P.last = now;
  if (!P.paused) {
    P.elapsed += d; P.stepEl += d;
    const s = P.steps[P.i], dur = s.rest ? s.rest*1000 : s.sec ? s.sec*1000 : null;
    if (dur && P.stepEl >= dur) { nextStep(); return; }
  }
  updatePlayer();
}

function updatePlayer() {
  if (!P) return;
  const c = $('#clock'), n = $('#num'), pr = $('#prog');
  if (c)  c.textContent = fmt(P.elapsed);
  if (pr) pr.style.width = (P.i/P.steps.length*100)+'%';
  const s = P.steps[P.i], dur = s.rest ? s.rest : s.sec;
  if (dur && n) n.textContent = Math.max(0, Math.ceil(dur - P.stepEl/1000));
}

function startWorkout(id) {
  const w = allWorkouts().find(x => x.id === id);
  P = { w, steps: scaled(w), i: 0, elapsed: 0, stepEl: 0, last: performance.now(), paused: false, timer: null, lock: null };
  if ('wakeLock' in navigator) navigator.wakeLock.request('screen').then(l => P&&(P.lock=l)).catch(()=>{});
  P.timer = setInterval(tick, 200);
  signal(); render();
}

function nextStep() {
  P.i++; P.stepEl = 0;
  if (P.i >= P.steps.length) { endWorkout(true); return; }
  signal(); render();
}

function endWorkout(done) {
  clearInterval(P.timer);
  if (P.lock) P.lock.release().catch(()=>{});
  if (done) {
    const prev = best(P.w.id);
    F = { w: P.w, t: P.elapsed, pb: prev===null||P.elapsed<prev, first: prev===null, rpe: null };
    signal();
  }
  P = null;
  if (!done) render();
  else render();
}

// ── Finish View ────────────────────────────────────────────────
function finishView() {
  const rpeHtml = `<div class="rpe-section">
    <p class="rpe-label">Wie anstrengend? (RPE 1–10)</p>
    <div class="rpe-row">
      ${[1,2,3,4,5,6,7,8,9,10].map(i=>`<button class="rpe-btn${F.rpe===i?' on':''}" data-rpe="${i}">${i}</button>`).join('')}
    </div>
  </div>`;
  return `<div class="finish"><div class="inner">
    <h1 class="display">Geschafft</h1><p class="sub">${F.w.name}</p>
    <div class="display f-time">${fmt(F.t)}</div>
    ${F.pb&&!F.first?'<span class="pb-badge">🏆 Neue Bestzeit</span>':''}
    ${rpeHtml}
    <h2 class="display" style="font-size:30px;margin-top:28px">Wie war das Workout?</h2>
    <p class="sub">Deine Antwort passt das Level beim nächsten Mal an.</p>
    <div class="rate">
      <button data-rate="1.1">Zu leicht – mehr Wiederholungen</button>
      <button data-rate="1">Genau richtig</button>
      <button data-rate="0.9">Zu schwer – weniger Wiederholungen</button>
    </div>
  </div></div>`;
}

// ── HIIT Timer ─────────────────────────────────────────────────
function hiitOverlay() {
  if (!HT || HT.phase === 'done') {
    return `<div class="hiit-overlay done-phase">
      <div class="p-top"><span>HIIT Fertig!</span><span></span></div>
      <div class="p-main" style="text-align:center">
        <div class="display p-num">✓</div>
        <div class="display p-name">${HT?HT.rounds:0} Runden</div>
      </div>
      <button class="p-done" style="background:#fff;color:var(--ok)" data-hiit-stop>Schließen</button>
    </div>`;
  }
  const isWork = HT.phase === 'work';
  return `<div class="hiit-overlay ${isWork?'work-phase':'rest-phase'}">
    <div class="p-top"><span>HIIT Timer</span><span class="p-clock">${fmt(HT.elapsed*1000)}</span></div>
    <div class="p-progress"><i id="hiit-prog" style="width:${((isWork?S.hiit.work-HT.remaining:S.hiit.rest-HT.remaining)/(isWork?S.hiit.work:S.hiit.rest)*100).toFixed(1)}%"></i></div>
    <div class="p-main" style="text-align:center">
      <div class="display p-num" id="hiit-num">${HT.remaining}</div>
      <div class="display p-name">${isWork?'Arbeit':'Pause'}</div>
      <div class="p-next">Runde ${HT.round} von ${HT.rounds}</div>
    </div>
    <button class="p-done" data-hiit-next>${isWork?'Fertig':'Weiter'}</button>
    <div class="p-small">
      <button data-hiit-pause>${HT.paused?'Weiter':'Anhalten'}</button>
      <button data-hiit-stop>Beenden</button>
    </div>
  </div>`;
}

function startHiit() {
  HT = { phase: 'work', round: 1, rounds: S.hiit.rounds, remaining: S.hiit.work, elapsed: 0, paused: false, last: performance.now(), timer: null };
  HT.timer = setInterval(tickHiitInterval, 200);
  signal(); render();
}

let hiitRenderScheduled = false;
function tickHiitInterval() {
  if (!HT || HT.phase === 'done' || HT.paused) return;
  const now = performance.now(), d = (now - HT.last) / 1000; HT.last = now;
  HT.elapsed += d;
  HT.remaining -= d;
  if (HT.remaining <= 0) {
    if (HT.phase === 'work') {
      HT.phase = 'rest'; HT.remaining = S.hiit.rest; signal();
    } else {
      HT.round++;
      if (HT.round > HT.rounds) { HT.phase = 'done'; clearInterval(HT.timer); signal(); render(); return; }
      HT.phase = 'work'; HT.remaining = S.hiit.work; signal();
    }
    render(); return;
  }
  const n = $('#hiit-num'), pr = $('#hiit-prog');
  if (n) n.textContent = Math.max(0, Math.ceil(HT.remaining));
  if (pr) {
    const dur = HT.phase === 'work' ? S.hiit.work : S.hiit.rest;
    pr.style.width = ((dur - HT.remaining) / dur * 100).toFixed(1) + '%';
  }
  const c = $('#clock') || document.querySelector('.p-clock');
  if (c && c.closest('.hiit-overlay')) c.textContent = fmt(HT.elapsed * 1000);
}

function tickHiit() {}

// ── Ereignisse ─────────────────────────────────────────────────
document.addEventListener('click', e => {
  const t = e.target.closest('button, [data-measure-save]');
  if (!t) return;
  const d = t.dataset;

  // Nav
  if (d.nav) { view = d.nav; detail = null; render(); window.scrollTo(0,0); return; }

  // Dark mode
  if ('dark' in d) { toggleDark(); return; }

  // Goal
  if (d.goal) { S.goal = S.goal === d.goal ? null : d.goal; save(); render(); return; }

  // Favorites
  if (d.fav) {
    e.stopPropagation();
    const idx = S.favorites.indexOf(d.fav);
    if (idx > -1) S.favorites.splice(idx, 1); else S.favorites.push(d.fav);
    save(); render(); return;
  }
  if ('favonly' in d) { S.favOnly = !S.favOnly; save(); render(); return; }

  // Equipment
  if (d.eq) {
    const idx = S.equipment.indexOf(d.eq);
    if (idx > -1) S.equipment.splice(idx, 1); else S.equipment.push(d.eq);
    save(); render(); return;
  }

  // Workout nav
  if (d.wo) { detail = d.wo; view = 'home'; render(); window.scrollTo(0,0); return; }
  if ('back' in d) { detail = null; render(); return; }
  if (d.start) { startWorkout(d.start); return; }

  // Warmup toggle
  if ('warmup' in d) { S.warmupEnabled = !S.warmupEnabled; save(); render(); return; }

  // Player
  if ('next' in d)  { nextStep(); return; }
  if ('pause' in d) { P.paused = !P.paused; render(); return; }
  if ('quit' in d)  { if (confirm('Workout abbrechen? Die Zeit wird nicht gespeichert.')) endWorkout(false); return; }

  // HIIT
  if ('hiitStart' in d) { startHiit(); return; }
  if (d.hiitAdj) {
    const [key, val] = d.hiitAdj.split(':');
    S.hiit[key] = Math.max(key==='rounds'?1:5, S.hiit[key] + parseInt(val));
    save(); render(); return;
  }
  if ('hiitNext' in d) {
    if (!HT) return;
    if (HT.phase === 'work') { HT.phase = 'rest'; HT.remaining = S.hiit.rest; signal(); render(); }
    else { HT.round++; if (HT.round > HT.rounds) { HT.phase = 'done'; clearInterval(HT.timer); } else { HT.phase = 'work'; HT.remaining = S.hiit.work; } signal(); render(); }
    return;
  }
  if ('hiitPause' in d) { if (HT) { HT.paused = !HT.paused; HT.last = performance.now(); render(); } return; }
  if ('hiitStop' in d) { if (HT) { clearInterval(HT.timer); HT = null; } view = 'plans'; plansTab = 'timer'; render(); return; }

  // Stats tabs
  if (d.stab) { statsTab = d.stab; render(); return; }

  // Plans tabs
  if (d.ptab) { plansTab = d.ptab; render(); return; }

  // Programs
  if (d.startProg) {
    S.activeProgram = { id: d.startProg, startDate: Date.now() };
    save(); render(); return;
  }
  if (d.stopProg) {
    if (confirm('Programm wirklich beenden?')) { S.activeProgram = null; save(); render(); }
    return;
  }

  // Builder
  if ('builderAdd' in d) { builder.addingEx = true; render(); return; }
  if ('builderConfirm' in d) {
    const sel = document.getElementById('builder-ex-select');
    if (sel && sel.value) { builder.exercises.push({ exId: sel.value, reps: 10 }); }
    builder.addingEx = false; render(); return;
  }
  if (d.builderRm !== undefined) { builder.exercises.splice(parseInt(d.builderRm), 1); render(); return; }
  if (d.builderRounds) {
    builder.rounds = Math.max(1, builder.rounds + parseInt(d.builderRounds));
    render(); return;
  }
  if ('builderSave' in d) {
    const nameInput = document.getElementById('builder-name');
    builder.name = nameInput ? nameInput.value.trim() : builder.name;
    // sync reps from inputs
    document.querySelectorAll('[data-builder-reps]').forEach(inp => {
      const i = parseInt(inp.dataset.builderReps);
      if (builder.exercises[i]) builder.exercises[i].reps = parseInt(inp.value) || 10;
    });
    if (!builder.name) { alert('Bitte einen Namen eingeben.'); return; }
    if (!builder.exercises.length) { alert('Bitte mindestens eine Übung hinzufügen.'); return; }
    const id = 'custom_' + Date.now();
    S.customWorkouts.push({ id, name: builder.name, gear: null, rounds: builder.rounds, exercises: [...builder.exercises], custom: true, desc: `Eigenes Workout, ${builder.rounds} Runden` });
    builder = { name: '', rounds: 3, exercises: [], addingEx: false };
    save(); plansTab = 'programs'; render(); return;
  }
  if (d.delCustom) {
    if (confirm('Eigenes Workout löschen?')) {
      S.customWorkouts = S.customWorkouts.filter(c => c.id !== d.delCustom);
      save(); render();
    }
    return;
  }

  // RPE
  if (d.rpe) { F.rpe = parseInt(d.rpe); render(); return; }

  // Finish rate
  if (d.rate) {
    S.log.push({ w: F.w.id, t: Math.round(F.t), date: Date.now(), factor: S.factor, rpe: F.rpe });
    S.factor = Math.min(2, Math.max(0.5, Math.round(S.factor * parseFloat(d.rate) * 100) / 100));
    save(); F = null; detail = null; view = 'stats'; statsTab = 'overview'; render(); window.scrollTo(0,0); return;
  }

  // Reset
  if ('reset' in d) {
    if (confirm('Alle Einträge und dein Level löschen?')) { S.log = []; S.factor = 1; save(); render(); }
    return;
  }

  // Measurements save
  if ('measureSave' in d) {
    const weight = parseFloat(document.getElementById('m-weight')?.value);
    const chest  = parseFloat(document.getElementById('m-chest')?.value);
    const waist  = parseFloat(document.getElementById('m-waist')?.value);
    const hip    = parseFloat(document.getElementById('m-hip')?.value);
    if (!weight && !chest && !waist && !hip) { alert('Bitte mindestens einen Wert eingeben.'); return; }
    S.measurements.push({ date: Date.now(), weight: weight||null, chest: chest||null, waist: waist||null, hip: hip||null });
    save(); render(); return;
  }
});

// Builder reps change listener (input events)
document.addEventListener('change', e => {
  const inp = e.target;
  if (inp.dataset.builderReps !== undefined) {
    const i = parseInt(inp.dataset.builderReps);
    if (builder.exercises[i]) builder.exercises[i].reps = parseInt(inp.value) || 10;
  }
});

// ── Service Worker ─────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.warn('SW Fehler:', err));
  });
}

load();
applyTheme();
render();
