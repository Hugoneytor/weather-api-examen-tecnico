import { WeatherData } from "../components/WeatherApp";

interface SetWeatherFn {
  (data: WeatherData | null) : void;
}

export const loadInfo = async( city: string, setWeather:SetWeatherFn ): Promise<void> => {

  localStorage.setItem('myCity', city)
  
  try {
    const api_key = 'f3bd62c0c12e41308fa05133230803';
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;

    const fetchApi = await fetch(url);
    if(!fetchApi.ok){
      setWeather(null)
      throw new Error(" CIUDAD NO ENCONTRADA ")
    }

    const resp: WeatherData = await fetchApi.json();
    
    setTimeout(()=>{
      setWeather(resp)
    }, 1500)

  } catch (error) {
    console.log(error)
  }
}
