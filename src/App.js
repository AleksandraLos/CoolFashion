import './App.css';
import Footer from '../../CoolFashion/src/components/Footer';
import InstagramCarousel from './components/InstagramCarousel';
import MainHero from './components/MainHero'

function App() {
  return (
    <div className='App'>
      <MainHero />
      <InstagramCarousel />
      <Footer />
    </div>
  );
}

export default App;
