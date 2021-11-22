import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Teams from './containers/Teams';
import Team from './containers/Team';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/teams' element = {<Teams />} />
          <Route path = '/teams/:id' element = {<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
