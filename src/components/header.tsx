
interface Header{
    currentScore: number,
    bestScore:number
}

const Header = ({currentScore, bestScore}:Header) => {
    return (
        <header>
            <h1 className="title">Sanrio Memory Game!</h1>
            <div className="score-board">
                <p>Current Score: {currentScore} | Best Score: {bestScore}</p>
            </div>
        </header>
    )
}

export default Header