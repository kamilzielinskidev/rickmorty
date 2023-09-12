import { useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useCharactersStore } from '../hooks/useCharactersStore';
import { useGetCharacter } from '../hooks/useGetCharacater';
import * as S from '../utils/string';
import { AutosuggestionSelect } from './AutosuggestionSelect';

export const CharactersAugosuggestion = () => {
  const [inputValue, setInputValue] = useState('');
  const debounceInputValue = useDebounce(inputValue, 200);
  const { characters: storageCharacters, addCharacter } = useCharactersStore();
  const { data, status, fetchStatus } = useGetCharacter(debounceInputValue, {
    enabled: !S.isEmpty(debounceInputValue),
  });

  const charactersToDisplay = (
    data?.results.filter(
      (character) => !storageCharacters.find((c) => c.id === character.id)
    ) ?? []
  ).map((character) => ({
    id: character.id,
    label: character.name,
  }));

  const handleOnItemClick = (item: { id: number; label: string }) => {
    const character = data?.results.find((c) => c.id === item.id);
    console.log({
      item,
      character,
    });

    if (character) {
      addCharacter(character);
    }
  };

  const statusToDisplay =
    fetchStatus === 'idle' && status === 'loading' ? 'idle' : status;

  console.log({ charactersToDisplay });

  return (
    <AutosuggestionSelect
      label="Find Rick & Morty Characters"
      value={inputValue}
      onValueChange={setInputValue}
      items={charactersToDisplay}
      status={statusToDisplay}
      onItemClick={handleOnItemClick}
    />
  );
};
