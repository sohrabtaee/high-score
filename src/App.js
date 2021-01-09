import { useState } from 'react'
import Form from './Form'
import LeaderBoard from './LeaderBoard'

const DUMMY_RESULT = [
  { name: 'Jane Doe', totalPoints: 157, clicks: 5 },
  { name: 'Lily Allen', totalPoints: 234, clicks: 8 },
  { name: 'John Smith', totalPoints: 390, clicks: 10 },
]

function App() {
  const [leaderBoard, setLeaderBoard] = useState(DUMMY_RESULT)

  const submitScore = (data) => {
    fetch('dummy-url', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        const board = [...leaderBoard, data]
        setLeaderBoard(board)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="app">
      <LeaderBoard leaderBoard={leaderBoard} />
      <Form onSubmit={submitScore} />
    </div>
  )
}

export default App
