import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Quotes from './components/Quotes';

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE);


function App() {
  return (
    <div className="App">
      <Header />
      <Quotes />

    </div>
  );
}

export default App;
