import { Square } from "./Square"
import { useState } from "react"
export function Board({next, squares, onPlay}){
    
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice()
        if(next){
            nextSquares[i] ='X'
        }
        else{
            nextSquares[i]='O'
        }
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares)
    let status
    if(winner){
        status = 'winner: '+winner
    }else{
        status = 'next: '+(next?'X':'0')
    }
    return(
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareCLick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareCLick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareCLick={()=>handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareCLick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareCLick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareCLick={()=>handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareCLick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareCLick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareCLick={()=>handleClick(8)}/>
            </div>
        </>
    )
}

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i=0;i<lines.length;i++){
        const[a, b, c]=lines[i]
        if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
            return squares[a]
        }
    }
    return null;
}