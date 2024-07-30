import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Shop from './pages/Shop.jsx'
import ItemPage from './pages/ItemPage.jsx'
import Home from './pages/Home.jsx'
import React from 'react'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/items",
    element: <Shop />
  },
  {
    path: "/item/:id",
    element: <ItemPage />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

export const Context = React.createContext();

function App() {
  let [cart, setCart] = useState({});

  function updateAmount(item, amount) {
    let id = item.id
    let newCart = JSON.parse(JSON.stringify(cart))
    if (amount == 0) {
      delete newCart[id];
    } else {
      newCart[id] = {...item, "amount": amount}
    }
    console.log(newCart);
    setCart(newCart);
  }
  
  return (
    <Context.Provider value={[cart, updateAmount]}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

export default App
