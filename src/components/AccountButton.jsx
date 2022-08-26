import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/AccountButton.css';

function NumberButton({simbol,isSimbol}) {

  const {
    setSimbolState,
    clearStates,
    sum,
    numberState,
    numberStateTwo,
    simbolState,
    rest,
    multi,
    divider,
    result
  } = useContext(AppContext);


  const clearScreen = ()=>{
    clearStates();
  }

  const plainNumbers = (array1,array2)=>{
    const numberOne = parseInt(array1.reduce((acc,num)=> acc + num),10);
    const numberTwo = parseInt(array2.reduce((acc,num)=> acc + num),10);
    return [numberOne,numberTwo]
  }

  const changeSimbol=()=>{

    if(isSimbol){
      if( result != null || numberState.length <= 0){
        clearScreen();
      }else{
        setSimbolState(simbol);
      }
      /* setAccountsNumber(accountsNumber + 1); */

    }else{


      switch (simbol) {
        case 'clear':
          clearScreen();
          break;
        case '=':
          switch (simbolState) {
            case '+':
              const nums = plainNumbers(numberState,numberStateTwo)
              sum(nums[0],nums[1]);
            break;
            case '-':
              const numsrest = plainNumbers(numberState,numberStateTwo)
              rest(numsrest[0],numsrest[1]);
            break;
            case 'x':
              const numsMulti = plainNumbers(numberState,numberStateTwo)
              multi(numsMulti[0],numsMulti[1]);
            break;
            case '/':
              const numsDiv = plainNumbers(numberState,numberStateTwo)
              divider(numsDiv[0],numsDiv[1]);
            break;
          }
          break;
      }
    }
  }

  return (
    <div 
    className='AccountButton'
    onClick={changeSimbol}
    >
        <p>{simbol}</p>
    </div>
  )
}

export default NumberButton