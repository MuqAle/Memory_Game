import '../css/modal.css'

interface Modal{
    onClick: () => void
}

const Modal = ({onClick}:Modal) => {
    return(
            <div className="modal">
                <div className="modal-content">
                    <p>You Win!</p>
                    <button onClick={onClick}>Play Again</button>
                </div>
            </div>
    )
}

export default Modal