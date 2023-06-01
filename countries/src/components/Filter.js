const Filter = ({filter, onchange}) => {
    return (
    <form>
        <div>
          find countries <input value={filter} onChange={onchange}/>
        </div>
      </form>
    )
  }
  
  export default Filter
  