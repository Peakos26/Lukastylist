// App da Cliente - Dados e Telas

// Helpers
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => r.querySelectorAll(s);

// Dados da cliente
const CLIENT = {
  name: "Marina Silva",
  initials: "MS",
  color: "Outono",
  biotype: "Retangular"
};

// Closet mock
const CLOSET = [
  { id: 1, name: "Blazer Camel", cat: "Blazers", emoji: "🧥", color: "#E7D8C2" },
  { id: 2, name: "Calça Preta", cat: "Calças", emoji: "👖", color: "#3A352E" },
  { id: 3, name: "Blusa Creme", cat: "Blusas", emoji: "👚", color: "#FAF7F2" },
  { id: 4, name: "Saia Midi", cat: "Saias", emoji: "👗", color: "#C0654E" },
  { id: 5, name: "Camisa Linho", cat: "Camisas", emoji: "👔", color: "#FFFFFF" },
  { id: 6, name: "Vestido Floral", cat: "Vestidos", emoji: "👗", color: "#F1EADF" },
  { id: 7, name: "Tênis Branco", cat: "Calçados", emoji: "👟", color: "#FFFFFF" },
  { id: 8, name: "Salto Camel", cat: "Calçados", emoji: "👠", color: "#B08D57" },
  { id: 9, name: "Bolsa Bege", cat: "Acessórios", emoji: "👜", color: "#E7D8C2" },
  { id: 10, name: "Colar Ouro", cat: "Acessórios", emoji: "📿", color: "#C7A867" }
];

// Looks (carregado do localStorage ou mock inicial)
let LOOKS = [];

// Agenda mock
const AGENDA = [
  { id: 1, date: "15/07", title: "Consultoria Closet", time: "09:00" },
  { id: 2, date: "20/07", title: "Entrega Looks", time: "14:00" },
  { id: 3, date: "25/07", title: "Shopping Tour", time: "10:00" }
];

// Viagens mock
const TRIPS = [
  { id: 1, dest: "Rio de Janeiro", dates: "10-15/08", looks: 5 },
  { id: 2, dest: "São Paulo", dates: "20-22/08", looks: 3 }
];

// Shopping mock
const SHOPPING = [
  { id: 1, name: "Blazer de Lã", brand: "Zara", price: "R$ 599", priority: "alta" },
  { id: 2, name: "Calça Alfaiataria", brand: "H&M", price: "R$ 299", priority: "média" },
  { id: 3, name: "Blusa Seda", brand: "C&A", price: "R$ 149", priority: "baixa" }
];

// Paleta de tons para fundos
const TONES = ["#FAF7F2", "#F1EADF", "#E7D8C2", "#FFFFFF", "#3A352E"];

// Emojis por categoria de peça
const PIECE_EMOJI = {
  "Blazers": "🧥",
  "Calças": "👖",
  "Blusas": "👚",
  "Saias": "👗",
  "Vestidos": "👗",
  "Camisas": "👔",
  "Calçados": "👟",
  "Acessórios": "👜"
};

// Categorias de peça
const PIECE_CATS = Object.keys(PIECE_EMOJI);

// Estado do look builder
let lookPieces = [];
let lookImageData = null;

// Carregar looks do localStorage
function loadUserLooks() {
  const saved = localStorage.getItem('luka_looks');
  if (saved) {
    LOOKS = JSON.parse(saved);
  } else {
    // Mock inicial
    LOOKS = [
      {
        id: 1,
        name: "Executivo Elegante",
        occasion: "Trabalho",
        season: "todas",
        img: null,
        items: [
          { cat: "Blazers", name: "Blazer Camel", img: null },
          { cat: "Calças", name: "Calça Preta", img: null },
          { cat: "Blusas", name: "Blusa Creme", img: null }
        ],
        fav: true,
        note: ""
      },
      {
        id: 2,
        name: "Casual Verão",
        occasion: "Passeio",
        season: "verão",
        img: null,
        items: [
          { cat: "Vestidos", name: "Vestido Floral", img: null },
          { cat: "Calçados", name: "Tênis Branco", img: null }
        ],
        fav: false,
        note: ""
      }
    ];
  }
}

// Salvar looks no localStorage
function saveUserLooks() {
  localStorage.setItem('luka_looks', JSON.stringify(LOOKS));
}

// Navegação entre telas
function nav(screen, opts = {}) {
  const screenRoot = $('#screenRoot');
  const screenFn = SCREENS[screen];
  
  if (screenFn) {
    screenRoot.innerHTML = screenFn(opts);
    lucide.createIcons();
    
    // Atualizar bottom nav
    $$('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.screen === screen) {
        item.classList.add('active');
      }
    });
  }
}

// Bottom sheet
function openSheet(content) {
  const overlay = $('.sheet-overlay');
  const sheet = $('.sheet');
  $('#sheetContent').innerHTML = content;
  overlay.classList.add('open');
  sheet.classList.add('open');
  lucide.createIcons();
}

function closeSheet() {
  const overlay = $('.sheet-overlay');
  const sheet = $('.sheet');
  overlay.classList.remove('open');
  sheet.classList.remove('open');
}

// Toast
function showToast(msg) {
  const toast = $('.toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Look builder functions
function addLookPiece() {
  lookPieces.push({ cat: "Blusas", name: "", img: null });
  renderPieceRows();
}

function removeLookPiece(idx) {
  lookPieces.splice(idx, 1);
  renderPieceRows();
}

function updatePieceLabel(idx, cat) {
  lookPieces[idx].cat = cat;
}

function updatePieceName(idx, name) {
  lookPieces[idx].name = name;
}

function onPieceImg(idx, input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      lookPieces[idx].img = e.target.result;
      renderPieceRows();
    };
    reader.readAsDataURL(file);
  }
}

function renderPieceRows() {
  const container = $('#pieceRows');
  container.innerHTML = lookPieces.map((p, idx) => `
    <div class="piece-row">
      <select class="piece-select" onchange="updatePieceLabel(${idx}, this.value)">
        ${PIECE_CATS.map(cat => `<option value="${cat}" ${p.cat === cat ? 'selected' : ''}>${cat}</option>`).join('')}
      </select>
      <input type="text" placeholder="Nome da peça" value="${p.name}" onchange="updatePieceName(${idx}, this.value)" style="flex: 1;">
      <input type="file" accept="image/*" onchange="onPieceImg(${idx}, this)" style="display: none;" id="pieceImg${idx}">
      <button class="btn btn-secondary" onclick="$('#pieceImg${idx}').click()" style="padding: 0.5rem;">
        <i data-lucide="image" style="width: 16px;"></i>
      </button>
      <button class="btn btn-secondary" onclick="removeLookPiece(${idx})" style="padding: 0.5rem; color: var(--danger);">
        <i data-lucide="trash-2" style="width: 16px;"></i>
      </button>
    </div>
  `).join('');
  lucide.createIcons();
}

function onLookFile(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      lookImageData = e.target.result;
      $('#lookPreview').innerHTML = `<img src="${lookImageData}" class="preview-img">`;
    };
    reader.readAsDataURL(file);
  }
}

function openLookBuilderSheet() {
  lookPieces = [];
  lookImageData = null;
  
  const content = `
    <div class="sheet-header">
      <h3 class="sheet-title">Novo Look</h3>
      <button class="sheet-close" onclick="closeSheet()">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="look-form">
      <div class="upload-area" onclick="$('#lookImgInput').click()">
        <div id="lookPreview">
          <i data-lucide="camera" style="width: 32px; height: 32px; color: var(--muted);"></i>
          <p class="text-muted mt-2">Toque para foto do look</p>
        </div>
      </div>
      <input type="file" id="lookImgInput" accept="image/*" onchange="onLookFile(this)" style="display: none;">
      
      <input type="text" id="lookName" placeholder="Nome do look" style="margin-top: 1rem;">
      <select id="lookOccasion">
        <option value="">Ocasião</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Passeio">Passeio</option>
        <option value="Evento">Evento</option>
        <option value="Jantar">Jantar</option>
      </select>
      <select id="lookSeason">
        <option value="todas">Todas as estações</option>
        <option value="verão">Verão</option>
        <option value="inverno">Inverno</option>
      </select>
      
      <div id="pieceRows" style="margin-top: 1rem;"></div>
      <button class="btn btn-secondary" onclick="addLookPiece()" style="margin-top: 0.5rem; width: 100%;">
        <i data-lucide="plus"></i> Adicionar Peça
      </button>
      
      <button class="btn btn-primary" onclick="saveNewLook()" style="margin-top: 1rem; width: 100%;">
        Salvar Look
      </button>
    </div>
  `;
  
  openSheet(content);
  renderPieceRows();
}

function saveNewLook() {
  const name = $('#lookName').value;
  const occasion = $('#lookOccasion').value;
  const season = $('#lookSeason').value;
  
  if (!name) {
    showToast('Digite um nome para o look');
    return;
  }
  
  const newLook = {
    id: Date.now(),
    name,
    occasion: occasion || "Geral",
    season,
    img: lookImageData,
    items: lookPieces.filter(p => p.name),
    fav: false,
    note: ""
  };
  
  LOOKS.unshift(newLook);
  saveUserLooks();
  closeSheet();
  showToast('Look salvo!');
  nav('looks');
}

function lookCover(l) {
  if (l.img) {
    return `<img src="${l.img}" class="look-cover">`;
  }
  const emoji = l.items[0]?.cat ? PIECE_EMOJI[l.items[0].cat] || "👗" : "👗";
  return `<div class="look-cover" style="display: flex; align-items: center; justify-content: center; font-size: 4rem; background: var(--sand);">${emoji}</div>`;
}

function lookPiecesSection(l) {
  return `
    <div class="pieces-list">
      ${l.items.map(item => `
        <div class="piece-item">
          <span class="piece-item-emoji">${PIECE_EMOJI[item.cat] || "📦"}</span>
          <div>
            <p style="font-size: 0.9rem; font-weight: 500;">${item.name}</p>
            <p class="text-muted" style="font-size: 0.75rem;">${item.cat}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Telas do App
const SCREENS = {
  hoje: () => `
    <div class="screen-header">
      <h2 class="screen-title">Olá, ${CLIENT.name.split(' ')[0]}! 👋</h2>
    </div>
    
    <div class="hoje-card">
      <h3>Look do Dia</h3>
      <p>Sugestão baseada no seu calendário e clima.</p>
      <button class="btn btn-secondary mt-4" style="background: rgba(255,255,255,0.2); color: white;">
        <i data-lucide="sparkles"></i> Ver sugestão
      </button>
    </div>
    
    <h3 class="mt-6 mb-4">Próximos Eventos</h3>
    ${AGENDA.slice(0, 2).map(a => `
      <div class="card mb-4">
        <div class="flex flex-between">
          <div>
            <p style="font-weight: 500;">${a.title}</p>
            <p class="text-muted" style="font-size: 0.85rem;">${a.date} · ${a.time}</p>
          </div>
          <i data-lucide="calendar" class="text-camel"></i>
        </div>
      </div>
    `).join('')}
  `,
  
  armario: () => `
    <div class="screen-header">
      <h2 class="screen-title">Meu Armário</h2>
      <span class="badge badge-gold">${CLOSET.length} peças</span>
    </div>
    
    <div class="closet-grid">
      ${CLOSET.map(item => `
        <div class="closet-item" onclick="nav('looks')">
          <div class="closet-emoji">${item.emoji}</div>
          <p class="closet-name">${item.name}</p>
          <p class="text-muted" style="font-size: 0.75rem;">${item.cat}</p>
        </div>
      `).join('')}
    </div>
  `,
  
  looks: () => `
    <div class="screen-header">
      <h2 class="screen-title">Meus Looks</h2>
      <span class="badge badge-gold">${LOOKS.length} looks</span>
    </div>
    
    ${LOOKS.map(l => `
      <div class="look-card" onclick="nav('lookDetail', {id: ${l.id}})">
        ${lookCover(l)}
        <div class="look-info">
          <p class="look-name">${l.name}</p>
          <p class="look-meta">${l.occasion} · ${l.items.length} peças</p>
        </div>
      </div>
    `).join('')}
  `,
  
  lookDetail: (opts) => {
    const look = LOOKS.find(l => l.id === opts.id);
    if (!look) return '<p>Look não encontrado</p>';
    
    return `
      <div class="screen-header">
        <button class="btn btn-secondary" onclick="nav('looks')" style="padding: 0.5rem;">
          <i data-lucide="arrow-left"></i>
        </button>
        <h2 class="screen-title">${look.name}</h2>
        <button class="btn btn-secondary" style="padding: 0.5rem;">
          <i data-lucide="heart" class="${look.fav ? 'text-camel' : ''}"></i>
        </button>
      </div>
      
      ${lookCover(look)}
      
      <div class="card mt-4">
        <div class="flex flex-between mb-4">
          <span class="badge badge-info">${look.occasion}</span>
          <span class="badge badge-gold">${look.season}</span>
        </div>
        ${lookPiecesSection(look)}
      </div>
    `;
  },
  
  ia: () => `
    <div class="screen-header">
      <h2 class="screen-title">Stylist IA</h2>
    </div>
    
    <div class="ai-chat">
      <div class="chat-messages">
        <div class="chat-bubble ai">
          Olá! Sou sua Stylist IA. Como posso ajudar hoje com seus looks?
        </div>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Digite sua dúvida...">
        <button>
          <i data-lucide="send" style="width: 18px;"></i>
        </button>
      </div>
    </div>
  `,
  
  perfil: () => `
    <div class="screen-header">
      <h2 class="screen-title">Perfil</h2>
    </div>
    
    <div class="card text-center">
      <div style="width: 80px; height: 80px; background: var(--camel-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem;">
        ${CLIENT.initials}
      </div>
      <h3>${CLIENT.name}</h3>
      <p class="text-muted">Personal Stylist: Jayne Almeida</p>
    </div>
    
    <div class="grid grid-2 mt-6">
      <div class="card text-center">
        <p style="font-size: 0.85rem; color: var(--muted);">Coloração</p>
        <p style="font-weight: 600; color: var(--camel);">${CLIENT.color}</p>
      </div>
      <div class="card text-center">
        <p style="font-size: 0.85rem; color: var(--muted);">Biotipo</p>
        <p style="font-weight: 600; color: var(--camel);">${CLIENT.biotype}</p>
      </div>
    </div>
    
    <div class="card mt-6">
      <div class="flex flex-between p-4" style="border-bottom: 1px solid var(--line);">
        <span>Meus Looks</span>
        <span class="text-camel">${LOOKS.length}</span>
      </div>
      <div class="flex flex-between p-4" style="border-bottom: 1px solid var(--line);">
        <span>Armário</span>
        <span class="text-camel">${CLOSET.length} peças</span>
      </div>
      <div class="flex flex-between p-4">
        <span>Consultorias</span>
        <span class="text-camel">3</span>
      </div>
    </div>
  `,
  
  calendario: () => `
    <div class="screen-header">
      <h2 class="screen-title">Calendário</h2>
    </div>
    
    ${AGENDA.map(a => `
      <div class="card mb-4">
        <div class="flex flex-between">
          <div>
            <p style="font-weight: 500;">${a.title}</p>
            <p class="text-muted" style="font-size: 0.85rem;">${a.date} · ${a.time}</p>
          </div>
          <i data-lucide="calendar" class="text-camel"></i>
        </div>
      </div>
    `).join('')}
  `,
  
  compras: () => `
    <div class="screen-header">
      <h2 class="screen-title">Lista de Compras</h2>
    </div>
    
    ${SHOPPING.map(item => `
      <div class="card mb-4">
        <div class="flex flex-between">
          <div>
            <p style="font-weight: 500;">${item.name}</p>
            <p class="text-muted" style="font-size: 0.85rem;">${item.brand}</p>
          </div>
          <div class="text-right">
            <p style="font-weight: 600; color: var(--camel);">${item.price}</p>
            <span class="badge ${item.priority === 'alta' ? 'badge-danger' : item.priority === 'média' ? 'badge-info' : 'badge-success'}">${item.priority}</span>
          </div>
        </div>
      </div>
    `).join('')}
  `,
  
  viagens: () => `
    <div class="screen-header">
      <h2 class="screen-title">Viagens</h2>
    </div>
    
    ${TRIPS.map(trip => `
      <div class="card mb-4">
        <div class="flex flex-between">
          <div>
            <p style="font-weight: 500;">${trip.dest}</p>
            <p class="text-muted" style="font-size: 0.85rem;">${trip.dates}</p>
          </div>
          <span class="badge badge-gold">${trip.looks} looks</span>
        </div>
      </div>
    `).join('')}
  `
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadUserLooks();
  nav('hoje');
  
  // Fechar sheet ao clicar no overlay
  $('.sheet-overlay').addEventListener('click', closeSheet);
});
