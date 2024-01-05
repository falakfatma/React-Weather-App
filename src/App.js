import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='main'>
        <input type='text' placeholder='Enter a City...'></input>
        <div className='top card'>
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
              <h6 className='cardsWeekName'>
                Wednesday
              </h6>
              <img src={'https://cdn.pixabay.com/photo/2016/04/07/22/09/sun-1314953_1280.png'}></img>
              <p className='cardsTemperature'>
                21'C
              </p>
            </div>
        </div>
    </div>
  );
}

export default App;