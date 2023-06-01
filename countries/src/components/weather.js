const Weather = ({capital,lat,lon,key}) => {
    useEffect(()=>axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=dbc6a28ff4e0f7a0017b2fc43eb2d8c2`)
    .then(response=>{
     setCountries(response.data)
    }),[])

    return (
        <div>
            <h1>{capital}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h3>languages:</h3>
            <ul>{Object.values(country.languages).map(language => (<li>{language}</li>))}</ul>
            <img src={country.flags.png}/>
        </div>
    )
}
  
  export default Weather
  