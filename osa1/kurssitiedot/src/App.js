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
        <Part part={props.part1} />
        <Part part={props.part2} />
        <Part part={props.part3} />    
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const Part = (props) => {
    return (
      <div>
        <p> {props.part} </p>
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
      <Content  part1={parts[0].name+" "+ parts[0].exercises} part2={parts[1].name+ " "+ parts[1].exercises} part3={parts[2].name+" "+parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App;
