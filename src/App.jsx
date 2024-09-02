import './App.css';
import Mesect from './sects/Me/Mesect';
import ParticlesComponent from './components/p';
import Proj from './sects/Projects/Proj';
import Certs from './sects/Certifications/Certs';
import Skill from './sects/Skills/Skill';
import Contact from './sects/Contacts/Contact';
import Foot from './sects/Footer/Foot';

function App() {

  return (
    <div>
      <ParticlesComponent id="par" />
      <Mesect />
      <Certs />
      <Proj />
      <Skill />
      <Contact />
      <Foot />
    </div>
  );
}

export default App