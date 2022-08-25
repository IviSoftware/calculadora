import React from 'react';
import AppContext from '../context/AppContext'
import useNumberScreen from '../hooks/useNumberScreen';
import Calculator from './Calculator';
import '../styles/globals.css';


function App() {

  const numberScreen = useNumberScreen();

  return (
    <React.Fragment>
      <AppContext.Provider value={numberScreen}>
        <div className='container'>
          <Calculator/>
        </div>
      </AppContext.Provider>
    </React.Fragment>
  )
}

export default App