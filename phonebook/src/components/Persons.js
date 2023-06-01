const Persons = ({ people ,onClick}) => {
    return (
        people.map(person => <div key={person.name}>{person.name} {person.number} <button type="submit" onClick={()=>onClick(person.id,person.name)}>delete</button>
        </div>)
    )
  }
  
  export default Persons
  