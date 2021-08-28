import React from 'react';
import MenuItem from './MenuItem';

const MenuList = props => {
  const MENU = [
    {
      id: 1,
      name: 'Vegan Cold Brew',
      price: 25,
      image:
        'https://images.unsplash.com/photo-1495221521568-8b714b2cb6fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 2,
      name: 'Vanilla Cream Frappuccino®',
      price: 20,
      image:
        'https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 3,
      name: 'New York Cheesecake',
      price: 25,
      image:
        'https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80'
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {MENU.length === 0 && <h2>No dishes found !!</h2>}
        {MENU.map(dish => {
          return (
            <MenuItem
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
