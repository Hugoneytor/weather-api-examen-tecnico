import  '../styles/loading.css';
import { useState, useEffect } from 'react';
import {Alert} from '@mui/material'

const Loading = () : JSX.Element => {

  //useState to know if there is a city
  const [cityText, setCityText ] = useState<boolean>(false)

  useEffect(()=>{
    //If there are no cities, set the variable to false
    setTimeout(()=>{
      setCityText(true)
    }, 3000)
  }, [])

  return (
    <div>
      {
        /* If there are no cities, show an Alert */
        cityText && <Alert severity='error'>City not found, try again</Alert>
      }      
      <div className="loadingContainer">
          <div className="loader">
            <div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Loading