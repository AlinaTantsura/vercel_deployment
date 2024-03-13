import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {
  const [data, setData] = useState(null);
  fetch('https://vercel-deployment-server-kappa.vercel.app/api/second').then(resp => resp.json()).then(resp => setData(resp));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data ? <p>{data.message}</p> : <p>There is no data</p>}
        
      </header>
    </div>
  );
}

export default App;
