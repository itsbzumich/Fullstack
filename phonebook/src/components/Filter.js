const Filter = ({filter, onchange}) => {
    return (
    <form>
        <div>
          filter shown with <input value={filter} onChange={onchange}/>
        </div>
      </form>
    )
  }
  
  export default Filter
  