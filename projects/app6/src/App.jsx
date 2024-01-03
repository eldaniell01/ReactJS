import { Square } from "./Square"
import { useState } from "react"
import { Board } from "./Board"
export function App(){
    
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentmove, setCurrentmove] = useState(0)
    const next = currentmove%2===0
    const currentSquares = history[currentmove]
    function handlePlay(nextSquares){
        const nexthistory = ([...history.slice(0, currentmove+1), nextSquares])
        setHistory(nexthistory)
        setCurrentmove(nexthistory.length-1)
    }
    function jumpTo(nextMove){
        setCurrentmove(nextMove)
    }
    const moves = history.map((squares, move)=>{
        let description
        if(move>0){
            description='go to move # '+move
        }else{
            description = 'go to game start'
        }
        return(
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return(
        <div className="game">
            <div className="game-board">
                <Board next={next} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

