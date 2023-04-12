import React, { useState } from 'react';

function Game() {

    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const [result, setResult] = useState("")

    // const playGame = (event) => {
    //     event.preventDefault()
    //     if (player1 === player2) {
    //         setResult("Draw!")
    //     } else if (player1 == "rock" && player2 == "scissors") {
    //         setResult("P1 wins")
    //     } else if (player1 == "scissors" && player2 == "paper") {
    //         setResult("P1 wins")
    //     } else if (player1 == "paper" && player2 == "rock") {
    //         setResult("P1 wins")
    //     } else {
    //         setResult("P2 wins")
    //     }
    // }

    const rules = {
        rock: { beats: "scissors", message: "P1 wins" },
        paper: { beats: "rock", message: "P1 wins" },
        scissors: { beats: "paper", message: "P1 wins" }
      };
      
      const playGame = (event) => {
        event.preventDefault();
        if (player1 === player2) {
          setResult("Draw!");
        } else if (rules[player1].beats === player2) {
          setResult(rules[player1].message);
        } else {
          setResult("P2 wins");
        }
      };


    return(
        <div className='game-container'>
            <form onSubmit={playGame}>
                    <p>Player 1</p>
                    <select
                        name="player1choice"
                        value={player1}
                        onChange={e => setPlayer1(e.currentTarget.value)}
                    >
                        <option value="" selected disabled hidden>Choose</option>
                        <option key="rock" value="rock">Rock</option>
                        <option key="paper" value="paper">Paper</option>
                        <option key="scissors" value="scissors">Scissors</option>
                    </select>

                <p>Player 2</p>
                    <select
                        name="player2choice"
                        value={player2}
                        onChange={e => setPlayer2(e.currentTarget.value)}
                    >
                        <option value="" selected disabled hidden>Choose</option>
                        <option key="rock" value="rock">Rock</option>
                        <option key="paper" value="paper">Paper</option>
                        <option key="scissors" value="scissors">Scissors</option>
                    </select>
                    <br></br>
                <button>Play!</button>
            </form>

            {result && <div>{result}</div>}
        </div>
    )
}

export default Game;