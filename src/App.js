import './App.css';
import './components/Conversor.css'
import './components/Footer.css'

import Footer from './components/Footer'
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor  moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor  moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor  moedaA="USD" moedaB="EUR"></Conversor>
        <Conversor  moedaA="CAD" moedaB="BRL"></Conversor>
      </div>
      <div className="linha">
        <Conversor  moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor  moedaA="BRL" moedaB="EGP"></Conversor>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
