import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/Screen.css';

function Screen() {

  const {numberState,numberStateTwo,simbolState,result} = useContext(AppContext);


  return (
    <div className='Screen'>
        <p>{numberState}</p>
        {simbolState && (
          <p>{simbolState}</p>
        )}

        {result != null && (
          <p>{result}</p>
        )}

        {(simbolState != '') && (
          <p>{numberStateTwo}</p>
        )}

        
    </div>
  )
}

export default Screen