// hooks
import { useState } from 'react';
// pages
import AuthPage from './pages/auth/AuthPage';
// components
// css
import './App.css';
import NewOrderPage from './pages/new-order/NewOrderPage';

function App() {

  const [ user, setUser ] = useState( null ) // array destructuring

  return (
    <main className="App">
      <h1>APP</h1>
      { user ?
        <NewOrderPage />
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

