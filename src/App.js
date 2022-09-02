import './App.css';
import Footer from './components/Footer';
import InstagramCarousel from './components/InstagramCarousel';
import MainHero from './components/MainHero';
import Header from'./components/Header';
import Main from './components/Main'

function App() {
  return (
    <div className='App'>
      <Header/>
      <MainHero />
      <Main/>
      <InstagramCarousel />
      <Footer />
    </div>
  );
}

export default App;
