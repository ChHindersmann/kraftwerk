// ---------- Daten ----------
const EX = {
  kniebeuge:     { name: 'Kniebeugen',        how: 'Füße schulterbreit, Gewicht auf den Fersen. Hüfte nach hinten unten, bis die Oberschenkel mindestens parallel zum Boden sind, dann kraftvoll hochdrücken.',                                                             tip: 'Knie zeigen in Richtung der Fußspitzen, Rücken bleibt gerade.' },
  liegestuetz:   { name: 'Liegestütze',        how: 'Hände etwas breiter als die Schultern, Körper bildet eine gerade Linie. Brust bis knapp über den Boden senken, dann hochdrücken.',                                                                                    tip: 'Zu schwer? Auf den Knien ausführen. Bauch und Po angespannt halten.' },
  situp:         { name: 'Sit-ups',            how: 'Auf dem Rücken liegen, Knie gebeugt. Oberkörper aufrichten, bis die Brust die Knie fast berührt, kontrolliert ablegen.',                                                                                              tip: 'Nicht am Nacken ziehen, die Kraft kommt aus dem Bauch.' },
  burpee:        { name: 'Burpees',            how: 'Aus dem Stand in die Hocke, Beine nach hinten in die Liegestützposition springen, Brust zum Boden, Beine wieder heranspringen, Strecksprung mit Klatschen über dem Kopf.',                                            tip: 'Lieber sauber und gleichmäßig als hektisch.' },
  climber:       { name: 'Mountain Climbers',  how: 'Liegestützposition, abwechselnd die Knie zügig Richtung Brust ziehen. Jedes Bein zählt als eine Wiederholung.',                                                                                                       tip: 'Hüfte tief halten, Schultern über den Händen.' },
  hampelmann:    { name: 'Hampelmänner',       how: 'Gleichzeitig Beine grätschen und Arme über den Kopf führen, dann zurück in die Ausgangsposition springen.',                                                                                                           tip: 'Locker auf den Fußballen landen.' },
  ausfallschritt:{ name: 'Ausfallschritte',    how: 'Großer Schritt nach vorn, hinteres Knie Richtung Boden senken, zurück in den Stand. Abwechselnd links und rechts, jede Seite zählt.',                                                                                tip: 'Vorderes Knie bleibt über dem Fußgelenk.' },
  strecksprung:  { name: 'Strecksprünge',      how: 'Kniebeuge, dann explosiv nach oben abspringen und weich wieder in der Hocke landen.',                                                                                                                                 tip: 'Leise landen ist ein gutes Zeichen für saubere Technik.' },
  plank:         { name: 'Unterarmstütz',      how: 'Auf den Unterarmen und Zehenspitzen abstützen, Körper bildet eine gerade Linie von Kopf bis Ferse. Position halten.',                                                                                                 tip: 'Nicht ins Hohlkreuz fallen, Po leicht anspannen.', timed: true }
};

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

const WORKOUTS = [
  { id: 'kurz',   name: 'Kurzer Prozess', desc: '4 Runden Ganzkörper, ca. 10 Min.',          steps: () => rounds(4, [['burpee',8],['climber',20],['kniebeuge',15]], 45) },
  { id: 'treppe', name: 'Treppenhaus',    desc: 'Pyramide 5–10–15–10–5, Oberkörper und Bauch', steps: () => pyramid([5,10,15,10,5], ['liegestuetz','situp']) },
  { id: 'dauer',  name: 'Dauerbrenner',  desc: '5 Runden mit Unterarmstütz, ca. 20 Min.',     steps: () => rounds(5, [['hampelmann',20],['ausfallschritt',16],['liegestuetz',10],['plank',30]], 40) },
  { id: 'beine',  name: 'Standfest',     desc: '3 Runden Beine, ca. 12 Min.',                 steps: () => rounds(3, [['kniebeuge',20],['strecksprung',10],['ausfallschritt',20]], 60) }
];

// ---------- Zustand & Speicher ----------
const S = { factor: 1, log: [] };
let view = 'home', detail = null, P = null, F = null;

function load() {
  try {
    const r = localStorage.getItem('kraftwerk-state');
    if (r) Object.assign(S, JSON.parse(r));
  } catch(e) { /* noch nichts gespeichert */ }
}
function save() {
  try { localStorage.setItem('kraftwerk-state', JSON.stringify(S)); }
  catch(e) { console.error('Speichern fehlgeschlagen', e); }
}

// ---------- Hilfen ----------
const $ = s => document.querySelector(s);
const fmt = ms => { const t = Math.floor(ms / 1000); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
const scale = v => Math.max(1, Math.round(v * S.factor));
const scaled = w => w.steps().map(s => s.rest ? s : (s.sec ? { ...s, sec: scale(s.sec) } : { ...s, reps: scale(s.reps) }));
const best = id => { const t = S.log.filter(l => l.w === id).map(l => l.t); return t.length ? Math.min(...t) : null; };
const stepLabel = s => s.rest ? `${s.rest} s Pause` : s.sec ? `${s.sec} s ${EX[s.ex].name}` : `${s.reps} ${EX[s.ex].name}`;

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

// ---------- Ansichten ----------
function render() {
  const app = $('#app');
  if (F) { app.innerHTML = finishView(); return; }
  if (P) { app.innerHTML = playerView(); updatePlayer(); return; }
  let body = '';
  if (view === 'home') body = detail ? detailView() : homeView();
  if (view === 'ex')   body = exView();
  if (view === 'log')  body = logView();
  app.innerHTML = `<main>${body}</main>
  <nav>
    <button data-nav="home" aria-current="${view === 'home'}">Training</button>
    <button data-nav="ex"   aria-current="${view === 'ex'}">Übungen</button>
    <button data-nav="log"  aria-current="${view === 'log'}">Verlauf</button>
  </nav>`;
}

function homeView() {
  return `<h1 class="display">Heute trainieren</h1>
  <p class="sub">Wähl ein Workout. Absolviere es so schnell wie möglich, aber mit sauberer Technik.</p>
  <div class="level"><b>${Math.round(S.factor * 100)} %</b><span class="sub">Dein Level. Es passt sich nach jeder Bewertung an.</span></div>
  ${WORKOUTS.map(w => {
    const b = best(w.id);
    return `<button class="wo" data-wo="${w.id}">
      <h2 class="display">${w.name}</h2>
      <div class="meta"><span>${w.desc}</span><span class="best">${b ? 'Bestzeit ' + fmt(b) : ''}</span></div>
    </button>`;
  }).join('')}`;
}

function detailView() {
  const w = WORKOUTS.find(x => x.id === detail), steps = scaled(w);
  let lastRound = 0, items = '';
  steps.forEach(s => {
    if (s.rest) { items += `<li class="rest"><span class="n"></span>${s.rest} s Pause</li>`; return; }
    if (s.round !== lastRound) { lastRound = s.round; items += `<li class="round">Runde ${s.round} von ${s.of}</li>`; }
    items += `<li><span class="n">${s.sec ? s.sec + ' s' : s.reps}</span>${EX[s.ex].name}</li>`;
  });
  return `<button class="back" data-back>‹ Alle Workouts</button>
  <h1 class="display">${w.name}</h1><p class="sub">${w.desc}</p>
  <ul class="steps">${items}</ul>
  <button class="big-btn" data-start="${w.id}">Workout starten</button>`;
}

function exView() {
  return `<h1 class="display">Übungen</h1><p class="sub" style="margin-bottom:22px">So führst du jede Übung richtig aus.</p>
  ${Object.values(EX).map(e => `<details><summary>${e.name}</summary><p>${e.how}</p><p class="tip">${e.tip}</p></details>`).join('')}`;
}

function logView() {
  const rows = [...S.log].reverse().map(l => {
    const w = WORKOUTS.find(x => x.id === l.w);
    const d = new Date(l.date).toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' });
    return `<div class="log-row"><div><b>${w ? w.name : l.w}</b><div class="sub">${d}, Level ${Math.round(l.factor * 100)} %</div></div><div class="t">${fmt(l.t)}</div></div>`;
  }).join('');
  return `<h1 class="display">Verlauf</h1>
  ${rows || '<p class="empty">Noch keine Workouts. Starte dein erstes unter „Training".</p>'}
  ${S.log.length ? '<button class="back" style="margin-top:28px" data-reset>Verlauf und Level zurücksetzen</button>' : ''}`;
}

// ---------- Player ----------
function startWorkout(id) {
  const w = WORKOUTS.find(x => x.id === id);
  P = { w, steps: scaled(w), i: 0, elapsed: 0, stepEl: 0, last: performance.now(), paused: false, timer: null, lock: null };
  if ('wakeLock' in navigator) navigator.wakeLock.request('screen').then(l => P && (P.lock = l)).catch(() => {});
  P.timer = setInterval(tick, 200);
  signal(); render();
}

function playerView() {
  const s = P.steps[P.i], nxt = P.steps[P.i + 1];
  const resting = !!s.rest;
  const num  = s.rest ? s.rest : s.sec ? s.sec : s.reps;
  const name = s.rest ? 'Pause' : EX[s.ex].name;
  const btn  = s.rest ? 'Pause beenden' : s.sec ? 'Überspringen' : 'Fertig';
  return `<div class="player ${resting ? 'resting' : ''}">
    <div class="p-top"><span>${P.w.name}${s.round ? ' · Runde ' + s.round + '/' + s.of : ''}</span><span class="p-clock" id="clock">0:00</span></div>
    <div class="p-progress"><i id="prog"></i></div>
    <div class="p-main">
      <div class="display p-num" id="num">${num}</div>
      <div class="display p-name">${name}</div>
      <div class="p-next">${nxt ? 'Danach: ' + stepLabel(nxt) : 'Letzte Übung'}</div>
    </div>
    <button class="p-done" data-next>${btn}</button>
    <div class="p-small"><button data-pause>${P.paused ? 'Weiter' : 'Anhalten'}</button><button data-quit>Abbrechen</button></div>
  </div>`;
}

function tick() {
  if (!P) return;
  const now = performance.now(), d = now - P.last; P.last = now;
  if (!P.paused) {
    P.elapsed += d; P.stepEl += d;
    const s = P.steps[P.i], dur = s.rest ? s.rest * 1000 : s.sec ? s.sec * 1000 : null;
    if (dur && P.stepEl >= dur) { nextStep(); return; }
  }
  updatePlayer();
}

function updatePlayer() {
  if (!P) return;
  const c = $('#clock'), n = $('#num'), pr = $('#prog');
  if (c)  c.textContent = fmt(P.elapsed);
  if (pr) pr.style.width = (P.i / P.steps.length * 100) + '%';
  const s = P.steps[P.i], dur = s.rest ? s.rest : s.sec;
  if (dur && n) n.textContent = Math.max(0, Math.ceil(dur - P.stepEl / 1000));
}

function nextStep() {
  P.i++; P.stepEl = 0;
  if (P.i >= P.steps.length) { endWorkout(true); return; }
  signal(); render();
}

function endWorkout(done) {
  clearInterval(P.timer);
  if (P.lock) P.lock.release().catch(() => {});
  if (done) {
    const prev = best(P.w.id);
    F = { w: P.w, t: P.elapsed, pb: prev === null || P.elapsed < prev, first: prev === null };
    signal();
  }
  P = null; render();
}

function finishView() {
  return `<div class="finish"><div class="inner">
    <h1 class="display">Geschafft</h1><p class="sub">${F.w.name}</p>
    <div class="display f-time">${fmt(F.t)}</div>
    ${F.pb && !F.first ? '<span class="pb">Neue Bestzeit</span>' : ''}
    <h2 class="display" style="font-size:30px;margin-top:34px">Wie war das Workout?</h2>
    <p class="sub">Deine Antwort passt die Wiederholungen beim nächsten Mal an.</p>
    <div class="rate">
      <button data-rate="1.1">Zu leicht – mehr Wiederholungen</button>
      <button data-rate="1">Genau richtig</button>
      <button data-rate="0.9">Zu schwer – weniger Wiederholungen</button>
    </div>
  </div></div>`;
}

// ---------- Ereignisse ----------
document.addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t) return;
  const d = t.dataset;
  if (d.nav)          { view = d.nav; detail = null; render(); window.scrollTo(0, 0); }
  else if (d.wo)      { detail = d.wo; render(); window.scrollTo(0, 0); }
  else if ('back' in d) { detail = null; render(); }
  else if (d.start)   { startWorkout(d.start); }
  else if ('next' in d)  { nextStep(); }
  else if ('pause' in d) { P.paused = !P.paused; render(); }
  else if ('quit' in d)  { if (confirm('Workout abbrechen? Die Zeit wird nicht gespeichert.')) endWorkout(false); }
  else if (d.rate) {
    S.log.push({ w: F.w.id, t: Math.round(F.t), date: Date.now(), factor: S.factor });
    S.factor = Math.min(2, Math.max(0.5, Math.round(S.factor * parseFloat(d.rate) * 100) / 100));
    save();
    F = null; detail = null; view = 'log'; render(); window.scrollTo(0, 0);
  }
  else if ('reset' in d) {
    if (confirm('Alle Einträge und dein Level löschen?')) { S.log = []; S.factor = 1; save(); render(); }
  }
});

// ---------- Service Worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.warn('SW Fehler:', err));
  });
}

load();
render();
