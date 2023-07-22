import React, { useState } from 'react';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
      <button
        style={{
          width: '100px',
          height: '100px',
          fontSize: '36px',
          backgroundColor: '#f0f0f0',
          border: '2px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = "It's a Draw!";
  } else {
    status = `Next Player : ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '60px',
        
      }}
    >
      <div style={{ fontSize: '24px', marginBottom: '30px', color: '#4caf50'  }}>{status}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          gap: '5px',
        }}
      >
        {board.map((value, index) => (
          <div key={index} style={{ width: '100px', height: '100px' }}>
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: '40px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default TicTacToeGame;
