1// ===== PERGUNTAS: [fase, nível (1 normal / 2 chefe), pergunta, CERTA, errada, errada, errada] =====
const Q = [
  [0,1,"Qual período da Pré-História é chamado de “Idade da Pedra Lascada”?","Paleolítico","Neolítico","Idade dos Metais","Antiguidade"],
  [0,1,"Qual descoberta ajudou os povos pré-históricos a se aquecer, cozinhar e se proteger?","O fogo","A roda","A escrita","A moeda"],
  [0,1,"O que marcou o período Neolítico?","Agricultura e vida em aldeias","Invenção da escrita","Criação de impérios","Uso de máquinas a vapor"],
  [0,1,"O que são pinturas rupestres?","Desenhos feitos em paredes de cavernas","Moedas antigas","Leis escritas","Estátuas de ouro"],
  [0,2,"Como se chama o processo em que grupos nômades passam a viver em locais fixos?","Sedentarização","Migração","Colonização","Industrialização"],
  [0,2,"Qual sítio arqueológico brasileiro, no Piauí, guarda pinturas rupestres e vestígios muito antigos?","Serra da Capivara","Foz do Iguaçu","Pão de Açúcar","Chapada Diamantina"],

  [1,1,"Entre quais rios se desenvolveu a civilização da Mesopotâmia?","Tigre e Eufrates","Nilo e Amazonas","Tâmisa e Sena","Reno e Danúbio"],
  [1,1,"Como se chamava a escrita dos sumérios, feita em placas de argila?","Cuneiforme","Hieroglífica","Alfabeto latino","Braille"],
  [1,1,"Qual rei da Babilônia é famoso por seu conjunto de leis escritas?","Hamurabi","Ramsés","Péricles","Augusto"],
  [1,1,"Como se chamavam os templos em forma de degraus construídos na Mesopotâmia?","Zigurates","Pirâmides","Coliseus","Partenons"],
  [1,2,"A Lei de Talião, presente no Código de Hamurabi, defendia que...","A punição deveria ser igual ao crime cometido","Todos os crimes seriam perdoados","Só os nobres seriam punidos","O povo escolheria a pena por voto"],
  [1,2,"Por que a região da Mesopotâmia é chamada de “Crescente Fértil”?","Tem terras férteis em forma de arco no Oriente Médio","É coberta de desertos sem água","Tem muitas minas de ouro","Fica no formato de uma lua nos mapas romanos"],

  [2,1,"Como se chamava o governante do Egito Antigo?","Faraó","César","Sultão","Imperador"],
  [2,1,"Qual rio garantiu a vida e a agricultura no Egito Antigo?","Nilo","Tigre","Amazonas","Tâmisa"],
  [2,1,"Para que serviam as pirâmides do Egito?","Túmulos dos faraós","Mercados","Escolas","Quartéis"],
  [2,1,"Como se chamava a escrita dos antigos egípcios?","Hieróglifos","Cuneiforme","Runas","Alfabeto latino"],
  [2,2,"Qual técnica os egípcios usavam para preservar o corpo dos mortos?","Mumificação","Cremação","Congelamento","Dissecação"],
  [2,2,"Qual pedra, descoberta em 1799, ajudou Champollion a decifrar os hieróglifos?","Pedra de Roseta","Pedra Filosofal","Pedra de Gibraltar","Pedra do Sol"],

  [3,1,"Qual cidade grega é considerada o berço da democracia?","Atenas","Esparta","Roma","Troia"],
  [3,1,"Qual cidade grega era famosa pela educação militar rígida?","Esparta","Atenas","Corinto","Cartago"],
  [3,1,"Onde surgiram os Jogos Olímpicos da Antiguidade?","Olímpia, na Grécia","Roma","Egito","Babilônia"],
  [3,1,"Como eram chamadas as cidades-Estado gregas?","Pólis","Impérios","Feudos","Faraonatos"],
  [3,2,"Na democracia ateniense, quem podia participar das decisões políticas?","Homens adultos nascidos em Atenas (cidadãos)","Todos os habitantes","Mulheres e escravizados","Apenas estrangeiros"],
  [3,2,"Qual filósofo, mestre de Platão, ficou famoso por fazer perguntas para provocar a reflexão?","Sócrates","Homero","Hamurabi","Júlio César"],

  [4,1,"Segundo a lenda, quem fundou a cidade de Roma?","Rômulo","Alexandre","Péricles","Hamurabi"],
  [4,1,"Em qual grande arena romana lutavam os gladiadores?","Coliseu","Partenon","Zigurate","Biblioteca de Alexandria"],
  [4,1,"Qual era a língua falada pelos romanos?","Latim","Grego","Hebraico","Árabe"],
  [4,1,"Quem foi o primeiro imperador de Roma?","Augusto","Nero","Rômulo","Alexandre"],
  [4,2,"Como se chamava a forma de governo de Roma, antes do Império, em que o Senado tinha grande poder?","República","Monarquia absoluta","Democracia direta ateniense","Teocracia egípcia"],
  [4,2,"Em que ano caiu o Império Romano do Ocidente, marcando o fim da Antiguidade?","476 d.C.","27 a.C.","1492","1822"],
  [4,2,"Qual foi o nome do império que sobreviveu no Oriente após a queda de Roma, com capital em Constantinopla?","Império Bizantino","Império Persa","Império Inca","Império Asteca"]
];

// ===== TROPAS (a ordem define quem toma dano primeiro) =====
const UNID = {
  sold:{n:"Soldado", e:"🤺", atq:3, hp:10, custo:20, esp:1},
  arq:{n:"Arqueiro", e:"🏹", atq:4, hp:6, custo:30, esp:1},
  cav:{n:"Cavaleiro", e:"🐎", atq:7, hp:16, custo:50, esp:2},
  cat:{n:"Catapulta", e:"🪨", atq:12, hp:12, custo:80, esp:3}
};
const ORDEM = ["sold","cav","arq","cat"];

// ===== FASES (fraco = tropa que causa +50% de dano) =====
const FASES = [
  {nome:"Fase 1 – Pré-História", inimigo:"Tribo dos Mamutes", em:"🦣", sol:"🦣", hp:60, dano:8, fraco:"arq"},
  {nome:"Fase 2 – Mesopotâmia", inimigo:"Exército Babilônico", em:"🏺", sol:"👳", hp:80, dano:10, fraco:"cat"},
  {nome:"Fase 3 – Egito Antigo", inimigo:"Guarda do Faraó", em:"🐍", sol:"🧟", hp:100, dano:12, fraco:"sold"},
  {nome:"Fase 4 – Grécia Antiga", inimigo:"Hoplitas Espartanos", em:"🏛️", sol:"⚔️", hp:120, dano:14, fraco:"cav"},
  {nome:"Fase 5 – Roma Antiga (Chefão)", inimigo:"Legião do Imperador", em:"🦅", sol:"🪖", hp:170, dano:17, fraco:"arq"}
];

// ===== HABILIDADES (gastam pontos ganhos ao subir de nível) =====
const SK = [
  ["dano","⚔️ Treino de combate","+15% de dano por nível"],
  ["arm","🛡️ Armaduras","-10% de dano sofrido por nível"],
  ["com","💰 Comércio","+25% de ouro ganho por nível"],
  ["est","⏳ Estratégia","O Desafio do Chefe volta mais rápido"]
];

// ===== EVENTOS ALEATÓRIOS =====
const EV = [
  ["O rio transbordou e a colheita foi farta!", () => ` +${ganhaOuro(30)} ouro.`],
  ["Arqueólogos acharam um tesouro antigo!", () => { ganhaXp(20); return ` +${ganhaOuro(25)} ouro e +20 XP.`; }],
  ["Um mercador fenício vendeu arqueiros baratos!", () => { const n = add("arq", 2); return n ? ` +${n} arqueiros!` : " Mas não há vagas no quartel."; }],
  ["Uma tempestade atrasou suas tropas!", () => ` Você perdeu ${perde(10)} unidade(s).`],
  ["Espiões roubaram os planos do inimigo!", () => { ehp -= 15; return " O inimigo perdeu 15 de vida."; }],
  ["Desafio do Sábio! Acerte para ganhar ouro e XP.", null, true]
];

// ===== ESTADO =====
const $ = id => document.getElementById(id);
let f = 0, ehp = 60, escudo = 0, muralha = 0, furia = 0, cd = 0, pontos = 0, vmax = 0, ocupado = true, entre = false;
let ex = {sold:5, arq:2, cav:0, cat:0}, acc = 0, cap = 12, ouro = 100, xp = 0, nivel = 1, ph = 0;
let sk = {dano:0, arm:0, com:0, est:0};
const usadas = new Set();

const qtd = () => ORDEM.reduce((s, k) => s + ex[k], 0);
const usado = () => ORDEM.reduce((s, k) => s + ex[k] * UNID[k].esp, 0);
const vida = () => ORDEM.reduce((s, k) => s + ex[k] * UNID[k].hp, 0) - acc;
const custoQ = () => 60 + 30 * ((cap - 12) / 4);
const ataque = () => Math.round(ORDEM.reduce((s, k) => s + ex[k] * UNID[k].atq * (k === FASES[f].fraco ? 1.5 : 1), 0) * (1 + .15 * sk.dano));

function ganhaOuro(n) { const v = Math.round(n * (1 + .25 * sk.com)); ouro += v; return v; }
function ganhaXp(n) {
  xp += n; let up = false;
  while (xp >= nivel * 50) { xp -= nivel * 50; nivel++; ph++; up = true; }
  return up;
}
function add(k, n) {
  n = Math.max(0, Math.min(n, Math.floor((cap - usado()) / UNID[k].esp)));
  ex[k] += n; return n;
}
function perde(d) {
  const antes = qtd(); acc += d;
  while (qtd() > 0) {
    const k = ORDEM.find(k => ex[k] > 0), h = UNID[k].hp;
    if (acc < h) break;
    ex[k]--; acc -= h;
  }
  if (!qtd()) acc = 0;
  return antes - qtd();
}

// ===== TELAS =====
function mostra(html, cls) {
  $("box").innerHTML = html;
  $("box").className = "box " + (cls || "");
  $("overlay").classList.add("on");
}
const fecha = () => $("overlay").classList.remove("on");
const msg = t => $("log").innerHTML = t;
function bate(id, c, espera = 0) {
  setTimeout(() => {
    const el = $(id);
    el.classList.remove("hit", "avanca"); void el.offsetWidth; el.classList.add(c);
  }, espera);
}
const fila = (n, e) => "<div>" + e.repeat(Math.min(n, 8)) + "<i>×" + n + "</i></div>";

function render() {
  const F = FASES[f];
  vmax = Math.max(vmax, vida());
  $("pBar").style.width = Math.max(0, vida() / vmax * 100) + "%";
  $("eBar").style.width = Math.max(0, ehp / F.hp * 100) + "%";
  $("pTxt").textContent = qtd() + " unidades • " + Math.max(0, vida()) + " de vida";
  $("eTxt").textContent = Math.max(0, ehp) + " de vida • fraco: " + UNID[F.fraco].e;
  $("pArmy").innerHTML = ORDEM.filter(k => ex[k]).map(k => fila(ex[k], UNID[k].e)).join("");
  $("eArmy").innerHTML = fila(Math.max(0, Math.ceil(ehp / 12)), F.sol);
  $("info").textContent = F.nome + " • 💰 " + ouro + " • ⭐ " + pontos + " • Nv " + nivel + " (" + xp + "/" + nivel * 50 + " XP)" + (ph ? " • 🎯 " + ph + " pt" : "");
  $("buffs").innerHTML = (furia ? "🔥 Fúria x" + furia + " " : "") + (muralha ? "🧱 Muralha x" + muralha : "");
  $("bossBtn").textContent = cd > 0 ? "👑 Chefe (volta em " + cd + ")" : "👑 Desafio do Chefe";
  document.querySelectorAll("#actions button").forEach(b =>
    b.disabled = ocupado || (b.dataset.a === "boss" && cd > 0));
}

// ===== LOJA / QUARTEL =====
function loja() {
  const N = FASES[entre ? f + 1 : f];
  let h = "<h2>🏪 Quartel</h2><p>💰 <b>" + ouro + "</b> ouro • 🎯 <b>" + ph + "</b> pontos de habilidade<br>Vagas do exército: <b>" + usado() + "/" + cap + "</b><br>Próximo inimigo: " + N.inimigo + " (fraco contra " + UNID[N.fraco].e + " " + UNID[N.fraco].n + ")</p><h3>Monte seu exército</h3>";
  h += Object.keys(UNID).map(k => {
    const u = UNID[k], ok = ouro >= u.custo && usado() + u.esp <= cap;
    return '<div class="item"><span>' + u.e + " <b>" + u.n + "</b> (×" + ex[k] + ")<small>Ataque " + u.atq + " • Vida " + u.hp + " • Ocupa " + u.esp + " vaga(s)</small></span><button " + (ok ? "" : "disabled") + " onclick=\"comprar('" + k + "')\">💰 " + u.custo + "</button></div>";
  }).join("");
  h += '<div class="item"><span>🏰 <b>Ampliar quartel</b><small>+4 vagas no exército</small></span><button ' + (ouro >= custoQ() ? "" : "disabled") + ' onclick="quartel()">💰 ' + custoQ() + "</button></div>";
  h += "<h3>Habilidades (1 ponto cada)</h3>";
  h += SK.map(([k, n, d]) =>
    '<div class="item"><span>' + n + " <b>Nv " + sk[k] + "/3</b><small>" + d + "</small></span><button " + (ph > 0 && sk[k] < 3 ? "" : "disabled") + " onclick=\"melhora('" + k + "')\">＋</button></div>").join("");
  h += '<button style="margin-top:14px;width:100%" onclick="fechaLoja()">' + (entre ? "Próxima fase ➜" : "Voltar à batalha") + "</button>";
  mostra(h, "loja"); render();
}
function comprar(k) { const u = UNID[k]; if (ouro >= u.custo && add(k, 1)) ouro -= u.custo; loja(); }
function quartel() { if (ouro >= custoQ()) { ouro -= custoQ(); cap += 4; } loja(); }
function melhora(k) { if (ph > 0 && sk[k] < 3) { ph--; sk[k]++; } loja(); }
function fechaLoja() { if (entre) { entre = false; proxima(); } else fecha(); }
function irQuartel() { entre = true; loja(); }

// ===== FLUXO DO JOGO =====
function novoJogo() {
  f = 0; ex = {sold:5, arq:2, cav:0, cat:0}; acc = 0; cap = 12; ouro = 100; xp = 0; nivel = 1; ph = 0;
  sk = {dano:0, arm:0, com:0, est:0}; pontos = 0; entre = false; usadas.clear();
  iniciaFase(); loja();
}

function iniciaFase() {
  const F = FASES[f];
  ehp = F.hp; escudo = muralha = furia = cd = 0; vmax = 0; ocupado = false;
  fecha();
  $("eSprite").textContent = F.em;
  $("eName").textContent = F.inimigo;
  msg("⚔️ " + F.nome + ": o inimigo avança! Ele é fraco contra " + UNID[F.fraco].e + " " + UNID[F.fraco].n + ". Escolha sua ação.");
  render();
}

function pergunta(n, cb) {
  const doNivel = q => q[0] === f && q[1] === n;
  let pool = Q.filter(q => doNivel(q) && !usadas.has(q));
  if (!pool.length) { Q.filter(doNivel).forEach(q => usadas.delete(q)); pool = Q.filter(doNivel); }
  const q = pool[Math.floor(Math.random() * pool.length)];
  usadas.add(q);
  const ops = q.slice(3).map(t => ({t, ok: t === q[3]})).sort(() => Math.random() - .5);
  mostra(
    "<small>" + (n > 1 ? "👑 DESAFIO DO CHEFE (difícil)" : "📜 Pergunta") + "</small><h2>" + q[2] + "</h2>" +
    ops.map((o, i) => '<button class="op" data-i="' + i + '">' + o.t + "</button>").join(""),
    n > 1 ? "chefe" : ""
  );
  let feito = false;
  document.querySelectorAll(".op").forEach(b => b.onclick = () => {
    if (feito) return; feito = true;
    const ok = ops[b.dataset.i].ok;
    document.querySelectorAll(".op").forEach((x, i) => { if (ops[i].ok) x.classList.add("certo"); });
    if (!ok) b.classList.add("errado");
    setTimeout(() => { fecha(); cb(ok); }, 1500);
  });
}

function agir(a) {
  if (ocupado) return;
  ocupado = true; render();
  pergunta(a === "boss" ? 2 : 1, ok => turno(a, ok));
}

function turno(a, ok) {
  const boss = a === "boss";
  let r = "";
  if (a === "attack") {
    if (ok) {
      const d = ataque() * (furia ? 2 : 1);
      if (furia) furia--;
      ehp -= d; bate("pArmy", "avanca"); bate("eArmy", "hit", 250);
      r = "⚔️ Seu exército atacou e causou " + d + " de dano!";
    } else r = "❌ Errou! O ataque falhou.";
  } else if (a === "defend") {
    if (ok) { escudo = .7; r = "🛡️ Acertou! Sua formação de defesa vai reduzir o dano."; }
    else r = "❌ Errou! Sua defesa não ficou pronta.";
  } else if (a === "recruit") {
    if (ok) { const n = add("sold", 2); r = n ? "🪖 +" + n + " soldados se alistaram!" : "🪖 Quartel cheio! Amplie as vagas na loja."; }
    else r = "❌ Errou! Ninguém se alistou.";
  } else {
    if (ok) {
      const b = Math.floor(Math.random() * 3);
      if (b === 0) { furia = 2; r = "👑 Incrível! BUFF 🔥 Fúria: seus próximos 2 ataques causam dano dobrado!"; }
      else if (b === 1) { muralha = 2; r = "👑 Incrível! BUFF 🧱 Muralha: bloqueia os próximos 2 ataques inimigos!"; }
      else r = "👑 Incrível! BUFF ❤️ Reforços: +" + add("sold", 3) + " soldados!";
    } else r = "👑 Errou o desafio! Você perdeu " + perde(15) + " unidade(s).";
    cd = Math.max(1, 3 - sk.est);
  }

  let t = r;
  if (ok) {
    const o = ganhaOuro(boss ? 25 : 8), x = boss ? 30 : 10, up = ganhaXp(x);
    pontos += boss ? 30 : 10;
    t += "<br>💰 +" + o + " ouro • ✨ +" + x + " XP" + (up ? " • 🆙 Nível " + nivel + "! +1 ponto de habilidade" : "");
  }
  if (!boss && cd > 0) cd--;
  if (ehp <= 0) { msg(t); render(); return vitoria(); }

  const red = muralha > 0 ? 1 : escudo;
  if (muralha > 0) muralha--;
  const d = Math.round(FASES[f].dano * (.8 + Math.random() * .5) * (1 - .1 * sk.arm) * (1 - red));
  const l = perde(d); escudo = 0; bate("pArmy", "hit", 600);
  t += "<br>💥 O inimigo causou " + d + " de dano" + (red ? " (defesa " + Math.round(red * 100) + "%)" : "") + (l ? " e você perdeu " + l + " unidade(s)" : "") + ".";
  fimTurno(t);
}

function fimTurno(t) {
  if (qtd() && Math.random() < .3) {
    const [txt, fn, quiz] = EV[Math.floor(Math.random() * EV.length)];
    t += "<br><br>📣 <b>Evento:</b> " + txt;
    if (quiz) {
      msg(t);
      return pergunta(1, ok => {
        if (ok) { const o = ganhaOuro(30); ganhaXp(30); t += "<br>✅ O sábio aprova! +" + o + " ouro e +30 XP."; }
        else t += "<br>❌ O sábio balança a cabeça. Sem prêmio.";
        termina(t);
      });
    }
    t += fn();
  }
  termina(t);
}

function termina(t) {
  msg(t); ocupado = false; render();
  if (ehp <= 0) return vitoria();
  if (!qtd()) derrota();
}

function vitoria() {
  ocupado = true;
  const o = ganhaOuro(60); ganhaXp(40); pontos += 50; render();
  if (f === FASES.length - 1)
    return mostra("<h2>🏆 VITÓRIA FINAL!</h2><p>Você conquistou todas as eras e provou ser um grande historiador!</p><p><b>⭐ " + pontos + " pontos • Nível " + nivel + '</b></p><button onclick="novoJogo()">Jogar de novo</button>');
  mostra("<h2>🎉 Fase vencida!</h2><p>Você derrotou: " + FASES[f].inimigo + ".<br>+" + o + " ouro • +40 XP • +50 pontos</p><button onclick=\"irQuartel()\">Ir ao quartel 🏪</button>");
}
function proxima() { f++; iniciaFase(); }

function derrota() {
  ex = {sold:5, arq:2, cav:0, cat:0}; acc = 0; ouro += 40;
  mostra("<h2>💀 Seu exército caiu!</h2><p>Revise a matéria e tente de novo! Um exército de reserva foi montado e você ganhou +40 ouro para reforçar no quartel.</p><button onclick=\"tentar()\">Tentar de novo</button>");
}
function tentar() { iniciaFase(); loja(); }

// ===== INÍCIO =====
document.querySelectorAll("#actions button[data-a]").forEach(b => b.onclick = () => agir(b.dataset.a));
$("eSprite").textContent = FASES[0].em;
$("eName").textContent = FASES[0].inimigo;
render();
mostra(
  "<h2>⚔️ Guerra da História</h2>" +
  "<p>Monte seu exército com 🤺 soldados, 🏹 arqueiros, 🐎 cavaleiros e 🪨 catapultas, e vença cada era!</p>" +
  "<p>⚔️ <b>Atacar</b>: suas tropas causam dano (cada inimigo tem um ponto fraco)<br>🛡️ <b>Defender</b>: reduz o próximo ataque<br>🪖 <b>Recrutar</b>: ganha soldados grátis<br>👑 <b>Desafio do Chefe</b>: difícil, mas dá buffs poderosos!</p>" +
  "<p>Acertar perguntas rende 💰 ouro e ✨ XP. Use o ouro para contratar tropas e o XP (níveis) para comprar habilidades. Fique atento aos 📣 eventos!</p>" +
  '<button onclick="novoJogo()">Montar exército e lutar</button>'
);
