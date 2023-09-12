import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../api/getCharacters';
import { parseApiCharacters } from '../helpers/parseGetCharacterResponse';

type UseGetCharacterOptions = {
  enabled?: boolean;
};

export const useGetCharacter = (
  characterName: string,
  options?: UseGetCharacterOptions
) => {
  return useQuery({
    ...options,
    queryKey: ['character', characterName],
    queryFn: () => getCharacters(characterName),
    select: parseApiCharacters,
  });
};
