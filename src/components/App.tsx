import '../style/App.scss'
import Game from './Game'
import Score from './Score'

function App() {

  return (
    <div className='app'>
      <Score />
      <Game />
    </div>
  )
}

export default App
