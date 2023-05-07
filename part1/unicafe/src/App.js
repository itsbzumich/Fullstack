import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({label, num}) =>{
  return (
  <tr>
    <td>{label} </td>
    <td>{num}</td>
  </tr>
  )
}

const round = (prop) => Math.round(prop*100)/100;


const Statistics = ({good, bad, neutral}) => {
  const total=good+bad+neutral;
  const average=(good-bad)/total;
  const positive= (100)*(good/total);
  if(total===0){
    return( 
    <div>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>)
  }
  return (
  <div>
    <h1>statistics</h1>
    <table>
      <StatisticLine label="good" num ={good} />
      <StatisticLine label="neutral" num ={neutral} />
      <StatisticLine label="bad" num ={bad} />
      <StatisticLine label="all" num ={total} />
      <StatisticLine label="average" num ={round(average)} />
      <StatisticLine label="positive" num ={round(positive)+" %"} />
    </table>
  </div>
  )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='good'/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
