import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo ao E-commerce de Bebidas!" />
    </>
  );
};

export default App;