import React from 'react';

//import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import covidimage from './images/covidimage.png';

class App extends React.Component{

state = {
    data : {},
    country: '',
}
    async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData})

}
handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country : country})
    //fetch the data
    //set the state
}
    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.covidimage} src = {covidimage} alt="COVID-19"/>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = {data} country = {country} />
            </div>
        )
    }
}
export default App;