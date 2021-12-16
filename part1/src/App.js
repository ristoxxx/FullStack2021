import React from "react";

const Heippa = (props) => {
  return (
    <div>
      <p>Heippa {props.nimi}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Heippa nimi="s3Xy" />
      <Heippa nimi="Kitty" />
    </div>
  )
}
export default App;
