import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Search from './components/SearchBar/Search';
import Card from './components/Card/Card'
import './App.css';

function App() {

  const [array, setArray] = useState([])

  const addCity = (city) => {
    setArray(array.concat(city))
  }

  const removeCity = (cityName) => {
    console.log(cityName)
    setArray(array.filter(city => city.name !== cityName))
  }
  
  return (
    <div className="App">
      <Navigation />
      <div className='main'>
        <Search
          onSelectCity={addCity}
        />
        {(array.length === 0) ?
          <h1 className='select-city'>Please select a City</h1>
        : <div className='cards-container'>{array.map((city) =>
            <Card
              key={city.id}
              query={city.name}
              onDeleteCity={removeCity}
            />
            )
          }</div>
        }</div>
    </div>
  );
}

export default App;
