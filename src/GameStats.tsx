import React from 'react';

interface GameStatsProps {
    time: number;
    points: number;
}

const GameStats = (props: GameStatsProps) => {
    return(
        <div className="GameStats">
            <span className="Time">time: {props.time} sec</span>
            <span className="Points">{props.points} points</span>
        </div>
    );
}

export default GameStats;