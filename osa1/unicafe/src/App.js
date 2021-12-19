import React, {useState} from "react";

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
    calculateAverage()
    calculatePercent()
  }

  const handleNeutralClick = () => {
    setAll(all +1)
    setNeutral(neutral + 1)
    calculateAverage()
    calculatePercent()
  }

  const handleHyvaClick = () => {
    setAll(all + 1)
    setHyva(hyva + 1)
    setPoints(points + 1)
    calculateAverage()
    calculatePercent()
  }
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const calculateAverage = () => {
    setAverage(points/all)
  }

  const calculatePercent = () => {
    setPercent(hyva/all*100)
  }

  
  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
  
        <Button handleClick={handleHyvaClick} text='hyva' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleHuonoClick} text='huono' />
        <Button handleClick={calculateAverage, calculatePercent} text='calculate' />

        <h1>Tilasto</h1>

        <p>Hyvä {hyva}</p>
        <p>Neutraali {neutral}</p>
        <p>Huono {huono}</p>
        <p>Kaikki {all}</p>
        <p>Keskiarvo {average}</p>
        <p>pisteet {points}</p>
        <p>Positiivisia {percent} %</p>
        
      </div>
    </div>
  )
}

export default App;
