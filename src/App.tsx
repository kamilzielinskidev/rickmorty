import { AutosuggestionSelect } from './components/AutosuggestionSelect';

import './App.css';
import { Favorites } from './components/Favorites';
import { QueryClientProvider } from './providers/QueryClientProvider';
import { CharactersAugosuggestion } from './components/CharactersAugosuggestion';

export default function App() {
  return (
    <main>
      <QueryClientProvider>
        <div className="app-container">
          <CharactersAugosuggestion />
          <Favorites />
        </div>
      </QueryClientProvider>
    </main>
  );
}
