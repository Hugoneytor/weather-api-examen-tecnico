import { useState, useEffect } from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import Loading from "./Loading";
import "../styles/weatherApp.css";
import { loadInfo } from '../helpers/loadInfo';

export interface WeatherData {
  location: Location;
  current: Current;
}

interface Location {
  name: string;
  country: string;
  lon: number;
  lat: number;
}

interface Current {
  condition: {
    text: string;
    icon: string;
  };
  temp_c: number;
  last_updated: string;
}

const WeatherApp = (): JSX.Element => {

  const [ weather, setWeather ] = useState<null | WeatherData>(null)
  const [ toggleButton, setToggleButton] = useState<boolean>(false)

  useEffect( ()=> {
    let lastCity : string;
    const storedCity = localStorage.getItem('myCity');
    if(storedCity){
      lastCity = storedCity;
    }else{
      lastCity = 'London'
    }
    loadInfo(lastCity, setWeather)
  }, [])

  useEffect( () => {
    document.title = `Weather || ${ weather?.location.name } `
  }, [weather])

  const handleChangeCity = ( city: string ) : void => {
    setWeather(null);
    loadInfo(city, setWeather)
  }

  const onToggleButton = () : void => {
    setToggleButton(!toggleButton)
  }

  return (
    <div className={`${!toggleButton ? 'lightBack' : 'darkBack'}`}>
      <div className={`weatherContainer`}>
        <h1 className="title">
          Weather App
        </h1>
          <WeatherForm onChangeCity={handleChangeCity}/>
          {
            weather ? 
            <WeatherMainInfo weather={weather} toggleButton={toggleButton}/>
            :
            <Loading />
          }
        
      </div>
      <button className={`toggleButton ${!toggleButton ? 'darkButton' : 'lightButton'}`} onClick={onToggleButton}>
        { !toggleButton ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default WeatherApp
