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
    <div className="container">
      <h1>Meu Ticket</h1>
      <>
        <input
          className="busca"
          type="text"
          placeholder="Pesquisar evento"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </>
      <input
        className='busca-pais'
        type="text"
        placeholder="Código do País"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <button className='busca' onClick={handleSearch}>PROCURAR</button>
    </div>
  );
};

export default BuscaForm;
