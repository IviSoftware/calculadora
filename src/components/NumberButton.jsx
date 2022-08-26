import React,{useState,useContext} from 'react';
import '../styles/NumberButton.css';
import AppContext from '../context/AppContext';

function NumberButton({number}) {

  const {setPrintNumber,simbolState,setPrintNumberTwo} = useContext(AppContext);

  const sendNumberScreen = ()=>{
    if(simbolState!=''){
      setPrintNumberTwo(number)
    }else{
      setPrintNumber(number)
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