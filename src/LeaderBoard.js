function LeaderBoard({ leaderBoard }) {
  const sortedBoard = leaderBoard.map((person) => ({
    ...person,
    averagePoints: Math.round(person.totalPoints / person.clicks),
  }))
  sortedBoard.sort((a, b) => {
    return b.totalPoints - a.totalPoints
  })

  return (
    <table className="leader-board">
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Score</th>
          <th>Tries</th>
          <th>Average Score</th>
        </tr>
      </thead>
      <tbody>
        {sortedBoard.map((person, i) => (
          <tr key={i} data-testid="person">
            <td>{person.name}</td>
            <td>{person.totalPoints}</td>
            <td>{person.clicks}</td>
            <td>{person.averagePoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LeaderBoard
