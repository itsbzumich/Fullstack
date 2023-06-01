import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personservice from './services/personservice'
import Notification from './components/notification'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


useEffect(()=>{
  personservice.getAll()
.then(people => {setPersons(people)})},[]
)

const AddContact = (event) =>{
  event.preventDefault()
  const newperson = {name : newName, number: newNumber}
  let pers=persons.find(person => person.name===newName)
  if(pers===undefined){
    personservice.create(newperson)
    .then(person => {
      setPersons(persons.concat(person))
      setNewName('')
      setNumber('')  
      setErrorMessage(
        `Added ${person.name}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    .catch(error => {
      // this is the way to access the error message
      setErrorMessage(
        error.response.data.error
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }
  else{
    if(window.confirm(newName+' is already added to the phonebook, replace the old number with a new one?')){
      personservice.update(pers.id,newperson)
      .then(person => {
        setPersons(persons.map(person=>person.id===pers.id ?newperson :person))
        setNewName('')
        setNumber('')  
        setErrorMessage(
          `Changed number of ${person.name}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch(error=>{
        setErrorMessage(
          `Information of ${newName} has already been removed from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)  
      })
  }
  
  }
}

const DeleteContact = (id, name) =>{
  console.log(persons)
  if(window.confirm('Delete '+name+'?')){
    personservice.remove(id)
    .then(response => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
    })
}
}


const handlenamechange = (event) =>{
  setNewName(event.target.value)
}

const handlenumberchange = (event) =>{
  setNumber(event.target.value)
}

const handlefilterchange = (event) =>{
  setFilter(event.target.value)
}

const peopletoShow = (filter==='')
  ? persons
  : persons.filter(person => person.name.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter={filter} onchange={handlefilterchange}/>
      <h3>add a new</h3>
      <PersonForm AddContact={AddContact} newName={newName} handlenamechange={handlenamechange} newNumber={newNumber} handlenumberchange={handlenumberchange}/>
      <h3>Numbers</h3>
      <Persons people={peopletoShow} onClick={DeleteContact}/>
    </div>
  )
}

export default App
