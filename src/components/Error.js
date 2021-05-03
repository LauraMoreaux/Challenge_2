import '../stylesheets/WeatherResults.css';


function Error() {
      return (
        <div className="Results-box">
          <div className="Info-localization">
            {/* <h2>{props.weather.name}</h2>
            <h3>{props.weather.country}</h3> */}
          </div>
          <div className="Info-weather">
            <span>La ubicación que buscas no se encuentra. Inténtalo de nuevo!!!</span>
          </div>
        </div>
      );
    }
    
    export default Error;