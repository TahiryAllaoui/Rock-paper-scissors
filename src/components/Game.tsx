import '../style/Game.scss';

interface moves {
    name: string;
    beat: string;
    lose: string;
}

const Game = () => {
    const hand: moves[] = [{
        name: 'rock',
        beat: 'scissors',
        lose: 'paper'
    }, {
        name: 'paper',
        beat: 'rock',
        lose: 'scissors'
    }, {
        name: 'scissors',
        beat: 'paper',
        lose: 'rock'
    }];

    const npcMove: string[] = ['rock', 'paper', 'scissors'];

    const handleClick = (hand: moves) => {
        let npcIndex: number = Math.floor(Math.random() * 3);
        console.log('You choosed ' + hand.name + ' and the house picked ' + npcMove[npcIndex]);
        if (hand.name == npcMove[npcIndex]) {
            console.log('Draw');
        }
        else if (hand.beat == npcMove[npcIndex]) {
            console.log('You won');
        }
        if (hand.lose == npcMove[npcIndex]) {
            console.log('You lose');
        }

    };

    return (
        <div className="game">
            <div className="top-hand">
                <div className="paper" onClick={() => handleClick(hand[1])}>
                    <div className="inner-paper"></div>
                </div>
                <div className="scissors" onClick={() => handleClick(hand[2])}>
                    <div className="inner-scissors"></div>
                </div>
            </div>
            <div className="bottom-hand">
                <div className="rock" onClick={() => handleClick(hand[0])}>
                    <div className="inner-rock"></div>
                </div>
            </div>
        </div>
    );
};

export default Game;