import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jafar Iqbal', 'Alomgir', 'Salman', 'Shubho'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'In Design', price: '$5.33' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pld => <li>{pld.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }


      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>


    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props) {
  return (
    <div style={{ border: '2px solid gold' }}>
      <h3>My Name: {props.name}</h3>
      <h3>My Profession: {props.job}</h3>
    </div>
  )
}

export default App;
