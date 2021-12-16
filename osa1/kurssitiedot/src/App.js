import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1> {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part parts={props.parts} number={0} />  
        <Part parts={props.parts} number={1} /> 
        <Part parts={props.parts} number={2} /> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
    return (
      <div>
        <p> {props.parts[props.number].name+" "+ props.parts[props.number].exercises} </p>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />     
    </div>
  )
}

export default App;
