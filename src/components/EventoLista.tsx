// src/components/EventList.tsx

import React from 'react';

interface Evento {
  id: string;
  name: string;
  url: string;
  images: { url: string }[];
  sales: { public: { startDateTime: string } };
}

interface EventoListaProps {
  events: Evento[];
}

const EventoLista: React.FC<EventoListaProps> = ({ events }) => {
  return (
    <div>
      <h2>Resultados da Busca</h2>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <img src={event.images[0]?.url} alt={event.name} />
          <p>Link: {event.url}</p>
          <p>Período de venda: {event.sales.public.startDateTime}</p>
        </div>
      ))}
    </div>
  );
};

export default EventoLista;
