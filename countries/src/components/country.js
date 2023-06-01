const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h3>languages:</h3>
            <ul>{Object.values(country.languages).map(language => (<li>{language}</li>))}</ul>
            <img src={country.flags.png}/>
        </div>
    )
}
  
  export default Country
  