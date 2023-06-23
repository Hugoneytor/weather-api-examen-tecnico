import '../styles/weatherMainInfo.css'
import { WeatherData } from './WeatherApp';

//Interface to get the Weather interface and define toggleButton
interface WeatherMainInfoProps {
  weather: WeatherData;
  toggleButton: boolean
}

const WeatherMainInfo = ( {weather, toggleButton} : WeatherMainInfoProps ) : JSX.Element => {
  return (
    <div className={`mainInfo ${toggleButton ? 'darkBackground' : 'lightBackground'}`}>
      {/* Rendering of the weather information*/}
      <div className={`city ${toggleButton ? 'lightText' : 'darkText'}`}>
      {weather?.location.name}
      </div>
      <div className={`country ${toggleButton ? 'lightText' : 'darkText'}`}>
      {weather?.location.country}
      </div>
      <div className="row">
        <div className='image'>
          <img src={`http://${weather?.current.condition.icon}`} alt={weather?.current.condition.text} width={100}/>
        </div>
        <div className="weatherCondition">
          <div className={`condition ${toggleButton ? 'lightText' : 'darkText'}`}>
            {weather?.current.condition.text}
          </div>
          <div className={`current ${toggleButton ? 'lightText' : 'darkText'}`}>
            {weather?.current.temp_c} °C
          </div>
        </div>
      </div>
      <div className={`lastInfo ${toggleButton ? 'lightText' : 'darkText'}`}>
        Last updated {weather?.current.last_updated}
      </div>
      {/*Rendering of the map*/}
      <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d184345.0560789642!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1678249751762!5m2!1ses!2smx` }
        className="mapInfo"
        loading="lazy"></iframe>
    </div>
  )
}

export default WeatherMainInfo;
