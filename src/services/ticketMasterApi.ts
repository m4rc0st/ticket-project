// src/services/ticketMasterApi.ts

const API_KEY = 'vjZbSn6aynYvppr1hJ2pRyp0FiQvjdc1';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';


interface Event {
  id: string;
  name: string;
  url: string;
  images: { url: string }[];
  sales: { public: { startDateTime: string } };
}

export const searchEvents = async (query: string, country: string): Promise<Event[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}events.json?apikey=${API_KEY}&keyword=${query}&countryCode=${country}`
    );
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return [];
  }
};
