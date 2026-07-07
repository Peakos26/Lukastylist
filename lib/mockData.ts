export type WardrobeItem = {
  id: string;
  name: string;
  brand: string;
  category: string;
  colors: string[];
  favorite?: boolean;
  worn?: number;
  image?: string;
};

export type Look = {
  id: string;
  name: string;
  occasion: string;
  style: string;
  avatar: string;
  items: string[];
};

export const week = [
  { label: "23", date: "2026-06-23", day: "Seg", hasLook: true },
  { label: "24", date: "2026-06-24", day: "Ter", hasLook: false },
  { label: "25", date: "2026-06-25", day: "Qua", hasLook: true, selected: true },
  { label: "26", date: "2026-06-26", day: "Qui", hasLook: true },
  { label: "27", date: "2026-06-27", day: "Sex", hasLook: false },
  { label: "28", date: "2026-06-28", day: "Sab", hasLook: false },
  { label: "29", date: "2026-06-29", day: "Dom", hasLook: false },
];

export const wardrobeItems: WardrobeItem[] = [
  { id: "1", name: "Blazer areia", brand: "Studio FMW", category: "outerwear", colors: ["#D8C3B2"], favorite: true, worn: 6 },
  { id: "2", name: "Camisa azul", brand: "Studio FMW", category: "top", colors: ["#B9D5EA"], worn: 4 },
  { id: "3", name: "Calca wide leg", brand: "Studio FMW", category: "bottom", colors: ["#463829"], favorite: true, worn: 2 },
  { id: "4", name: "Vestido midi", brand: "Studio FMW", category: "dress", colors: ["#CDA7B6"], worn: 8 },
  { id: "5", name: "Sandalia preta", brand: "Studio FMW", category: "shoes", colors: ["#111111"], worn: 9 },
  { id: "6", name: "Bolsa vinho", brand: "Studio FMW", category: "bag", colors: ["#6A2435"], favorite: true, worn: 5 },
];

export const looks: Look[] = [
  {
    id: "look-1",
    name: "Marketing Campaign",
    occasion: "Trabalho",
    style: "Business casual",
    avatar: "A",
    items: ["1", "2", "3", "5"],
  },
  {
    id: "look-2",
    name: "Coffee Run",
    occasion: "Casual",
    style: "Minimalista",
    avatar: "B",
    items: ["2", "4", "5"],
  },
  {
    id: "look-3",
    name: "Friday Mode",
    occasion: "Encontro",
    style: "Glam",
    avatar: "C",
    items: ["1", "4", "6"],
  },
];

export const discoverLooks = [
  { id: "d1", title: "Aimme", location: "Fairview, US", views: "547.0k", tone: "#E6D8CF" },
  { id: "d2", title: "Saisho", location: "Tunis, TN", views: "455.1k", tone: "#CDB5A1" },
  { id: "d3", title: "Victoria", location: "London, UK", views: "562.1k", tone: "#B6958B" },
  { id: "d4", title: "Mina", location: "Berlin, DE", views: "218.4k", tone: "#D7D1CB" },
  { id: "d5", title: "Nadia", location: "Rio de Janeiro, BR", views: "182.0k", tone: "#C8B1A4" },
  { id: "d6", title: "Luna", location: "Milan, IT", views: "301.2k", tone: "#A58B7F" },
];
