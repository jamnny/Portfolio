import './App.css';
import Mesect from './sects/Me/Mesect';
import ParticlesComponent from './components/p';
import Proj from './sects/Projects/Proj';

function App() {

  return (
    <div>
      <ParticlesComponent id="par"/>
      <Mesect />
      <Proj />
    </div>
  );
}

export default App