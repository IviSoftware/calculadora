import React from 'react';
import '../styles/AccountButton.css';

function NumberButton({simbol}) {
  return (
    <div className='AccountButton'>
        <p>{simbol}</p>
    </div>
  )
}

export default NumberButton