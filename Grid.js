import React, {Component} from 'react';
import AppCSS from './App.css';

const color = '#e6add8';
const blackStyle={
	border: 'black 1px solid',
	backgroundColor: color,
	height: '15px',
};

const whiteStyle={
	border: 'black 1px solid',
	backgroundColor: 'white',
	width: '15px',
	height: '15px',

};
const width = 44;
const height = 32;

let board = [];

		for( let i = 0; i < height; i++){
			let temp = [];
			for( let j = 0; j < width; j++){
					let val = Math.floor(Math.random() * 2);
					temp.push(val);
			}
			board.push(temp);

		}

let tboard = [];

for( let i = 0; i < height; i++){
			let temp = [];
			for( let j = 0; j < width; j++){
					temp.push(0);
			}
			tboard.push(temp);

		}


class Grid extends Component{

	constructor(props){
		super();
		this.state = {generation: 0};

	}

	componentDidMount = ()=>{
		this.timer = setInterval(this.playGame, 100);
	}
	componentWillUnMount = () =>{
		clearInterval(this.timer);
	}

	start = () =>{
		this.timer = setInterval(this.playGame,100);
	}
	pause = () =>{
		clearInterval(this.timer);
	}
	clear = () =>{
		for( let i = 0; i <height; i++){
			for( let j = 0; j <width; j++){
					
					board[i][j] = 0;
			}
			

		}
		this.setState({generation: 0});
	}
	handleClick(event,i,j){
		
		if(event.target.style.backgroundColor === color){
			event.target.style.backgroundColor = 'white';
			board[i][j] = 0;


		}
		
		else{
			event.target.style.backgroundColor = color;
			
			board[i][j] = 1;
		}

	}

	score =(i,j)=> {
		let sum = 0;
		let n = i - 1, m;
		if( i === 0 )
			 n = ((i - 1) + (height - 1)) % height + 1;
		
		
		
		for( var icount = 0 ; icount < 3 ; icount++){

			m = j - 1;
			if( j === 0)
			 m = ((j - 1) + (width - 1)) % width + 1;
			for( var jcount = 0; jcount < 3 ; jcount++){
				if(n !== i || m !== j){
					
					//alert(i + " " + j+ " = " + n + " " + m);
					
				//	console.log("this is board[n][m] " + n + ' : '+ m + " = " + board[n][m]);
					sum += board[n][m];
				}
				
				 m = (m + 1) % width;
			}
			
			/*if( i >= height - 1)
				alert(i + " " + j+ " = " + n + " " + m + " => " +
						board[n][j-1] + " + " + board[n][j] + " + " + board[n][j + 1] + " = "  + sum);
						*/
			n = (n + 1) % height;
			
		}
		
		//alert( i + " : " + j + " = " + sum);
		if(sum < 2){
			
			return 0;
		}
		else if(sum > 3){
		
			return 0;
		}
		
		else if(board[i][j] === 0 && sum === 3){
			
			return 1;
		}
		else if(board[i][j] === 0 && sum === 2){
			
			return 0;
		}
		else
			return 1;

		/*if( board[i][j] === 0)
			return 0;
		else
			return 1;*/


	}

	

	playGame = () =>{
		var table = document.getElementById('mytable');
		//table.rows[i].cells[j].style.backgroundColor = 'white';

		for( let i = 0; i < height ; i++){

			for( let j = 0; j <width ; j++ ){
					//alert("testing out : " + i + " : " + j + " = "+this.score(i,j))
					if( this.score(i,j) === 1){
						tboard[i][j] = 1;
						//alert("board "+ j + ": " + board[i][j] + " tboard : " + tboard[i][j]);
						//table.rows[i].cells[j].style.backgroundColor = 'pink';
		}
		else{
						tboard[i][j] = 0;
						//alert("board "+ j + ": " + board[i][j] + " tboard : " + tboard[i][j]);
						//table.rows[i].cells[j].style.backgroundColor = 'white';
		}

			}
		}// end for

		

		//board = Array.from(tboard);

		
		for( let i = 0; i < height ; i++)
			for(let j = 0; j < width ; j++){
				board[i][j] = tboard[i][j];
				if( tboard[i][j] === 1)
					table.rows[i].cells[j].style.backgroundColor = color;
				else
					table.rows[i].cells[j].style.backgroundColor = 'white';
			}

		
		this.setState({generation: this.state.generation + 1});

		//alert("pause to look");
	   
	}// end playGame


	render(){

		



		return(
			<div>
			<table id='mytable'>
				<tbody>
				{
					board.map((arr,i)=>
						<tr key={i}>{
							 arr.map((vals,j)=>
							 	<td key={j}style={ vals  === 0 ? whiteStyle : blackStyle}
							 	    onClick={(event)=>this.handleClick(event,i,j)}>{}</td>
							 	)
							}</tr>

				)
				}
				
				</tbody>
			</table>
			<button onClick={(event) => this.pause(event)}>pause</button>
			<button onClick={(event) => this.start(event)}>start</button>
			<button onClick={(event) => this.clear(event)}>clear</button>
			Generation:{this.state.generation}
			</div>
		)


	}


}


export default Grid;