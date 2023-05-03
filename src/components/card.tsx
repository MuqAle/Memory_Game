import '../css/card.css'

interface Card{
    name:string,
    src:string,
    rgb:string,
    onClick: () => void
}

const Card = ({name,src,rgb,onClick}:Card) => {
    return(
        <div className="card" onClick={onClick}>
            <img style={{border:`5px dashed ${rgb}`}} src={src}/>
            <h3 style ={{color:rgb}}>{name}</h3>
        </div>
    )
}

export default Card