import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const num1 = useRef(null);
  const num2 = useRef(null);

  const [sign, setSign] = useState("+");
  const [result,setResult] = useState(0);
  const [totalOps,setTotOps] = useState(0);
  const [isVisible,setIsVisible] = useState(false);

  const calculate = (A,B,operator) =>{
    const a = parseInt(A)
    const b = parseInt(B)
    switch (operator){
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case 'x':
        setResult(a * b);
        break;
      case "\u00F7":
        setResult(a / b);
        break;
      }
      setTotOps(totalOps + 1);
      
      if(!isVisible)
        toggleVisibility();
  }
  
  function reset(){
    num1.current.value="";
    num2.current.value="" ;
    setSign("+");
    toggleVisibility();
  }

  function toggleVisibility(){
    setIsVisible(!isVisible);
  }

  return (
    <div className='container'>
      <h1>Total operations: {totalOps}</h1>
      <div className="equation">
          <input type="number" ref={num1} /> <p className='sign'>{sign}</p> <input type="number" ref={num2}/>
      </div>
      <div>
        <input type="button" value="+" onClick={() => setSign("+")}/>
        <input type="button" value="-" onClick={() => setSign("-")}/>
        <input type="button" value="x" onClick={() => setSign("x")}/>
        <input type="button" value="&divide;" onClick={() => setSign(	"\u00F7")}/>
      </div>
      <div>
        <input type="button" value="reset" onClick={reset}/>
        <input type="button" value="calculate" onClick={() => calculate(num1.current.value,num2.current.value,sign)}/>
        {isVisible && <h2>Result: {result}</h2>}

      </div>
    </div>
  )
}

export default App
