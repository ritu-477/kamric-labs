import './App.css';
import BackToTop from './common/BackToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';
import { Values } from './components/Values';
import WhoIsKarmic from './components/WhoIsKarmic';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <WhoIsKarmic />
      <Values/>
      <BackToTop/>
    </>
  );
}

export default App;
