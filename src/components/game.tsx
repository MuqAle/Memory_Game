import sanrioArray from "../utilities/array"
import Card from "./card"

interface GameArray{
    sanrioArray: typeof sanrioArray 
    onClick: (clicked:boolean) => void
}

const Game = ({sanrioArray, onClick}:GameArray) => {
    return (
        sanrioArray.map((sanrio) => (
            <Card name={sanrio.name} src={sanrio.src} onClick ={() => {onClick(sanrio.clicked)}}></Card>
        ))
    )
}

export default Game