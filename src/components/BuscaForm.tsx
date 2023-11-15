import React, { useState } from 'react';

interface BuscaFormProps {
  onSearch: (query: string, country: string) => void;
}

const BuscaForm: React.FC<BuscaFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('');

  const handleSearch = () => {
    onSearch(query, country);
  };

  return (
    <div>
      <h2>Buscar Eventos</h2>
      <input
        type="text"
        placeholder="Pesquisar evento"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Código do País"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BuscaForm;
