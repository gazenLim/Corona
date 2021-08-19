import React,{useState,useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { getCountries } from '../../api'







const CountryPicker = ({handleCountryChange})=>{

const[fetchCountry, setFetchcountries] = useState([])



useEffect(()=>{
const fetchAPI = async()=>{
    setFetchcountries(await getCountries())

}
fetchAPI()


},[setFetchcountries])


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
               {fetchCountry.map((country,i)=>
               <option key={i} value={country}>{country}</option>
               

               
               
            )}
            </NativeSelect>
           
        </FormControl>
    )
}


export default CountryPicker