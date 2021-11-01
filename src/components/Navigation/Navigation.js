import React from 'react'
import './Navigation.css'
import logo from './logo.png'
import time from './time.png'

export default function Navigation() {
    return (
        <ul className='list'>
            <li>
                <a href='home'>
                    <img className='image' src={logo} alt="logo"/>
                </a>
            </li>
            <li>
                <a href='time'>
                    <img className='image' src={time} alt="time"/>
                </a>
            </li>
        </ul>
    )
}
