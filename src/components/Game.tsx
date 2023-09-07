import '../style/Game.scss';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
import rock from '../assets/images/icon-rock.svg'


const Game = () => {
    return (
        <div className="game">
            <div className="top-hand">
                <div className="paper"></div>
                <div className="scissors"></div>
            </div>
            <div className="bottom-hand">
                <div className="rock"></div>
            </div>
        </div>
    );
};

export default Game;