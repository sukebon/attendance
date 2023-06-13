import { create } from 'zustand'

type DrawerState ={
  drawer: boolean;
  setDrawer: (payload: boolean) => void
}

export const useStore = create<DrawerState>((set) => ({
  drawer: false,
  setDrawer: () => set((state) => ({ drawer: !state.drawer })),
}))