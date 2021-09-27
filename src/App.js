import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ShotHistory from './components/ShotHistory'
import { Route } from "react-router-dom";
import NewGrindReport from "./components/NewGrindReport"
import FullGrindReport from "./components/FullGrindReport"
import EditFullGrindReport from "./components/EditFullGrindReport"

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE);


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <div><ShotHistory className="shot-history" /></div>
      </Route>
      <Route path="/NewGrindReport">
        <div><NewGrindReport className="NewGrindReport" /></div>
      </Route>
      <Route path="/FullGrindReport/:id">
        <div><FullGrindReport className="fullGrindReport" /></div>
      </Route>
      <Route path="/EditFullGrindReport/:id/edit">
        <div><EditFullGrindReport className="EditFullGrindReport" /></div>
      </Route>
      <Footer />
    </div>
  );
}


export default App;
