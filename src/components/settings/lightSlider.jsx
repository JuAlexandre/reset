import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export default class LightSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      intensity: 50,
      min: 0,
      max: 100,
      step: 10,
    };
  }

  handleOnChange = value => {
    this.setState({
      intensity: value,
    });
  };

  render() {
    const labels = {
      0: '0',
      50: '50',
      100: '100',
    };

    return (
      <div className="rangeSlider">
        <Slider
          value={this.state.intensity}
          min={this.state.min}
          max={this.state.max}
          step={this.state.step}
          onChange={this.handleOnChange}
          labels={labels}
        />
      </div>
    );
  }
}
