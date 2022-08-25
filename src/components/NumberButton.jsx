import React,{useState,useContext} from 'react';
import '../styles/NumberButton.css';
import AppContext from '../context/AppContext';

function NumberButton({number}) {

  const {setPrintNumber} = useContext(AppContext);
  
  return (
    <div 
    className='NumberButton'
    onClick={()=>setPrintNumber(number)}
    >
        <p>{number}</p>
    </div>
  )
}

export default NumberButton