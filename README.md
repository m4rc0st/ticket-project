# ticket-project
> Este repositório tem o intuito de constuir uma aplicação, com consumo da API do [TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

## Requisistos do projeto

A aplicação é baseada em React.js, que permita aos usuários realizar as seguintes ações:

1. Ao abrir a aplicação web usuário deverá ver algumas sugestões de eventos com seus respectivos nomes, banners, link para o site de compra e o período de venda dos ingressos.
2. O usuário deverá ser capaz de buscar por **atrações** e por **eventos** utilizando um campo de texto e sendo capaz de selecionar o país onde ele ocorrerá.
3. Os resultados da busca devem ser exibidos na página com as mesmas informações das sugestões iniciais (nomes, banners, link para o site de compra e o período de venda dos ingressos).
4. Deve-se utilizar a API do [TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/).

## Rodando a Aplicação
Clone o repositório
```sh
git clone https://github.com/m4rc0st/ticket-project.git)https://github.com/m4rc0st/ticket-project.git
```
Instale o node dentro do projeto
```sh
cd ticket-project
npm install
```
Inicie a aplicação
```sh
npm run dev
```
### Estrutura do source
```sh
src/
|-- assests/
|-- components/
|   |-- BuscaForm.js
|   |-- EventoLista.js
|-- services/
|   |-- ticketMasterApi.js
|-- styles/
|-- App.js
|-- index.js
```
