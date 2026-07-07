import { create } from "zustand";
import { wardrobeItems } from "@/lib/mockData";

type State = {
  items: typeof wardrobeItems;
  addItem: (name: string) => void;
};

export const useWardrobeStore = create<State>((set) => ({
  items: wardrobeItems,
  addItem: (name) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: String(Date.now()),
          name,
          brand: "Studio FMW",
          category: "top",
          colors: ["#D7D7D7"],
        },
      ],
    })),
}));
