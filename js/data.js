// Dados mock do Portal da Consultora
const DATA = {
  consultant: {
    name: "Jayne Almeida",
    role: "Personal Stylist",
    initials: "JA"
  },
  
  clients: [
    {
      id: 1,
      name: "Marina Silva",
      initials: "MS",
      plan: "Premium",
      status: "active",
      biotype: "Retangular",
      color: "Outono",
      project: "Closet Inteligente",
      progress: 65,
      next: "15/07/2026",
      email: "marina@email.com",
      pieces: 142,
      looks: 28
    },
    {
      id: 2,
      name: "Carla Oliveira",
      initials: "CO",
      plan: "Essencial",
      status: "active",
      biotype: "Ampulheta",
      color: "Primavera",
      project: "Coloração Pessoal",
      progress: 40,
      next: "18/07/2026",
      email: "carla@email.com",
      pieces: 89,
      looks: 15
    },
    {
      id: 3,
      name: "Ana Costa",
      initials: "AC",
      plan: "Premium",
      status: "pending",
      biotype: "Triângulo",
      color: "Inverno",
      project: "Visagismo",
      progress: 20,
      next: "20/07/2026",
      email: "ana@email.com",
      pieces: 67,
      looks: 12
    }
  ],
  
  closet: [
    {
      id: 1,
      name: "Blazer Camel",
      brand: "Zara",
      cat: "Blazers",
      color: "Camel",
      fabric: "Lã",
      fit: "Slim",
      formal: true,
      season: "todas",
      fav: true,
      emoji: "🧥",
      bg: "#E7D8C2",
      uses: 12,
      matches: [2, 5, 8]
    },
    {
      id: 2,
      name: "Calça Alfaiataria",
      brand: "H&M",
      cat: "Calças",
      color: "Preto",
      fabric: "Algodão",
      fit: "Retilínea",
      formal: true,
      season: "todas",
      fav: true,
      emoji: "👖",
      bg: "#3A352E",
      uses: 18,
      matches: [1, 3, 7]
    },
    {
      id: 3,
      name: "Blusa Seda",
      brand: "C&A",
      cat: "Blusas",
      color: "Creme",
      fabric: "Seda",
      fit: "Solta",
      formal: true,
      season: "todas",
      fav: false,
      emoji: "👚",
      bg: "#FAF7F2",
      uses: 8,
      matches: [2, 4, 6]
    },
    {
      id: 4,
      name: "Saia Midi",
      brand: "Renner",
      cat: "Saias",
      color: "Terracota",
      fabric: "Linho",
      fit: "Evasê",
      formal: false,
      season: "verão",
      fav: true,
      emoji: "👗",
      bg: "#C0654E",
      uses: 6,
      matches: [3, 5, 9]
    },
    {
      id: 5,
      name: "Camisa Linho",
      brand: "Arezzo",
      cat: "Camisas",
      color: "Branco",
      fabric: "Linho",
      fit: "Regular",
      formal: true,
      season: "verão",
      fav: false,
      emoji: "👔",
      bg: "#FFFFFF",
      uses: 10,
      matches: [1, 4, 8]
    }
  ],
  
  looks: [
    {
      id: 1,
      name: "Look Executivo",
      client: 1,
      occasion: "Trabalho",
      pieces: [1, 2, 3],
      season: "todas",
      approved: true
    },
    {
      id: 2,
      name: "Casual Elegante",
      client: 1,
      occasion: "Almoço",
      pieces: [3, 4, 5],
      season: "verão",
      approved: true
    },
    {
      id: 3,
      name: "Evento Noite",
      client: 2,
      occasion: "Jantar",
      pieces: [1, 4],
      season: "todas",
      approved: false
    }
  ],
  
  agenda: [
    {
      time: "09:00",
      dur: 60,
      title: "Consultoria Marina",
      type: "presencial",
      tag: "closet",
      client: 1
    },
    {
      time: "11:00",
      dur: 30,
      title: "Call Carla",
      type: "online",
      tag: "coloração",
      client: 2
    },
    {
      time: "14:00",
      dur: 90,
      title: "Visagismo Ana",
      type: "presencial",
      tag: "visagismo",
      client: 3
    },
    {
      time: "16:00",
      dur: 45,
      title: "Reunião Lookbook",
      type: "online",
      tag: "looks",
      client: null
    }
  ]
};

// Navegação do Portal (sidebar)
const NAV = [
  {
    group: "Principal",
    items: [
      { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
      { id: "clientes", label: "Clientes", icon: "users" },
      { id: "agenda", label: "Agenda", icon: "calendar" }
    ]
  },
  {
    group: "Projetos",
    items: [
      { id: "projetos", label: "Projetos", icon: "folder" },
      { id: "consultorias", label: "Consultorias", icon: "briefcase" },
      { id: "closets", label: "Closets", icon: "shirt" },
      { id: "looks", label: "Looks", icon: "sparkles" }
    ]
  },
  {
    group: "Análise",
    items: [
      { id: "coloracao", label: "Coloração", icon: "palette" },
      { id: "biotipo", label: "Biotipo", icon: "ruler" },
      { id: "visagismo", label: "Visagismo", icon: "face" }
    ]
  },
  {
    group: "Lifestyle",
    items: [
      { id: "compras", label: "Compras", icon: "shopping-bag" },
      { id: "viagens", label: "Viagens", icon: "plane" }
    ]
  },
  {
    group: "Gestão",
    items: [
      { id: "financeiro", label: "Financeiro", icon: "dollar-sign" },
      { id: "relatorios", label: "Relatórios", icon: "bar-chart" },
      { id: "ia", label: "IA Assistant", icon: "bot" }
    ]
  },
  {
    group: "Plataforma",
    items: [
      { id: "marketplace", label: "Marketplace", icon: "store" },
      { id: "config", label: "Configurações", icon: "settings" }
    ]
  }
];
