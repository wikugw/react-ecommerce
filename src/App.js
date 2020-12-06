import './App.css';
import Collection from './components/collection/Collection';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewArrival from './components/newArrival/NewArrival';
import NewsLetter from './components/newsLetter/NewsLetter';
import Offer from './components/offer/Offer';
import Sponsor from './components/sponsor/Sponsor';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <Collection />
        <Featured />
        <Offer />
        <NewArrival />
        <NewsLetter />
        <Sponsor />
        <Footer />
      </main>
    </div>
  );
}

export default App;
