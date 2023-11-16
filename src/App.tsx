import React, {useEffect, useState } from 'react';
import BuscaForm from '../src/components/BuscaForm.tsx';
import EventoLista from '../src/components/EventoLista.tsx';
import { searchEvents } from './services/ticketMasterApi';
import './styles/main.scss';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Busca inicial ao carregar a aplicação
    async function fetchInitialEvents() {
      const initialEvents = await searchEvents('concert', 'US');
      setSearchResults(initialEvents);
    }

    fetchInitialEvents();
  }, []);

  const handleSearch = async (query: string, country: string) => {
    const eventos = await searchEvents(query, country);
    setSearchResults(eventos);
  };

  return (
    <div className="container">
      <BuscaForm onSearch={handleSearch} />
      <h2>Vamos nos permitir!</h2>
      <EventoLista events={searchResults} />
      <h2>Enquanto houver sol</h2>
      <EventoLista events={searchResults} />
      <h2>Eventos de Destaque</h2>
      <EventoLista events={searchResults} />

    </div>
  );
}

export default App;
