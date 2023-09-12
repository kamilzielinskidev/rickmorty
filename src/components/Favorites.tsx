import { useCharactersStore } from '../hooks/useCharactersStore';
import './Favorites.css';

export const Favorites = () => {
  const { characters } = useCharactersStore();

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {characters.length === 0 && <p>No favorites yet</p>}
      {characters.length > 0 && (
        <ul className="favorites-list">
          {characters.map((character) => (
            <li key={character.id}>
              <img
                className="favorites-image"
                src={character.image}
                alt={`image of character ${character.name}`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
