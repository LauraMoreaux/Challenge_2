// import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import Searcher from './Searcher';
import WeatherResults from './WeatherResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather APP
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <Searcher/>
        <WeatherResults/>
      </main>
    </div>
  );
}

export default App;
