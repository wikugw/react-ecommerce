import './App.css';
import Collection from './components/collection/Collection';
import Featured from './components/featured/Featured';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewArrival from './components/newArrival/NewArrival';
import Offer from './components/offer/Offer';

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
      </main>
    </div>
  );
}

export default App;
