import '../style/Score.scss';


const Score = () => {
    localStorage.clear();
    return (
        <div className="score-board">
            <h1>ROCK <br />PAPER <br />SCISSORS</h1>
            <div className="score">
                <h2>SCORE</h2>
                <p>12</p>
            </div>
        </div>
    );
};

export default Score;

