import React, {useState} from "react";

const App = () => {
  const [huono, setHuono] = useState(0)
  const [hyva, setHyva] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleHuonoClick = () => {
    setAll(allClicks.concat('L'))
    setHuono(huono + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleHyvaClick = () => {
    setAll(allClicks.concat('R'))
    setHyva(hyva + 1)
  }
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  
  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
        
        
        <Button handleClick={handleHyvaClick} text='hyva' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleHuonoClick} text='huono' />
        
    

        <h1>Tilasto</h1>
        <p>Hyvä {hyva}</p>
        <p>Neutraali {neutral}</p>
        <p>Huono {huono}</p>
        
      </div>
    </div>
  )
}

export default App;
