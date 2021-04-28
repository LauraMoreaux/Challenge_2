import '../stylesheets/WeatherResults.css';

function WeatherResults(props) {

    return (
      <div className="Results-box">
          <h2>{props.weather.name}</h2>
          <h3>{props.weather.country}</h3>
          <p>{props.weather.main}</p>
          <span>{props.weather.temp}</span>
      </div>
    );
  }
  
  export default WeatherResults;