import { useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './components/cards'; 
const urlWeather = 'https://goweather.herokuapp.com/weather/patna'
function App() {
  function addBtn(){
        fetch(urlWeather)
        .then((data)=>{
          data.json()
        }).then((value)=>{
          console.log(`${value} value`)
        })
  }
  return (
    <div className='main'>
      <div className='row'>
        <input type='text' placeholder='Enter a City...'></input>
        <div className='btn' onClick={addBtn}>Add</div>
      </div>
        <div className='top containerCard'>
            <div>
              <img src={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'}></img>
            </div>
            <div>
              <p>
                Today
              </p>
              <h1>
                New York
              </h1>
              <p>
                Temperature : 32 degree
              </p>
              <p>
                clear sky
              </p>
            </div>
        </div>
        <div className='bottom cardsContainer'>
            <div className='cards'>
              <Card imageUrl={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'} />
              <Card position={'left'} imageUrl={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'} />
              <Card position={'middle'} imageUrl={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'} />
              <Card position={'right'} imageUrl={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'} />
            </div>
        </div>
    </div>
  );
}

export default App;