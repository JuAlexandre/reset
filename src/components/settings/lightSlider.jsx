import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


export default class LightSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      intensity: 50,
      min: 0,
      max: 100,
      step: 10
    }
  }

  handleOnChange = (value) => {
    this.setState({
      intensity: value
    })
  }

  render() {
    const labels = {
      0: 'Low',
      50: 'Medium',
      100: 'High'
    }

    return (
      <Slider className="rangeSlider"
        value={this.state.intensity}
        min={this.state.min}
        max={this.state.max}
        step={this.state.step}
        onChange={this.handleOnChange}
        labels={labels}
      />
    )
  }
}
