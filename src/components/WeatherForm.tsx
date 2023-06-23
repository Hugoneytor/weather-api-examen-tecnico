import { useState } from 'react';
import '../styles/weatherForm.css'

//Interface for the function 
interface WeatherFormProps {
  onChangeCity: (city:string) => void
}

const WeatherForm = ( {onChangeCity} : WeatherFormProps ): JSX.Element => {

  //useState to set a city
  const [city, setCity] = useState<string> ('');

  //Function to store the input
  const onHandleInput = ( e: React.ChangeEvent<HTMLInputElement> ) : void => {
    setCity( e.target.value )
  }

  //Function to submit the city and get the information
  const onHandleSubmit = ( e: React.ChangeEvent<HTMLFormElement> ) : void => {
    e.preventDefault();
    //If there are no more than 0 characters in length do nothing
    if( city.length === 0 ) return;
    //Load the new city
    onChangeCity(city)
    //Cleaning the input
    setCity('')
  }

  return (
    <form onSubmit={onHandleSubmit} className="container">
      <input type="text" className="input" onChange={onHandleInput} value={city}/>
    </form>
  )
}

export default WeatherForm