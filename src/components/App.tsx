import '../style/App.scss'
import Game from './Game'
import Rules from './Rules'
import Score from './Score'

function App() {

  return (
    <div className='app'>
      <Score />
      <Game />
      <Rules />
    </div>
  )
}

export default App
