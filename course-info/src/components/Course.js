const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Course =(props) =>{
    const {course} = props
    return(
  <div>
      <Header course={course.name}/>
      {course.parts.map(part=> <Part part={part}/>)}
      <div><b>total of {course.parts.reduce(function(sum,part){return sum+part.exercises},0)} exercises</b></div>
  </div>
    )
  }

export default Course