import './App.css';
import Collection from './components/collection/Collection';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <Collection />
      </main>
    </div>
  );
}

export default App;
