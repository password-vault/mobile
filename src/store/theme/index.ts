import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Appearance } from 'react-native';

type Theme = 'dark' | 'light';

interface IStore {
  theme: Theme;
  toggleTheme(): void;
}

export const useToggle = create<IStore>()(
  persist((set) => ({
    theme: Appearance.getColorScheme(),
    toggleTheme() {
      set((state) => ({
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }));
    },
  }))
);
