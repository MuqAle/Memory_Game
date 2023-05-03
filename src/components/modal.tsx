
interface Modal{
    onClick: () => void
}

const Modal = ({onClick}:Modal) => {
    return(
        <div className="overlay">
            <div className="modal">
                <p>You Win!</p>
                <button onClick={onClick}>Play Again</button>
            </div>
        </div>
    )
}

export default Modal