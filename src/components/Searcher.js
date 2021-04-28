import React from 'react';
import '../stylesheets/Searcher.css';

function Searcher(props) {

    const handleFilterChild = (ev) => {
      props.handleFilter(ev.target.value);
      console.log(ev.target.value);
    };

    const submitHandler = (ev) => {
      ev.preventDefault();
      props.getDataFromApi();
    };

    return (
      <form className="Searcher-box" onSubmit={submitHandler}>
          <label htmlFor="city">
          <input id="city"
                 type="text" 
                 placeholder="Enter a city"
                 value={props.city}
                 onChange={handleFilterChild}></input>
          </label>
          <button type="submit">Buscar</button>
      </form>
    );
  }
  
  export default Searcher;