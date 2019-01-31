import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      data: null
    };
    this.onUbahAyat = this.onUbahAyat.bind(this);
    this.getDataFromServer = this.getDataFromServer.bind(this);
  }

  onUbahAyat(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getDataFromServer() {
    let data = {
      a: this.state.a,
      b: this.state.b
    };
    fetch('http://localhost:8081/calcAdd', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      alert(JSON.stringify(res));
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  render() {
    return (
      <span>
        A: <input type="text" name="a" value={this.state.a} onChange={this.onUbahAyat} /> <br />
        B: <input type="text" name="b" value={this.state.b} onChange={this.onUbahAyat} />
        <button type="button" onClick={this.getDataFromServer}>Calculate Us</button>
        <h3>{this.state.data}</h3>
      </span>
    );
  }
}

export default App;
