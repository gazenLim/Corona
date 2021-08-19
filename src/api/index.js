import axios from "axios";



const url = "https://covid19.mathdro.id/api"


export const fetchData = async(country)=>{

let changabaleUrl = url
if(country){
  changabaleUrl =`${url}/countries/${country}`
}


try {
    const {data:{confirmed ,recovered, deaths,lastUpdate}} = await axios.get(changabaleUrl)
  console.log(recovered)
    return { confirmed, recovered,  deaths, lastUpdate }
} catch (error) {
    console.log(error)
}
}


export const fetchDailyData = async()=>{
  try {
    const {data} = await axios.get(`${url}/daily`)

    const modifiedData = data.map((dailayData)=>({
      confirmed: dailayData.confirmed.total,
      deaths: dailayData.deaths.total,
      date: dailayData.reportDate
    }))
    return modifiedData
  } catch (error) {
    
  }
}

export const getCountries = async()=>{
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)
    console.log({countries})
    return countries.map((country)=>country.name)
  } catch (error) {

    
  }
}