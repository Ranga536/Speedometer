// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed} mph</h1>
        <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate button"
            type="button"
            onClick={this.onClickAccelerate}
          >
            Accelerate
          </button>
          <button
            className="apply-brake button"
            type="button"
            onClick={this.onClickApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
