import { create } from "zustand";

type State = {
  measurements: Record<string, string>;
  setMeasurement: (key: string, value: string) => void;
};

export const useAvatarStore = create<State>((set) => ({
  measurements: {},
  setMeasurement: (key, value) =>
    set((state) => ({
      measurements: { ...state.measurements, [key]: value },
    })),
}));
