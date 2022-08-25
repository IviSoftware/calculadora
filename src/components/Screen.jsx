import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/Screen.css';

function Screen() {

  const {numberState} = useContext(AppContext);

  return (
    <div className='Screen'>
        <p>{numberState}</p>
    </div>
  )
}

export default Screen