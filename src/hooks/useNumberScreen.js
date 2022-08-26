import {useState} from 'react';

function useNumberScreen(){
  const [numberState,setNumberState] = useState([]);
  const [numberStateTwo,setNumberStateTwo] = useState([]);
  const [simbolState,setSimbolState] = useState('');

  const [result,setResult] = useState(0);
  
  const setPrintNumber = (numberToPrint)=>{
    setNumberState([
      ...numberState,
      numberToPrint
    ])
  } 

  const setPrintNumberTwo = (numberToPrint)=>{
    setNumberStateTwo([
      ...numberStateTwo,
      numberToPrint
    ])
  } 


  const clearStates= () =>{
    setNumberState([])
    setNumberStateTwo([])
    setSimbolState('')
    setResult(0)
  }


  const clearNumbers= () =>{
    setNumberState([])
    setNumberStateTwo([])
    setSimbolState('')
  }

  const sum = (num1,num2)=>{
     setResult(num1 + num2)
     clearNumbers()
  }
  


  return {
    numberState,
    setPrintNumber,
    simbolState,
    setSimbolState,
    numberStateTwo,
    setPrintNumberTwo,
    clearStates,
    result,
    sum
  }

}

export default useNumberScreen;