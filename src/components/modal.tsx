
interface Modal{
    onClick: () => void
}

const Modal = ({onClick}:Modal) => {
    return(
        <div>
            <p>You Win!</p>
            <button onClick={onClick}>Play Again</button>
        </div>
    )
}

export default Modal