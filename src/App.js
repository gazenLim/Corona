import React, { Component } from 'react';

 
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css'
import { fetchData } from './api';

class App extends Component {
state={
  data: {},
  country:''
}

handleCountryChange = async (country)=>{
 //get country first
 console.log(country)
//fetch data
const fetchedData = await fetchData(country)
console.log(fetchedData)

//set the data
this.setState({data: fetchedData, country: country })
}



async componentDidMount(){
  const fetchedData = await fetchData()
  this.setState({data: fetchedData})
}




  render() { 
    const {data, country} = this.state
    return (
      <div className={style.container}>
        <Cards data ={data}/>
       
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}
 
export default App;