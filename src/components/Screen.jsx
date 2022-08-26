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

        {(simbolState != '') && (
          <p>{numberStateTwo}</p>
        )}

        {result != 0 && (
          <p>{result}</p>
        )}
    </div>
  )
}

export default Screen