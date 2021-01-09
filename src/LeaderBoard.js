function LeaderBoard({ leaderBoard }) {
  const sortedBoard = [...leaderBoard]
  sortedBoard.sort((a, b) => {
    return b.totalPoints - a.totalPoints
  })

  return (
    <table className="leader-board">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Tries</th>
        </tr>
      </thead>
      <tbody>
        {sortedBoard.map((person, i) => (
          <tr key={i}>
            <td>{person.name}</td>
            <td>{person.totalPoints}</td>
            <td>{person.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LeaderBoard
