import { WeatherData } from "../components/WeatherApp";

//Interface to the function of setWeather
interface SetWeatherFn {
  (data: WeatherData | null) : void;
}

export const loadInfo = async( city: string, setWeather:SetWeatherFn ): Promise<void> => {

  //Set the local storage to the new city
  localStorage.setItem('myCity', city)
  
  //Try catch to handle errors
  try {
    //key and url
    const api_key = 'f3bd62c0c12e41308fa05133230803';
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;

    //fetch to the API
    const fetchApi = await fetch(url);
    //If there is an error throw an error
    if(!fetchApi.ok){
      setWeather(null)
      throw new Error(" CIUDAD NO ENCONTRADA ")
    }

    //getting the response of the fecth
    const resp: WeatherData = await fetchApi.json();
    
    //After 1.5 secs set the new city in the setWeather
    setTimeout(()=>{
      setWeather(resp)
    }, 1500)

  } catch (error) {
    console.log(error)
  }
}
