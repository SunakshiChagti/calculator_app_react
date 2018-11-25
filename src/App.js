import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstInput: 0,
    secondInput: 0,
    expression: 0,
    totalValue: 0
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onKeyPressed = e => {
    e.persist();
    this.setState({
      expression: e.target.innerHTML,
      firstInput: this.state.firstInput,
      secondInput: this.state.secondInput,
      totalValue: 0
    });
  }
  onSubmit = e => {
    e.preventDefault();
    let exp = this.state.expression;
    if (exp === "Add") {
      console.log("add");
      this.setState({
        totalValue: (this.state.firstInput) + (this.state.secondInput)
      })
    }
    else if (exp === "Subtract") {
      this.setState({
        totalValue: (this.state.firstInput) - (this.state.secondInput)
      })
    }
    else if (exp === "Division") {
      this.setState({
        totalValue: (this.state.firstInput) / (this.state.secondInput)
      })
    }
    else if (exp === "Multiplication") {
      this.setState({
        totalValue: (this.state.firstInput) * (this.state.secondInput)
      })
    }
    else {
      console.log("bad calculator user");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <input type="number" name="firstInput" value={this.state.firstInput} onChange={e => this.change(e)} />
        <input type="number" value={this.state.secondInput} onChange={e => this.change(e)} name="secondInput" />
        <button onClick={this.onKeyPressed.bind('add')} >Add</button>
        <button onClick={this.onKeyPressed.bind('sub')} >Subtract</button>
        <button onClick={this.onKeyPressed.bind('div')} >Division</button>
        <button onClick={this.onKeyPressed.bind('mul')} >Multiplication</button>
        <br /><br />
        <button onClick={e => this.onSubmit(e)}>Equals to</button>
        <p>{this.state.totalValue}</p>
      </div>
    );
  }
}

export default App;