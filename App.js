import React, { Component } from 'react';
import Grid from './Grid';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems : 'center',
};
const titleStyle = {
  backgroundColor : '#add8e6',
  width: '100%',
  height: '10vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Diplomata SC', cursive",
  fontSize: '5vh',
};
class App extends Component{
  constructor(props){
    super();
  }

  render(){

    return(
      <div style={containerStyle}>
      <div style={titleStyle}><div>Conway's Game of Life</div></div>
        <div>
           <Grid />
        </div>
      </div>

    );
  }



}


export default App;
