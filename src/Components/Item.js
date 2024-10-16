import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

const Item = ({ item }) => {
  const onAdd = (quantity) => {
    console.log(`Adicionado ${quantity} unidades de ${item.name}`);
  };

  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>R$ {item.price.toFixed(2)}</Card.Text>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default Item;