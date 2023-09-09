import { useContext } from 'react';
import '../style/Score.scss';
import ScoreContext from '../contexts/Score';


const Score = () => {
    const score = useContext(ScoreContext).score;
    return (
        <div className="score-board">
            <h1>ROCK <br />PAPER <br />SCISSORS</h1>
            <div className="score">
                <h2>SCORE</h2>
                <p>{score}</p>
            </div>
        </div>
    );
};

export default Score;

