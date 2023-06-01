import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/countries'
import Country from './components/country'
import Country from './components/weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [toShow, settoShow] = useState([])

  useEffect(()=>axios.get(`https://restcountries.com/v3.1/all/`)
                     .then(response=>{
                      setCountries(response.data)
                     }),[])

  const handleChange = (event) => {
    setQuery(event.target.value)
    settoShow(countries.filter(country=>
    country.name.common.toLowerCase().includes(query.toLowerCase())
    ))
  }
                  

  return(
    <div>
    <Filter filter={query} onchange={handleChange}/>
    {toShow.length===1 ? <Country country={toShow[0]}/>
                      : null}
    {toShow.length>10 ? <div>Too many matches, specify another filter</div>
                      : <Countries countries={toShow} setCountriesToShow={settoShow}/>
                       }

    </div>
  )
}

export default App