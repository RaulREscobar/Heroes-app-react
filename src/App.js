import './App.css';
import { NavBar } from './components/NavBar';
import DC from './pages/DC';
import Heroe from './pages/Heroe';
import Login from './pages/Login';
import Marvel from './pages/Marvel';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container mt-3">
      <Marvel/>
      </div>
    </div>
  );
}

export default App;
