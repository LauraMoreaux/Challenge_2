import '../stylesheets/WeatherResults.css';

function WeatherResults(props) {
  let showedImage = "";
  // let temp = "";
  let info = props.weather.main;
  switch (info) {
    case 'Rain':
      showedImage = 'Imagen lluvia';
      // temp = `{<span>Temp: {props.weather.temp} ºC</span>}`;
      break;
    case 'Clouds':
      showedImage = 'Imagen nubes';
      break;
    case 'Clear':
      showedImage = 'Imagen despejado';
      break;
    case 'Snow':
      showedImage = 'Imagen nieve';
      break;
    default:
      showedImage = '';
  }

    return (
      <div className="Results-box">
        <div className="Info-localization">
          <h2>{props.weather.name}</h2>
          <h3>{props.weather.country}</h3>
        </div>
        <div className="Info-weather">
          <p>{showedImage}</p>
          <span>{props.weather.temp} ºC</span>
        </div>
      </div>
    );
  }
  
  export default WeatherResults;