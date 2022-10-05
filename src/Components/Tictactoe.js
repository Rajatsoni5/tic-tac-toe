import React, {useState} from "react";
import "./Tictactoe.module.css";

function Tictactoe() {

  const [board, setBoard] = useState(Array(10).fill(""))
  return (
    <>
      <h1 className="text-center">Tic tac toe</h1>
      <table>
        <tbody>
          <tr>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
          </tr>
          <tr>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
          </tr>
          <tr>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
            <td>{board[0]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Tictactoe;
