import {useState} from 'react';

function useNumberScreen(){
  const [numberState,setNumberState] = useState([]);
  const [numberStateTwo,setNumberStateTwo] = useState([]);
  const [simbolState,setSimbolState] = useState('');

  const [result,setResult] = useState(null);
  
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
    setResult(null)
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

  const rest = (num1,num2)=>{
    setResult(num1 - num2)
    clearNumbers()
 }
  
 const multi = (num1,num2)=>{
  setResult(num1 * num2)
  clearNumbers()
}

const divider = (num1,num2)=>{

  if(num2 == 0){
    setResult('Error, 0 no divider')
    clearNumbers()
  }else{
    setResult(num1 / num2)
    clearNumbers()
  }

 
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
    sum,
    rest,
    multi,
    divider
  }

}

export default useNumberScreen;