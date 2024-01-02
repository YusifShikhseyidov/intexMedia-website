import axios from "axios";
import { useEffect,useState } from "react"

// import styles
import "./CurrencyRates.css"

export default function CurrencyRates() {

  const [currenciesList, setCurrenciesList] = useState([])
  // const [errorstate, setErrorState] = useState(null)

  useEffect(()=>{
    const getRates = async () =>{
      try {
        const response = await axios.get('http://api.exchangeratesapi.io/latest?access_key=55b37ed41b986e85103b3fb8c4d1e56a')
        const {rates} = response
  
        const currenciesArr=[]
        for(const [symbol, rate] of Object.entries(rates)){
          currenciesArr.push({symbol, rate})
        }
        setCurrenciesList(currenciesArr)
        console.log(currenciesList)
        
      } catch (error) {
        // setErrorState(error.stack)
        console.log("Error: " ,error)
      }
    }
    getRates()
  })

  return (
    <div style={{display:"flex", alignItems:"baseline"}}>
      <ul style={{listStyle: "none"}}>
        <li>Currencies Listing will be here soon,</li>
      </ul>
      &nbsp;<div className="loader"></div>
    </div>
  );
}
