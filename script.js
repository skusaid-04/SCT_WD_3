let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

document.getElementById("board").addEventListener("click", handleSquareClick);
updateBoard();
updatePlayerHighlight();

function handleSquareClick(event) {
  const index = Array.from(event.target.parentNode.children).indexOf(event.target);
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    updateBoard();
    if (checkWin()) {
      document.getElementById("message").innerText = `${currentPlayer} Wins! 🎉`;
      document.getElementById(`player${currentPlayer}`).classList.add("winner");
      gameActive = false;
      setTimeout(resetGame, 3000); // Reset the game after 3 seconds
    } else if (!board.includes('')) {
      document.getElementById("message").innerText = 'It\'s a Draw!';
      gameActive = false;
      setTimeout(resetGame, 3000); // Reset the game after 3 seconds
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updatePlayerHighlight();
      document.getElementById("message").innerText = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function updateBoard() {
  document.getElementById("board").innerHTML = board.map((cell, index) =>
    `<div class="square" onclick="handleSquareClickFromSquare(${index})">${cell}</div>`
  ).join('');
}

function updatePlayerHighlight() {
  document.getElementById("playerX").classList.toggle("active", currentPlayer === 'X');
  document.getElementById("playerO").classList.toggle("active", currentPlayer === 'O');
}

function checkWin() {
  return winningConditions.some(condition =>
    condition.every(index => board[index] === currentPlayer));
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  updateBoard();
  updatePlayerHighlight();
  document.getElementById("message").innerText = "Player X's Turn";
  document.getElementById("playerX").classList.remove("winner");
  document.getElementById("playerO").classList.remove("winner");
}

function handleSquareClickFromSquare(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    updateBoard();
    if (checkWin()) {
      document.getElementById("message").innerText = `${currentPlayer} Wins! 🎉`;
      document.getElementById(`player${currentPlayer}`).classList.add("winner");
      gameActive = false;
      setTimeout(resetGame, 3000); // Reset the game after 3 seconds
    } else if (!board.includes('')) {
      document.getElementById("message").innerText = 'It\'s a Draw!';
      gameActive = false;
      setTimeout(resetGame, 3000); // Reset the game after 3 seconds
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updatePlayerHighlight();
      document.getElementById("message").innerText = `Player ${currentPlayer}'s Turn`;
    }
  }
}
