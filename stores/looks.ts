import { create } from "zustand";
import { looks } from "@/lib/mockData";

type State = {
  looks: typeof looks;
};

export const useLooksStore = create<State>(() => ({
  looks,
}));
