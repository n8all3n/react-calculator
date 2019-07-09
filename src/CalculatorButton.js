import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    buttonType: PropTypes.string,
    onClick: PropTypes.func
  };

  onBtnClick =() => {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <div className={this.props.buttonType} onClick={this.onBtnClick}>
          {this.props.name}
      </div>
    );
  }
}