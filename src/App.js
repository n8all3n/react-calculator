import React from 'react';

import './App.css';
import CalculatorButton from './CalculatorButton'
import calc from './Calculate';

export default class App extends React.Component {
  state = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  onDigitClick = (btnType) => {
    this.setState(calc.inputDigit(btnType, this.state));
  }

  allClear = () => {
    this.setState(calc.resetCalculator(this.state));
  }

  inputDecimal = () => {
    this.setState(calc.inputDecimal(this.state));
  }

  handleOperator = (nextOperator) => {
    this.setState(calc.handleOperator(nextOperator, this.state));
  }

  handlePositiveNegative = () => {
    this.setState(calc.handlePositiveNegative(this.state));
  }

  render() {
    return (
      <div className="app">
          <div className="result">
            <span>{this.state.displayValue}</span>
          </div>
          <div className="button-row">
            <CalculatorButton name="AC" buttonType="calc-button function-button" onClick={this.allClear} />
            <CalculatorButton name="+/-" buttonType="calc-button function-button" onClick={this.handlePositiveNegative}/>
            <CalculatorButton name="%" buttonType="calc-button function-button" onClick={() =>this.handleOperator('%')}/>
            <CalculatorButton name="÷" buttonType="calc-button orange-button" onClick={() =>this.handleOperator('/')}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="7" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="8" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="9" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="X" buttonType="calc-button orange-button" onClick={() => this.handleOperator('*')}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="4" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="5" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="6" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="-" buttonType="calc-button orange-button"onClick={() =>this.handleOperator('-')} />
          </div>
          <div className="button-row">
            <CalculatorButton name="1" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="2" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="3" buttonType="calc-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="+" buttonType="calc-button orange-button" onClick={() =>this.handleOperator('+')}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="0" buttonType="calc-button wide-button" onClick={this.onDigitClick}/>
            <CalculatorButton name="." buttonType="calc-button" onClick={this.inputDecimal} />
            <CalculatorButton name="=" buttonType="calc-button orange-button" onClick={() =>this.handleOperator('=')}/>
          </div>
      </div>
    );
  }
}


