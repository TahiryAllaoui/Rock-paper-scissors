import { useEffect, useState } from 'react';
import '../style/Game.scss';
import triangle from '../assets/images/bg-triangle.svg';
import rockIcon from '../assets/images/icon-rock.svg';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';

interface moves {
    name: string;
    beat: string;
    lose: string;
    icon: string;
    bg: string;
    borderBottom: string;
}

const Game = () => {
    const hand: moves[] = [{
        name: 'rock',
        beat: 'scissors',
        lose: 'paper',
        icon: rockIcon,
        bg: 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        borderBottom: 'hsl(349, 80%, 46%) 10px solid'
    }, {
        name: 'paper',
        beat: 'rock',
        lose: 'scissors',
        icon: paperIcon,
        bg: 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        borderBottom: 'rgba(0, 0, 255, 0.5) 10px solid'
    }, {
        name: 'scissors',
        beat: 'paper',
        lose: 'rock',
        icon: scissorsIcon,
        bg: 'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        borderBottom: 'rgba(187, 121, 0, 1) 10px solid'
    }];


    //User's hand choice
    const [usersMove, setUsersMove] = useState<moves>({
        name: '',
        beat: '',
        lose: '',
        icon: '',
        bg: '',
        borderBottom: ''
    });

    //NPC's hand choice
    const [npcsMove, setNpcsMove] = useState<moves>({
        name: '',
        beat: '',
        lose: '',
        icon: '',
        bg: '',
        borderBottom: ''
    });

    //Continue
    const [again, setAgain] = useState(true);

    //Summary text (Win, lose, or draw)
    const [text, setText] = useState('');

    //Win or lose
    const [userWins, setUserWins] = useState(false);
    const [npcWins, setNpcWins] = useState(false);

    const handleClick = (item: moves) => {
        let npcIndex: number = Math.floor(Math.random() * 3);
        setAgain(!again);
        setUsersMove(item);
        setNpcsMove(hand[npcIndex]);
    };

    const handleLost = () => {
        setAgain(!again);
        setNpcWins(false);
        setUserWins(false);
    };

    useEffect(() => {
        if (usersMove.name == npcsMove.name) {
            setText('Draw');
            setNpcWins(false);
            setUserWins(false);
        }
        else if (usersMove.beat == npcsMove.name) {
            setText('You won');
            setNpcWins(false);
            setUserWins(true);
        }
        if (usersMove.lose == npcsMove.name) {
            setText('You lost');
            setNpcWins(true);
            setUserWins(false);
        }
    }, [npcsMove])


    return (
        <div className="game" style={{ backgroundImage: again ? `url(${triangle})` : 'none' }}>
            {again ? <div className="hand-selection">
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
            </div> :
                <div className="summary">
                    <div className="user">
                        You picked
                        <div className='outer-layer' style={{ backgroundColor: userWins ? 'rgba(255, 255, 255, 0.05)' : 'none' }}>
                            <div className='middle-layer' style={{ backgroundColor: userWins ? 'rgba(255, 255, 255, 0.1)' : 'none' }}>
                                <div className='inner-layer' style={{ backgroundColor: userWins ? 'rgba(255, 255, 255, 0.15)' : 'none' }}>
                                    <div className="hand" style={{ background: `${usersMove.bg}`, borderBottom: `${usersMove.borderBottom}` }}>
                                        <div className="inner-hand" style={{ backgroundImage: `url(${usersMove.icon})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>{text}</h2>
                        <div className="my-button" onClick={handleLost}>PLAY AGAIN</div>
                    </div>
                    <div className="npc">
                        the house picked
                        <div className='outer-layer' style={{ backgroundColor: npcWins ? 'rgba(255, 255, 255, 0.05)' : 'none' }}>
                            <div className='middle-layer' style={{ backgroundColor: npcWins ? 'rgba(255, 255, 255, 0.1)' : 'none' }}>
                                <div className='inner-layer' style={{ backgroundColor: npcWins ? 'rgba(255, 255, 255, 0.15)' : 'none' }}>
                                    <div className="hand" style={{ background: `${npcsMove.bg}`, borderBottom: `${npcsMove.borderBottom}` }}>
                                        <div className="inner-hand" style={{ backgroundImage: `url(${npcsMove.icon})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Game;