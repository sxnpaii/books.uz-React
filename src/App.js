
import './App.css';
// components
import Colons from './components/colon';
// sources
import Logo from './img/book_logo.png';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <img src={Logo} alt="" />
        <a href='#!'> books.uz</a>
      </header>
      {/* hero */}
      <section className="App-hero">
        <h1>We read a wonder books together...</h1>
      </section>
      <section className='App-colons'>
        <Colons />
        <Colons />
        <Colons />
      </section>
      {/* footer */}
      <footer>
        <div className="footer">
          <img src={Logo} alt="" />
          <div className="contacts">
            <h4>Единый кол-центр (круглосуточно)</h4>
            <b>+998 93 857 77 66</b>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;