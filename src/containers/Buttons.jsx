import React from 'react';
import NumberButton from '../components/NumberButton';
import AccountButton from '../components/AccountButton';

function Buttons() {
  return (
    <div className='Buttons'>

      <div className='NumberButtons'>
        <AccountButton simbol={'clear'} isSimbol={false} />
        <AccountButton simbol={''} isSimbol={false} />
        <AccountButton simbol={''}  />
        <AccountButton simbol={'/'} isSimbol={true} />

        <NumberButton number={"1"} />
        <NumberButton number={"2"} />
        <NumberButton number={"3"}/>
        <AccountButton simbol={'x'} isSimbol={true} />

        <NumberButton number={"4"} />
        <NumberButton number={"5"} />
        <NumberButton number={"6"} />
        <AccountButton simbol={'-'} isSimbol={true} />

        <NumberButton number={"7"} />
        <NumberButton number={"8"} />
        <NumberButton number={"9"} />
        <AccountButton simbol={'+'} isSimbol={true} />

        <NumberButton number={"0"} />
        <AccountButton simbol={''}  />
        <AccountButton simbol={'delete'} isSimbol={false} />
        <AccountButton simbol={'='} isSimbol={false} />
      </div>

      <div className='lateralBar'>

      </div>
      
    </div>
  )
}

export default Buttons