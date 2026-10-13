// ===== FASES (inimigos) =====
const FASES = [
  {nome:"Fase 1 – Pré-História", inimigo:"Tribo dos Mamutes", em:"🦣", hp:60, dano:10},
  {nome:"Fase 2 – Mesopotâmia", inimigo:"Exército Babilônico", em:"🏺", hp:80, dano:12},
  {nome:"Fase 3 – Egito Antigo", inimigo:"Guarda do Faraó", em:"🐍", hp:100, dano:15},
  {nome:"Fase 4 – Grécia Antiga", inimigo:"Hoplitas Espartanos", em:"🏛️", hp:120, dano:18},
  {nome:"Fase 5 – Roma Antiga (Chefão)", inimigo:"Legião do Imperador", em:"🦅", hp:170, dano:22}
];

// ===== PERGUNTAS: [fase, nível (1 normal / 2 chefe), pergunta, CERTA, errada, errada, errada] =====
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

// ===== ESTADO =====
const MAX = 150;
const $ = id => document.getElementById(id);
let f = 0, tropas = 100, ehp = 60, escudo = 0, muralha = 0, furia = 0, cd = 0, pontos = 0, ocupado = true;
const usadas = new Set();

// ===== TELAS =====
function mostra(html, chefe) {
  $("box").innerHTML = html;
  $("box").className = "box" + (chefe ? " chefe" : "");
  $("overlay").classList.add("on");
}
const fecha = () => $("overlay").classList.remove("on");
const msg = t => $("log").innerHTML = t;
function bate(id) {
  const el = $(id);
  el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit");
}

function render() {
  const F = FASES[f];
  $("pBar").style.width = Math.max(0, tropas / MAX * 100) + "%";
  $("eBar").style.width = Math.max(0, ehp / F.hp * 100) + "%";
  $("pTxt").textContent = Math.max(0, tropas) + " tropas";
  $("eTxt").textContent = Math.max(0, ehp) + " tropas";
  $("info").textContent = F.nome + "  •  ⭐ " + pontos + " pontos";
  $("buffs").innerHTML = (furia ? "🔥 Fúria x" + furia + " " : "") + (muralha ? "🧱 Muralha x" + muralha : "");
  $("bossBtn").textContent = cd > 0 ? "👑 Chefe (volta em " + cd + ")" : "👑 Desafio do Chefe";
  document.querySelectorAll("#actions button").forEach(b =>
    b.disabled = ocupado || (b.dataset.a === "boss" && cd > 0));
}

// ===== FLUXO DO JOGO =====
function novoJogo() { f = 0; tropas = 100; pontos = 0; usadas.clear(); iniciaFase(); }

function iniciaFase() {
  const F = FASES[f];
  ehp = F.hp; escudo = 0; muralha = 0; furia = 0; cd = 0; ocupado = false;
  fecha();
  $("eSprite").textContent = F.em;
  $("eName").textContent = F.inimigo;
  msg("⚔️ " + F.nome + ": o inimigo avança! Escolha sua ação e responda à pergunta.");
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
    n > 1
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
  let t = "";
  if (ok) pontos += a === "boss" ? 30 : 10;

  if (a === "attack") {
    if (ok) {
      const d = 25 * (furia ? 2 : 1);
      if (furia) furia--;
      ehp -= d; bate("eSprite");
      t = "⚔️ Acertou! Seu ataque causou " + d + " de dano!";
    } else t = "❌ Errou! Seu ataque falhou.";
  } else if (a === "defend") {
    if (ok) { escudo = .7; t = "🛡️ Acertou! Sua tropa se protegeu e vai sofrer menos dano."; }
    else t = "❌ Errou! Sua defesa não ficou pronta.";
  } else if (a === "recruit") {
    if (ok) { tropas = Math.min(MAX, tropas + 20); t = "🪖 Acertou! +20 tropas se juntaram ao seu exército!"; }
    else t = "❌ Errou! Ninguém se alistou.";
  } else {
    if (ok) {
      const b = Math.floor(Math.random() * 3);
      if (b === 0) { furia = 2; t = "👑 Incrível! BUFF 🔥 Fúria: seus próximos 2 ataques causam dano dobrado!"; }
      else if (b === 1) { muralha = 2; t = "👑 Incrível! BUFF 🧱 Muralha: bloqueia os próximos 2 ataques inimigos!"; }
      else { tropas = Math.min(MAX, tropas + 30); t = "👑 Incrível! BUFF ❤️ Reforços: +30 tropas!"; }
    } else { tropas -= 10; t = "👑 Errou o desafio do chefe! Você perdeu 10 tropas."; }
    cd = 3;
  }
  if (a !== "boss" && cd > 0) cd--;

  if (ehp <= 0) { render(); return vitoria(); }

  if (tropas > 0) {
    const d = Math.round(FASES[f].dano * (.8 + Math.random() * .5));
    const red = muralha > 0 ? 1 : escudo;
    if (muralha > 0) muralha--;
    const real = Math.round(d * (1 - red));
    tropas -= real; escudo = 0; bate("pSprite");
    t += "<br>💥 O inimigo atacou e causou " + real + " de dano" + (red ? " (defesa reduziu " + Math.round(red * 100) + "%)" : "") + ".";
  }
  msg(t);
  ocupado = false;
  render();
  if (tropas <= 0) derrota();
}

function vitoria() {
  pontos += 50; render();
  if (f === FASES.length - 1)
    return mostra("<h2>🏆 VITÓRIA FINAL!</h2><p>Você conquistou todas as eras e provou ser um grande historiador!</p><p><b>⭐ " + pontos + " pontos</b></p><button onclick=\"novoJogo()\">Jogar de novo</button>");
  mostra("<h2>🎉 Fase vencida!</h2><p>Você derrotou: " + FASES[f].inimigo + ".<br>Ganhou +50 pontos e +25 tropas de reforço!</p><button onclick=\"proxima()\">Próxima fase</button>");
}
function proxima() { f++; tropas = Math.min(MAX, tropas + 25); iniciaFase(); }

function derrota() {
  mostra("<h2>💀 Seu exército caiu!</h2><p>Revise a matéria e tente de novo. Você recomeça esta fase com 80 tropas.</p><button onclick=\"tentar()\">Tentar de novo</button>");
}
function tentar() { tropas = 80; iniciaFase(); }

// ===== INÍCIO =====
document.querySelectorAll("#actions button").forEach(b => b.onclick = () => agir(b.dataset.a));
$("eSprite").textContent = FASES[0].em;
$("eName").textContent = FASES[0].inimigo;
render();
mostra(
  "<h2>⚔️ Guerra da História</h2>" +
  "<p>Comande seu exército pelas eras da História! Toda ação exige acertar uma pergunta:</p>" +
  "<p>⚔️ <b>Atacar</b> causa dano no inimigo<br>🛡️ <b>Defender</b> reduz o próximo ataque<br>🪖 <b>Recrutar</b> traz mais tropas<br>👑 <b>Desafio do Chefe</b> é difícil, mas dá buffs poderosos!</p>" +
  "<p>Zere as tropas inimigas para vencer cada fase.</p>" +
  "<button onclick=\"novoJogo()\">Começar a batalha</button>"
);
