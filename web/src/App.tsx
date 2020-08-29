import React from 'react';

import './assets/styles/global.css';
import Routes from './routes';

/* JSX = Javascript + xml
* Aqui, esse App é um componente (função) dentro do React
* que retorna html. 
* Tudo que for criar de parte visual vai ser através da criação de um componente
* Algumas vezes são criados componentes para aproveitar código entre várias telas.
*/
function App() {
  return (
    <Routes />
  );
}

export default App;