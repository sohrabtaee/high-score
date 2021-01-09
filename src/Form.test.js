import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form'

const onSubmit = jest.fn()
describe('Form', () => {
  let name, score, tries, getScore, submit
  beforeEach(() => {
    render(<Form onSubmit={onSubmit} />)
    name = screen.getByTestId('name')
    score = screen.getByTestId('score')
    tries = screen.getByTestId('tries')
    getScore = screen.getByTestId('get-score')
    submit = screen.getByTestId('submit')
  })
  afterEach(() => jest.clearAllMocks())

  it('should show an empty form', () => {
    expect(name).toBeTruthy()
    expect(score).toHaveTextContent('0')
    expect(tries).toHaveTextContent('10')
  })

  it('should reduce tries when user clicks on get score button', () => {
    fireEvent.click(getScore)
    expect(tries).toHaveTextContent('9')
  })

  it('should submit name, score, and clicks', () => {
    const username = 'Sohrab'

    fireEvent.input(name, { target: { value: username } })
    fireEvent.click(getScore)
    fireEvent.click(submit)

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({
      name: username,
      clicks: 1,
      totalPoints: expect.any(Number),
    })
  })
})
