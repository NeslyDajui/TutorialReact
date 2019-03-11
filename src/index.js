
//import Corgi, { eats } from './Corgi';
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

/*
//LET y CONST, fuera var
//this y binding this
var array = [1,2,3];

for(let i = 0; i<array.length; i++){
	var array =[5,6,7];
	console.log(array); 
}


console.log(array);
*/
/*
const person = {
	name: 'Josh',
	tick(){
		console.log(this);
	}
}

person.tick();

const tick = person.tick.bind(person);
tick();

//fat arrow function

const dog = {
	eat(){
		setTimeout(() => console.log(this), 1000);
	}
}

const jump = () => {console.log(this);}

jump();

dog.eat();
*/

/*
let colors = ('blue', 'red', 'green');
let missing_colors = ('orange');

let all_colors = {...colors, ...missing_colors};
console.log(all_colors);

let jingleBells = {
	red: 2,
	blue: 3,
	orange; 5
}

let newJingleBells = {...jingleBells};
newJingleBells.red = 10;

const.log (jingleBells);
const.log(newJingleBells);
*/
/*
class Person{
	constructor(...args){
		this.name = args[0];
		this.lastName = args[1];
		this.age = args[2];
	}

	talk(){
		console.log(this);
		return true
	}
}

let person = new Person('Josh');

//ejecuto el método y el propio método imprime this = class Person
person.talk();

//console.log imprime el resutlado de ejecutar el método: return
console.log(person.talk());


class Student extends Person{
	constructor(name, lastName, age, studentId){
		super(name, lastName, age);
		this.studentId = studentId;
	}
}

//let lulu = new Student('lulu', 'lll', 9, '123');
//console.log(lulu);
//lulu.talk();


let corgi = new Corgi('Thor');
console.log(corgi);

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: null
		}
	}
  render() {
    return (
      <button className="square" onClick={()=> this.props.onClick() 
      }>
        {
        	this.props.value
        }
      </button>
    );
  }
}

class Board extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
      xIsNext: true,
		}
	}
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i){
  	const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
  	squares[i] = this.state.xIsNext ? 'X' : 'O';
  	this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a,c,b] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }

    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O' );
    }
   // const status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);









