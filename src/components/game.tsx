import sanrioArray from "../utilities/array"
import Card from "./card"

interface GameArray{
    array: typeof sanrioArray 
    onClick: (clicked:boolean,name:string) => void
}

const Game = ({array, onClick}:GameArray) => {
    return (
        <main>
            {
            array.map((card) => (
                <Card  rgb={card.color} key={card.name} name={card.name} src={card.src} onClick ={() => {onClick(card.clicked, card.name)}}></Card>
            ))
            }
        </main>
     
    )
}

export default Game