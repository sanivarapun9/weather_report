import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherForecast from './Weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherForecast />
  </StrictMode>,
)
