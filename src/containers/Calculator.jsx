import React from 'react';
import Buttons from './Buttons';
import Screen from '../components/Screen';
import '../styles/Calculator.css';

function Calculator() {
  return (
    <div className='Calculator'>
        <Screen />
        <Buttons/>
    </div>
  )
}

export default Calculator