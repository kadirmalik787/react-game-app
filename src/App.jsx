import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [xScore,setXScore]= useState(0)
  const [oScore,setOScore]= useState(0)
  const [tie,setTie]= useState(0)

  const [gameOver,setGameOver]=useState(false)

  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (upDateValue) => {
    for (let i=0; i < WIN_CONDITION.length; i++) {
      let [x, y, z] = WIN_CONDITION[i];
      if (
        upDateValue[x] &&
        upDateValue[x] === upDateValue[y] &&
        upDateValue[z] === upDateValue[z]&&
        upDateValue[z]===upDateValue[x]
      ) {
        console.log("winner ");
        return upDateValue[x];
      }
    }
  };

  const reset=()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  } 
  const restartGame=()=>{

    setGameOver(false)
    setBoard(Array(9).fill(null));
    setOScore(0)
    setXScore(0)
    setTie(0)
      
  }

  const updateboxApp = (boxId) => {
    const upDateValue = board.map((value, id) => {
      if (id === boxId) {
        return xIsPlaying===true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(upDateValue);
    setXIsPlaying(!xIsPlaying);
    const winner=  checkWinner(upDateValue);
    if(winner){
    if(winner==='X'){
      setXScore(xScore+1);
      setGameOver(true)
    }else{
      setOScore(oScore+1)
      setGameOver(true)
    }}
    let filled = true
    upDateValue.map((item)=>{
      if(item===null){
        filled=false

      }
    })
    if(filled && winner !== 'X'&& winner!=='O'){
      setTie(tie+1)
    }
  };
  

  return (
    <> 
    <div className="App">
    <ScoreBoard oScore={oScore} xScore={xScore} tie={tie} playing={xIsPlaying} />
      <Board board={board} onCLick={ gameOver===true?reset: updateboxApp} />
     
      <button className="btn" onClick={reset}>Try Again</button>

      <button className="btn" onClick={restartGame}>Restart Game</button>
      </div>
    </> 

  );
}

export default App;
