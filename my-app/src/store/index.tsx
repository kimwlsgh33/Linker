import create from "zustand";

const useMeStore = create((set) => ({
  me: null,
  setMe: (state) => set({ me: state.me }),
}));
