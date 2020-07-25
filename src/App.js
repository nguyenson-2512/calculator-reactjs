import React from 'react';
import './App.css';
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import ClearButton from './components/ClearButton/ClearButton'
import * as math from 'mathjs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    if(val !== "x"){
      this.setState({
        input: this.state.input + val
      })
    }
    else if(val === "x"){
      val = "*"
      this.setState({
        input: this.state.input + val
      })
    }
  }

  equalHandle = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    })
  }

  render() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className="row">
          <Button clickHandle={this.addToInput}>7</Button>
          <Button clickHandle={this.addToInput}>8</Button>
          <Button clickHandle={this.addToInput}>9</Button>
          <Button clickHandle={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button clickHandle={this.addToInput}>4</Button>
          <Button clickHandle={this.addToInput}>5</Button>
          <Button clickHandle={this.addToInput}>6</Button>
          <Button clickHandle={this.addToInput}>x</Button>
        </div>
        <div className="row">
          <Button clickHandle={this.addToInput}>1</Button>
          <Button clickHandle={this.addToInput}>2</Button>
          <Button clickHandle={this.addToInput}>3</Button>
          <Button clickHandle={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandle={this.addToInput}>.</Button>
          <Button clickHandle={this.addToInput}>0</Button>
          <Button clickHandle={() => this.equalHandle()}>=</Button>
          <Button clickHandle={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton clearHandle={() => {this.setState({input: ""})}}>Clear</ClearButton>
        </div>
      </div>
    </div>
  )
  }
}

export default App;
