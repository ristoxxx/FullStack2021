import React from "react";

const Heippa = ({name, age}) => {
  
  const bornYear = () =>  new Date().getFullYear() - age


  return (
    <div>
      <p>Heippa {name}, oot {age} vuotias</p>
      <p>Joten oot varmaan syntynyt {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Hello'
  const ika = 20

  return (
    <div>
      <h1>Greetings</h1>
      <Heippa name={nimi} age={ika}  />
      <Heippa name="Kitty" age={6+5}/>
    </div>
  )
}
export default App;
