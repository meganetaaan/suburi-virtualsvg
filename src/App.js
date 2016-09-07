import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const elems = require('./data.json');
/*
const svgElem = React.propTypes.shape({
  id: React.propTypes.number,
  pos: React.propTypes.shape({
    top: React.propTypes.number,
    left: React.propTypes.number
  }),
  size: React.propTypes.shape({
    width: React.propTypes.number,
    height: React.propTypes.number
  })
});
*/

class SvgContainer extends Component {
  /*
  static get propTypes() {
    return {
      svgElems: React.propTypes.arrayOf(svgElem)
    };
  }
  */
  render() {
    return (
      <svg style={{ width: '10000px', height: '500px', overFlow: 'auto'}} className="svg-container">
      {this.props.svgElems.filter((svgElem) => {
        return svgElem.pos.x > this.props.offset && svgElem.pos.x < this.props.offset + 400;
      }).map( (svgElem) => {
        return (
          <SvgElem key={svgElem.id} position={svgElem.pos} size={svgElem.size} color={svgElem.color}/>
        )
      })}
      </svg>
    )
  }
}

class SvgElem extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <rect
      x={this.props.position.x}
      y={this.props.position.y}
      width={this.props.size.width}
      height={this.props.size.height}
      fill={this.props.color}
      />
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { offset: 0 };
  }
  handleChange(event) {
    this.setState({
      offset: Number(event.target.value)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <div style={{position: 'absolute', width: '100%', margin: 0, padding: 0, overflow: 'auto'}}>
      <SvgContainer offset={this.state.offset} svgElems={elems} />
      </div>
          <input 
      type="range"
      style={{
        position: 'relative',
        width: '100%',
        margin: 0,
        padding: 0
      }}
      min="0" max="1200" 
      value={this.state.offset} 
      onChange={this.handleChange.bind(this)}
      step="10"/>
      </div>
    );
  }
}

export default App;
