const PersonForm = ({AddContact,newName, handlenamechange,newNumber,handlenumberchange}) => {
    return (
        <form onSubmit={AddContact}>
        <div>
          name: <input value={newName} onChange={handlenamechange}/>
          <div>number: <input value={newNumber} onChange={handlenumberchange}/></div>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm
  