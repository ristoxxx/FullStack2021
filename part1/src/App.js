import React from "react";

const Heippa = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Heippa {props.name}, oot {props.age} vuotias</p>
      <p>Joten oot varmaan syntynyt {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Hello'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Heippa name={nimi} age={ika}  />
      <Heippa name="Kitty" age={6+5}/>
    </div>
  )
}
export default App;
