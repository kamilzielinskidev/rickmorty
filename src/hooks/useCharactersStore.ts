import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type StoreCharacter = {
  id: number;
  name: string;
  image: string;
};

export const useCharactersStore = create(
  persist<{
    characters: StoreCharacter[];
    addCharacter: (character: StoreCharacter) => void;
  }>(
    (set) => ({
      characters: [],
      addCharacter: (character) => {
        set((state) => ({
          characters: [...state.characters, character],
        }));
      },
    }),
    {
      name: 'characters-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
