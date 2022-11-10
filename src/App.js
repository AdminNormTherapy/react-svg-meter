import React, { Component } from 'react';
import './App.css';
import Meter from './Meter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r1: .7,
      r2: .3,
      r3: .5
    };
  }
  componentDidMount() {
    this.animatedMeter = setInterval(
      () => this.animate(),
      367
    );
  }
  componentWillUnmount() {
    clearInterval(this.animatedMeter);
  }
  animate(){
    this.setState({
      r1: Math.random(),
      r2: Math.random(),
      r3: Math.random()
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">Main Output Display</div>
        <div className="group">
          <div className="title">Word Deviation and Coherence</div>
          <div className="meter"><Meter percent={.2} color={#FFEB3B} rounded={false}/></div>
          <div className="meter"><Meter percent={.6} color={#FFEB3B} rounded={false}/></div>
        </div>
        <div className="group">
          <div className="title">Face Vector Deviation and Coherence</div>
          <div className="meter"><Meter percent={this.state.r1} color={#FFEB3B} animate={true} rounded={false}/></div>
          <div className="meter"><Meter percent={this.state.r2} color={#FFEB3B} animate={true}/></div>
        </div>
        <div className="group">
          <div className="title">Spectrum Sample R and L</div>
          <div className="meter"><Meter percent={.4} color={'#FFEB3B'} rounded={false}/></div>
          <div className="meter"><Meter percent={.9} color={'#FFEB3B'}/></div>
        </div>
        <div className="group">
          <div className="title">Overall Deviation</div>
          <div className="meter"><Meter percent={this.state.r3*this.state.r1} color={#FFEB3B} animate={true} width={250} height={17} rounded={false}/></div>
          <div className="meter"><Meter percent={this.state.r3*this.state.r2} color={#FFEB3B} animate={true}  width={250} height={17} /></div>
        </div>
      </div>
    );
  }
}

export default App;
