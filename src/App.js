// hooks
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
// pages
import AuthPage from './pages/auth/AuthPage';
import NewOrderPage from './pages/new-order/NewOrderPage';
// components
// css
import './App.css';
import OrderHistoryPage from './pages/order-history/OrderHistoryPage';
import Nav from './components/Nav/Nav';

function App() {

  const [ user, setUser ] = useState( null ) // array destructuring

  return (
    <main className="App">
      <h1>APP</h1>
      { user ?
      <>
        <Nav />
        <Routes>
          <Route path="/orders/new" element={ <NewOrderPage /> }/>
          <Route path="/orders" element={ <OrderHistoryPage /> }/>
        </Routes>
      </>
        :
      <AuthPage />
      }
    </main>
  );
}

export default App;

// return fetch http://localhost:3000/api/orders/history
  // Which host/server will that fetch request be sent to?
  // The same host as shown in the address bar: localhost:3000
//  The fix is to add a "proxy"key in the TOP-LEVEL of the package.json

