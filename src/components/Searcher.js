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
          <input className="Input-box"
                  id="city"
                 type="text" 
                 placeholder="Enter a city"
                 value={props.city}
                 onChange={handleFilterChild}></input>
          </label>
          <button className="Searcher-button" type="submit"><i className="fa fa-search fa-2x"></i></button>
      </form>
    );
  }
  
  export default Searcher;