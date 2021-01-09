import { render, screen } from '@testing-library/react'
import LeaderBoard from './LeaderBoard'

it('should sort and render the leader board', () => {
  const leaderBoard = [
    { name: 'Jane Doe', totalPoints: 157, clicks: 5 },
    { name: 'Lily Allen', totalPoints: 234, clicks: 8 },
    { name: 'John Smith', totalPoints: 390, clicks: 10 },
  ]

  render(<LeaderBoard leaderBoard={leaderBoard} />)
  
  const persons = screen.getAllByTestId('person')
  expect(persons[0]).toHaveTextContent('John Smith')
  expect(persons[1]).toHaveTextContent('Lily Allen')
  expect(persons[2]).toHaveTextContent('Jane Doe')
})
