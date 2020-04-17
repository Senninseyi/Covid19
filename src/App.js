import React from 'react'

import { Cards, Chart, Country } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import covid from './images/image.png'

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data:fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data:fetchedData, country: country });
        
    }

    render(){
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} alt="covid19" src={covid}/>
                <Cards data={data} />
                <Country handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App