import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherCloudy } from "react-icons/ti";
import './Card.css'

const api = {
    key: '282709cebdb6de0ccc8e09f95fa7e631',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

export default function Card({query, onDeleteCity}) {

    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState({})
    const [active, setActive] = useState(1)

    const toggle = (number) => {
        (number === 1)? setActive(1)
        : (number === 2)? setActive(2)
        : (number === 3)? setActive(3)
        : setActive(1)
    }

    const fetchData = useCallback(
        () => {
            axios.get(`${api.base}weather?q=${query}&units=${units}&APPID=${api.key}`)
            .then(res => {
            setWeather(res.data.main)
        })
        .catch(err => console.log(err))
        },
        [query, units],
    );

    useEffect(() => {
        fetchData()
    }, [fetchData])
    

    return (
        <div>
            <div className='card'>
                <button
                    onClick={() => onDeleteCity(query)}
                    className='close-button'
                >X
                </button>
                <h4>{query}</h4>
                <div className='temp-container'>
                    <p className='number'>{Math.round(weather.temp)}°</p>
                    <div className='letters-container'>
                        <p 
                            className={(active === 1)? 'active' : 'temp-type'}
                            onClick={() => {
                                setUnits('metric');
                                toggle(1)
                            }}
                        >C
                        </p>
                        <p 
                            className={(active === 2)? 'active' : 'temp-type'}
                            onClick={() => {
                                setUnits('imperial')
                                toggle(2)
                            }}                            
                        >F
                        </p>
                        <p 
                            className={(active === 3)? 'active' : 'temp-type'}
                            onClick={() => {
                                setUnits('default')
                                toggle(3)
                            }}
                        >K
                        </p>
                    </div>
                </div>
                {(units === 'metric')?
                    (weather.temp <= 19)?
                        <div className='sensation'>
                            <TiWeatherCloudy className='icon'/>
                            <h4>Cold</h4>
                        </div>
                    :(weather.temp > 19 && weather.temp <= 26)?
                        <div className='sensation'>
                            <TiWeatherPartlySunny className='icon'/>
                            <h4>Warm</h4>
                        </div>
                    :(weather.temp > 26)?
                        <div className='sensation'>
                            <TiWeatherSunny className='icon'/>
                            <h4>Hot</h4>
                        </div>
                    : 'Celsius'
                :(units === 'imperial')?
                    (weather.temp <= 66.2)?
                        <div className='sensation'>
                            <TiWeatherCloudy className='icon'/>
                            <h4>Cold</h4>
                        </div>
                    :(weather.temp > 66.2 && weather.temp <= 78.8)?
                        <div className='sensation'>
                            <TiWeatherPartlySunny className='icon'/>
                            <h4>Warm</h4>
                        </div>
                    :(weather.temp > 78.8)?
                        <div className='sensation'>
                            <TiWeatherSunny className='icon'/>
                            <h4>Hot</h4>
                        </div>
                    : 'Farenheit'
                :(units === 'default')?
                    (weather.temp <= 292.15)?
                        <div className='sensation'>
                            <TiWeatherCloudy className='icon'/>
                            <h4>Cold</h4>
                        </div>
                    :(weather.temp > 292.15 && weather.temp <= 299.15)?
                        <div className='sensation'>
                            <TiWeatherPartlySunny className='icon'/>
                            <h4>Warm</h4>
                        </div>
                    :(weather.temp > 299.15)?
                        <div className='sensation'>
                            <TiWeatherSunny className='icon'/>
                            <h4>Hot</h4>
                        </div>
                    : 'Kelvin'
                : 'Undefined'        
                }
                <button 
                    onClick={fetchData}
                    className='button'
                >Update
                </button>
            </div>
        </div>
    )
}
