import '../style/Game.scss';

const Game = () => {
    return (
        <div className="game">
            <div className="top-hand">
                <div className="paper">
                    <div className="inner-paper"></div>
                </div>
                <div className="scissors">
                    <div className="inner-scissors"></div>
                </div>
            </div>
            <div className="bottom-hand">
                <div className="rock">
                    <div className="inner-rock"></div>
                </div>
            </div>
        </div>
    );
};

export default Game;