import React from 'react';

import './App.css';
import CalculatorButton from './CalculatorButton'

export default class App extends React.Component {
  state = {
    total: 0,
    func: null
  }

  onBtnClick = (btnType) => {
    alert(btnType);
  }

  render() {
    return (
      <div className="app">
          <div className="result">
            <span>{this.state.total}</span>
          </div>
          <div className="button-row">
            <CalculatorButton name="AC" buttonType="calc-button function-button" onClick={this.onBtnClick} />
            <CalculatorButton name="+/-" buttonType="calc-button function-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="%" buttonType="calc-button function-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="÷" buttonType="calc-button orange-button" onClick={this.onBtnClick}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="7" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="8" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="9" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="X" buttonType="calc-button orange-button" onClick={this.onBtnClick}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="4" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="5" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="6" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="-" buttonType="calc-button orange-button"onClick={this.onBtnClick} />
          </div>
          <div className="button-row">
            <CalculatorButton name="1" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="2" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="3" buttonType="calc-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="+" buttonType="calc-button orange-button" onClick={this.onBtnClick}/>
          </div>
          <div className="button-row">
            <CalculatorButton name="0" buttonType="calc-button wide-button" onClick={this.onBtnClick}/>
            <CalculatorButton name="." buttonType="calc-button" onClick={this.onBtnClick} />
            <CalculatorButton name="=" buttonType="calc-button orange-button" onClick={this.onBtnClick}/>
          </div>
      </div>
    );
  }
}


