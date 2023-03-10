import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Servicos from './components/Servicos';
import Oferta from './components/Oferta';
import Sobre from './components/Sobre';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Servicos />
      <Oferta />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
