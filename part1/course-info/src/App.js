const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Part = (props) => {
  return <p>{props.name} {props.num}</p>
}

const Content = (props) => {
  return( <div>
  <Part name={props.data[0].name} num={props.data[0].num} />
  <Part name={props.data[1].name} num={props.data[1].num} />
  <Part name={props.data[2].name} num={props.data[2].num} />
  </div>
  )
}

const Total = (props) => {
  return (<><p>Number of exercises{" "} {props.data[0].num + props.data[1].num + props.data[2].num}</p></>)
}

const App = () => {
  const data = {
    title: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', num: 10,},
      {name: 'Using props to pass data', num: 7,},
      {name: 'State of a component', num: 14,}
    ]
  };
  return (
    <div>
      <Header course={data.title} />
      <Content data={data.parts} />
      <Total data={data.parts} />
    </div>
  )
}

export default App;
