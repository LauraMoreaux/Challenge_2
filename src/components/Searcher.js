import '../stylesheets/Searcher.css';

function Searcher() {
    return (
      <div className="Searcher-box">
          <label htmlFor="city">
          <input id="city" type="text" placeholder="Enter a city"></input>
          </label>
          <button type="submit">Buscar</button>
      </div>
    );
  }
  
  export default Searcher;