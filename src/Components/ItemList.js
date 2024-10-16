import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Container, Row } from 'react-bootstrap';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Cerveja IPA', price: 12.99, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Vinho Tinto', price: 49.99, image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Whisky 12 anos', price: 199.99, image: 'https://via.placeholder.com/150' },
        ]);
      }, 2000);
    });

    fetchItems.then((data) => setItems(data));
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;