import { format } from 'date-fns';

import React from 'react';

interface Evento {
  id: string;
  name: string;
  url: string;
  images: { url: string }[];
  sales: { public: { startDateTime: string; endDateTime: string } };
}

interface EventoListaProps {
  events: Evento[];
}


const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return format(date, 'dd/MM');
};

const EventoLista: React.FC<EventoListaProps> = ({ events }) => {
  // Limita a exibição de apenas 4 eventos
  const eventosParaExibir = events.slice(0, 4);

  return (
    <div className="container2">
      <div >
        {eventosParaExibir.map((event) => (
          <div key={event.id} className="event">
            <img className="banner" src={event.images[0]?.url} alt={event.name} />
            <p className='titulo'>{event.name}</p>
            <p>
              Vendas: {formatDate(event.sales.public.startDateTime)} -{' '}
              {formatDate(event.sales.public.endDateTime)}
            </p>
            <button className="compra" onClick={() => window.open(event.url, '_blank')}>
              COMPRAR INGRESSO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventoLista;
