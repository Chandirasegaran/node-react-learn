import React, { useState } from 'react';
import { Calc_Button } from './components/Calc_Button';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleOperationClick = (op) => {
    const prevalue=input.slice(-1);
    console.log(prevalue)
    if (prevalue!="+"&&prevalue!="-"&&prevalue!="*"&&prevalue!="/"){
      setInput(input + op)

    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleSquare = () => {
    if (input) {
      setInput((parseFloat(input) ** 2).toString());
    }
  };

  const handleEquals = () => {
    if (input == "Enter Value") {
      setInput("Enter Value");
    }
    else if (input == "Error") {
      setInput("Error");
    }
    else if (input) {
      try {
        const res = eval(input);
        setInput(res)
      } catch (error) {
        console.log(error)
        setInput("Error")
      }
    }
    else {
      setInput("Enter Value");
    }
  };

  return (
    <>
      <div className="container">
        <div className="display">
          <input type="text" value={input || '0'} readOnly />
        </div>
        <div className="buttonRows">
          <Calc_Button btnValue="C" clsName="c-operator" onClick={handleClear} />
          <Calc_Button btnValue="Del" clsName="operator" onClick={handleDelete} />
          <Calc_Button btnValue="x²" clsName="operator" onClick={handleSquare} />
          <Calc_Button btnValue="/" clsName="operator" onClick={() => handleOperationClick('/')} />
        </div>
        <div className="buttonRows">
          <Calc_Button btnValue="7" clsName="number" onClick={() => handleNumberClick('7')} />
          <Calc_Button btnValue="8" clsName="number" onClick={() => handleNumberClick('8')} />
          <Calc_Button btnValue="9" clsName="number" onClick={() => handleNumberClick('9')} />
          <Calc_Button btnValue="*" clsName="operator" onClick={() => handleOperationClick('*')} />
        </div>
        <div className="buttonRows">
          <Calc_Button btnValue="4" clsName="number" onClick={() => handleNumberClick('4')} />
          <Calc_Button btnValue="5" clsName="number" onClick={() => handleNumberClick('5')} />
          <Calc_Button btnValue="6" clsName="number" onClick={() => handleNumberClick('6')} />
          <Calc_Button btnValue="-" clsName="operator" onClick={() => handleOperationClick('-')} />
        </div>
        <div className="buttonRows">
          <Calc_Button btnValue="1" clsName="number" onClick={() => handleNumberClick('1')} />
          <Calc_Button btnValue="2" clsName="number" onClick={() => handleNumberClick('2')} />
          <Calc_Button btnValue="3" clsName="number" onClick={() => handleNumberClick('3')} />
          <Calc_Button btnValue="+" clsName="operator" onClick={() => handleOperationClick('+')} />
        </div>
        <div className="buttonRows">
          <Calc_Button btnValue="0" clsName="number" onClick={() => handleNumberClick('0')} />
          <Calc_Button btnValue="00" clsName="number" onClick={() => handleNumberClick('00')} />
          <Calc_Button btnValue="." clsName="number" onClick={() => handleNumberClick('.')} />
          <Calc_Button btnValue="=" clsName="e-operator" onClick={handleEquals} />
        </div>
      <footer>&copy; Chandirasegaran</footer>
      </div>
    </>
  );
}

export default App;
