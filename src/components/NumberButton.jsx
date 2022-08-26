import React,{useState,useContext} from 'react';
import '../styles/NumberButton.css';
import AppContext from '../context/AppContext';

function NumberButton({number}) {

  const {
    setPrintNumber,
    simbolState,
    setPrintNumberTwo,
    result,
    clearStates
  } = useContext(AppContext);

  const sendNumberScreen = ()=>{
    if(simbolState!=''){ // si hay un signo entonces envia al numero 2
      setPrintNumberTwo(number)
    }else{
      if(result != null){ // si ya hay un resultado en pantalla
        clearStates()
        setPrintNumber(number)
      }else{
        setPrintNumber(number)
      }
    }
  }
  
  return (
    <div 
    className='NumberButton'
    onClick={sendNumberScreen}
    >
        <p>{number}</p>
    </div>
  )
}

export default NumberButton