// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {clickedFirst: false, clickedLast: false}

  clickedFirstname = () => {
    this.setState(prevState => ({clickedFirst: !prevState.clickedFirst}))
  }

  clickedLastname = () => {
    this.setState(prevState => ({clickedLast: !prevState.clickedLast}))
  }

  render() {
    const {clickedFirst, clickedLast} = this.state
    return (
      <div className="bg-main-container">
        <h1 className="title">Show/Hide</h1>
        <div className="names-container">
          <div className="firstName-container">
            <button
              className="firstName-btn"
              type="button"
              onClick={this.clickedFirstname}
            >
              Show/Hide Firstname
            </button>
            {clickedFirst ? (
              <div className="details-container">
                <p className="name-sty">Joe</p>
              </div>
            ) : null}
          </div>

          <div className="secondName-container">
            <button
              className="secondName-btn"
              type="button"
              onClick={this.clickedLastname}
            >
              Show/Hide Lastname
            </button>

            {clickedLast ? (
              <div className="details-container">
                <p className="name-sty">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
