import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Calculator() {
  const Res = (e) => {
    var input = document.getElementById(e.target.id).innerHTML;
    var result = document.getElementById('result');
    switch(input) {
      case '÷':
        result.innerHTML += '/';
        break;
      case 'C':
        result.innerHTML = '';
        break;
      case '⌫':
        if(result.innerHTML === "Syntax Error") {
          result.innerHTML = ''
        }
        result.innerHTML = result.innerHTML.slice(0, -1);
        break;
      case '=':
        try {
          result.innerHTML = eval(result.innerHTML)
        } catch (e) {
          result.innerHTML = "Syntax Error"
        }
        break;
      default:
        result.innerHTML += input;
        break;
    }
  }  
  return (
    <div align="center">
      <h1>Calculator</h1>
      <button id='result'></button>
      <div id="btns">
        <button id="btnOpen" className="input" onClick={Res}>(</button>
        <button id="btnClose" className="input" onClick={Res}>)</button>
        <button id="btnClr" className="input" onClick={Res}>C</button>
        <button id="btnBk" className="input" onClick={Res}>&#x232b;</button>
        <button id="btn7" className="input" onClick={Res}>7</button>
        <button id="btn8" className="input" onClick={Res}>8</button>
        <button id="btn9" className="input" onClick={Res}>9</button>
        <button id="btnDiv" className="input" onClick={Res}>&divide;</button>
        <button id="btn4" className="input" onClick={Res}>4</button>
        <button id="btn5" className="input" onClick={Res}>5</button>
        <button id="btn6" className="input" onClick={Res}>6</button>
        <button id="btnMul" className="input" onClick={Res}>*</button>
        <button id="btn1" className="input" onClick={Res}>1</button>
        <button id="btn2" className="input" onClick={Res}>2</button>
        <button id="btn3" className="input" onClick={Res}>3</button>
        <button id="btnSub" className="input" onClick={Res}>-</button>
        <button id="btnDot" className="input" onClick={Res}>.</button>
        <button id="btn0" className="input" onClick={Res}>0</button>
        <button id="btnEql" className="input" onClick={Res}>=</button>
        <button id="btnSum" className="input" onClick={Res}>+</button>
      </div>
    </div>
  )
}

ReactDom.render(<Calculator/>, document.getElementById('root'));


/* import React,{useState} from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Calculator() {
  const [result, setResult] = useState('');
  const Calculate = (e) => {
    setResult(result.concat(e.target.name))
  }
  const Clear = () => {
    setResult('')
  }
  const backSpace = () => {
    if(result === 'Syntax Error') {
      setResult('')
    } else {
      setResult(result.slice(0, -1))
    }
  }
  const Final = () => {
    try {
      setResult(eval(result))
    } catch(e) {
      setResult('Syntax Error')
    }
  }  
  return (
    <div align="center">
      <h1> Calculator</h1>
      <button id="result">{result}</button>
      <div id="btns">
        <button name='(' id="btnOpen" className="input" onClick={Calculate}>(</button>
        <button name=')' id="btnClose" className="input" onClick={Calculate}>)</button>
        <button id="btnClr" className="input" onClick={Clear}>C</button>
        <button id="btnBk" className="input" onClick={backSpace}>&#x232b;</button>
        <button name='7' id="btn7" className="input" onClick={Calculate}>7</button>
        <button name='8' id="btn8" className="input" onClick={Calculate}>8</button>
        <button name='9' id="btn9" className="input" onClick={Calculate}>9</button>
        <button name='/' id="btnDiv" className="input" onClick={Calculate}>&divide;</button>
        <button name='4' id="btn4" className="input" onClick={Calculate}>4</button>
        <button name='5' id="btn5" className="input" onClick={Calculate}>5</button>
        <button name='6' id="btn6" className="input" onClick={Calculate}>6</button>
        <button name='*' id="btnMul" className="input" onClick={Calculate}>x</button>
        <button name='1' id="btn1" className="input" onClick={Calculate}>1</button>
        <button name='2' id="btn2" className="input" onClick={Calculate}>2</button>
        <button name='3' id="btn3" className="input" onClick={Calculate}>3</button>
        <button name='-' id="btnSub" className="input" onClick={Calculate}>-</button>
        <button name='.' id="btnDot" className="input" onClick={Calculate}>.</button>
        <button name='0' id="btn0" className="input" onClick={Calculate}>0</button>
        <button id="btnEql" className="input" onClick={Final}>=</button>
        <button name='+' id="btnSum" className="input" onClick={Calculate}>+</button>
      </div>
    </div>
  )
}

ReactDom.render(<Calculator/>, document.getElementById('root')); */