import './App.css';
import Footer from './components/Footer';
import InstagramCarousel from './components/InstagramCarousel';
import MainHero from './components/MainHero';
import Header from'./components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <MainHero />
      <InstagramCarousel />
      <Footer />
    </div>
  );
}

export default App;
