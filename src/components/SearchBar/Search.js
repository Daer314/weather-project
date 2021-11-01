import React, { useState } from 'react'
import cities from '../../cities'
import './Search.css'
import { VscSearch } from "react-icons/vsc";

export default function SearchBar({onSelectCity}) {

    const [active, setActive] = useState(false);

    return (
        <div className='searchContainer'>
            <h2>Your Cities</h2>
            <div className='dropdown'>
                <div
                    className='dropdown-btn' 
                    onClick={(e) => setActive(!active)}
                    >City <VscSearch />
                </div>
                    { active && (
                        <div className='dropdown-content'>
                        {cities.map(city => (
                            <div
                                key={city.id}
                                className='dropdown-item'
                                onClick={() => onSelectCity(city)}
                            >
                                {city.name}
                            </div>
                        ))}
                        </div>
                    )}
            </div>
        </div>
    )
}
