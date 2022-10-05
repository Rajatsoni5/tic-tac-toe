import React, {useState} from "react";
import "./Tictactoe.module.css";

function Tictactoe() {

const [board, setBoard] = useState(Array(9).fill(""))
const [move, setMove] = useState("X")

const click = (n) => {
  
  let square = [...board]
  if(board[n] !== " "){
    alert("Sorry! Choose another position.")
    return
  }
  square[n] = move;
  setBoard(square)
  
  if(move === "X"){
    setMove("O")
  }else{
    setMove("X")
  }

  const win = () => {
    
  }
}
  return (
    <>
      <h1 className="text-center">Tic tac toe</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={() =>{click(0)}}>{board[0]}</td>
            <td onClick={() =>{click(1)}}>{board[1]}</td>
            <td onClick={() =>{click(2)}}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() =>{click(3)}}>{board[3]}</td>
            <td onClick={() =>{click(4)}}>{board[4]}</td>
            <td onClick={() =>{click(5)}}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() =>{click(6)}}>{board[6]}</td>
            <td onClick={() =>{click(7)}}>{board[7]}</td>
            <td onClick={() =>{click(8)}}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Tictactoe;
