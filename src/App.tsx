import { useImmer } from "use-immer"
import sanrioArray from "./utilities/array"
import Game from "./components/game"
import Header from "./components/header"
import { useEffect } from "react"
import shuffleArray from "./utilities/shuffle"
import Modal from "./components/modal"

function App(){
  const [dataArray, updateDataArray] = useImmer(sanrioArray)
  const [currentScore, updateCurrentScore] = useImmer(0)
  const [bestScore, updateBestScore] = useImmer(0)
  const [win, updateWin] = useImmer(false)

  const clickCard = (clicked:boolean, name:string) => {
    if(clicked === false){
      updateCurrentScore(score => score += 1)
      updateBestScore(score => {
        if(score <= currentScore){
          return score = currentScore + 1
        }
      })
      updateDataArray(card => {
        const index = card.findIndex(c => c.name === name )
        card[index].clicked = true
      })
      if((currentScore) === sanrioArray.length - 1){
        updateWin(w => !w)
      }
    }
    if(clicked === true){
      updateCurrentScore(0)
      updateDataArray(card => {
        card.forEach(c => c.clicked = false)
      })
    }
  }

  const resetWin = () => {
    updateWin(w => !w)
    updateCurrentScore(0)
    updateDataArray(card => {
      card.forEach(c => c.clicked = false)
    })
  }

  useEffect(() => {
    updateDataArray(array => shuffleArray(array))
  },[currentScore])

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore}></Header>
      {win ? <Modal onClick={resetWin}/>:null}
      <Game array={dataArray} onClick={clickCard}></Game>
    </div>
  )
}

export default App
