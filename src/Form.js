import { useState } from 'react'

const MAX_SCORE = 100
const TRIES = 10

function Form({ onSubmit }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState(0)
  const [tries, setTries] = useState(TRIES)

  const resetForm = () => {
    setScore(0)
    setTries(TRIES)
    setName('')
  }

  const updateScore = () => {
    const random = Math.random() * MAX_SCORE * 2
    const score = Math.round(random - MAX_SCORE)

    if (tries === 0) {
      resetForm()
    } else {
      setScore(score)
      setTries(tries - 1)
    }
  }

  const submitScore = (e) => {
    e.preventDefault()

    onSubmit({
      name,
      totalPoints: score,
      clicks: TRIES - tries,
    })
    resetForm()
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onInput={(e) => setName(e.target.value)}
        autoFocus
      />
      <p>Your score is: {score}</p>
      <button type="button" onClick={updateScore}>
        Get a score
      </button>
      <p>You have {tries} tries left, after that your score will reset to 0.</p>
      <button type="submit" onClick={submitScore} className="submit-button">
        Submit score
      </button>
    </form>
  )
}

export default Form
