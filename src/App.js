import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// return fetch http://localhost:3000/api/orders/history
  // ❓ Which host/server will that fetch request be sent to?
  // The same host as shown in the address bar: localhost:3000
//  The fix is to add a "proxy"key in the TOP-LEVEL of the package.json

