import { useState } from 'react';
import '../styles/weatherForm.css'

interface WeatherFormProps {
  onChangeCity: (city:string) => void
}

const WeatherForm = ( {onChangeCity} : WeatherFormProps ): JSX.Element => {

  const [city, setCity] = useState<string> ('');

  const onHandleInput = ( e: React.ChangeEvent<HTMLInputElement> ) : void => {
    setCity( e.target.value )
  }

  const onHandleSubmit = ( e: React.ChangeEvent<HTMLFormElement> ) : void => {
    e.preventDefault();
    if( city.length === 0 ) return;
    onChangeCity(city)
    setCity('')
  }

  return (
    <form onSubmit={onHandleSubmit} className="container">
      <input type="text" className="input" onChange={onHandleInput} value={city}/>
    </form>
  )
}

export default WeatherForm