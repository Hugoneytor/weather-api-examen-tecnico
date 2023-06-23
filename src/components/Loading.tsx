import  '../styles/loading.css';
import { useState, useEffect } from 'react';
import {Alert} from '@mui/material'

const Loading = () : JSX.Element => {

  const [cityText, setCityText ] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      setCityText(true)
    }, 3000)
  }, [])

  return (
    <div>
      {
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