import {useState} from 'react';

function useNumberScreen(){
  const [numberState,setNumberState] = useState([]);
  
  const setPrintNumber = (numberToPrint)=>{
    setNumberState([
      ...numberState,
      numberToPrint
    ])
  } 


  return {
    numberState,
    setPrintNumber
  }

}

export default useNumberScreen;