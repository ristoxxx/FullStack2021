import React, {useState} from "react";

const Statistics = ({hyva, neutral, huono, all, average, percent}) => {
  if (all === 0) {
    return (
      <div>
        <h1>Tilasto</h1>
        <p>Ei palautetta annettu</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Tilasto</h1>
      <table>
        <tbody>
          <StatisticLine text="Hyva" value={hyva} />
          <StatisticLine text="Neutraali" value={neutral} />
          <StatisticLine text="Huono" value={huono} />
          <StatisticLine text="Kaikki" value={all} />
          <StatisticLine text="Keskiarvo" value={average.toFixed(1)} />
          <StatisticLine text="Positiivisia" value={percent.toFixed(1) + " %"} /> 
        </tbody>
      </table>  
  </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)
}

const App = () => {
  const [huono, setHuono] = useState(0)
  const [hyva, setHyva] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [points, setPoints] = useState(0)
  const [percent, setPercent] = useState(0)

  const handleHuonoClick = () => {
    setAll(all + 1)
    setHuono(huono + 1)
    setPoints(points - 1)
    calculateAll()
  }

  const handleNeutralClick = () => {
    setAll(all +1)
    setNeutral(neutral + 1)
    calculateAll()
  }

  const handleHyvaClick = () => {
    setAll(all + 1)
    setHyva(hyva + 1)
    setPoints(points + 1)
    calculateAll()
  }
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const calculateAll = () => {
    setAverage(points/all)
    setPercent(hyva/all*100)
  }

  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
  
        <Button handleClick={handleHyvaClick} text='hyva' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleHuonoClick} text='huono' />
        <Button handleClick={calculateAll} text='calculate' />
        <Statistics 
          hyva={hyva} 
          neutral={neutral} 
          huono={huono} 
          all={all} 
          average={average}
          percent={percent}/>
      </div>
    </div>
  )
}

export default App;