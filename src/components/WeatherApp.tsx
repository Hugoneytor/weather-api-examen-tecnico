import { useState, useEffect } from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import Loading from "./Loading";
import { loadInfo } from '../helpers/loadInfo';
import "../styles/weatherApp.css";

//Definition of interfaces
// Structure of the API information
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

//Main Component
const WeatherApp = (): JSX.Element => {

  //Definition of the weatherData
  const [ weather, setWeather ] = useState<null | WeatherData>(null)
  //Definition of the darkLight button
  const [ toggleButton, setToggleButton] = useState<boolean>(false)

  //useEffect to render the first weather
  useEffect( ()=> {
    //Get the last city in local storage
    let lastCity : string;
    const storedCity = localStorage.getItem('myCity');
    if(storedCity){
      lastCity = storedCity;
    }else{
      //If not, set city to London
      lastCity = 'London'
    }
    //Load information about the city
    loadInfo(lastCity, setWeather)
  }, [])

  //useEffect to update the title
  useEffect( () => {
    document.title = `Weather || ${ weather?.location.name } `
  }, [weather])

  //Function to change the information for each new city
  const handleChangeCity = ( city: string ) : void => {
    setWeather(null);
    loadInfo(city, setWeather)
  }

  //Function to toggle the LightDark button
  const onToggleButton = () : void => {
    setToggleButton(!toggleButton)
  }

  //Rendering of the components
  return (
    <div className={`${!toggleButton ? 'lightBack' : 'darkBack'}`}>
      <div className={`weatherContainer`}>
        <h1 className="title">
          Weather App
        </h1>
          <WeatherForm onChangeCity={handleChangeCity}/>
          {
            /* If weather exists, show all the information */
            weather ? 
            <WeatherMainInfo weather={weather} toggleButton={toggleButton}/>
            :
            /* While loading, it shows the Loading component. If it does not exists, show a loop of the Loading */
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
