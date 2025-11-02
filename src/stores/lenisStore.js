import { create } from "zustand";

export const useLenisStore = create((set) => ({
   lenis: null,
   loading: true,
   setLenis: (lenisInstance) => set({ lenis: lenisInstance }),
   setLoading: (value) => set({ loading: value })
}));