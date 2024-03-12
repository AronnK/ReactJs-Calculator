import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const appendValue = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    setResult(eval(result));
  };

  const clearResult = () => {
    setResult('');
  };

  const deleteLast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <button onClick={() => appendValue('7')}>7</button>
      <button onClick={() => appendValue('8')}>8</button>
      <button onClick={() => appendValue('9')}>9</button>
      <button onClick={() => appendValue('/')}>/</button>
      <button onClick={() => appendValue('4')}>4</button>
      <button onClick={() => appendValue('5')}>5</button>
      <button onClick={() => appendValue('6')}>6</button>
      <button onClick={() => appendValue('*')}>*</button>
      <button onClick={() => appendValue('1')}>1</button>
      <button onClick={() => appendValue('2')}>2</button>
      <button onClick={() => appendValue('3')}>3</button>
      <button onClick={() => appendValue('-')}>-</button>
      <button onClick={() => appendValue('0')}>0</button>
      <button onClick={() => appendValue('+')}>+</button>
      <button onClick={calculate}>=</button>
      <button onClick={clearResult}>C</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={calculate}>=</button>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById('root'));

export default Calculator;
