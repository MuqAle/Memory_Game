interface Card{
    name:string,
    src:string,
    onClick: () => void
}

const Card = ({name,src,onClick}:Card) => {
    return(
        <div className="card" onClick={onClick}>
            <img src={src} width={200} height={200}/>
            <h3>{name}</h3>
        </div>
    )
}

export default Card