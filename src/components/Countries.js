import React, { Component } from 'react'
import axios from 'axios';
import Technologies from './Technologies';

export class Countries extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/all`)
          .then(res => {
            this.setState({countries: res.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <b>Flag</b>
                    </div>
                    <div className="col-md-2">
                        <b>Name</b>
                    </div>
                    <div className="col-md-2">
                        <b>Capital</b>
                    </div>
                    <div className="col-md-2">
                        <b>Country Code</b>
                    </div>
                    <div className="col-md-2">
                        <b>Region</b>
                    </div>
                    <div className="col-md-2">
                        <b>Population</b>
                    </div>
                </div>
                {this.state.countries.map((anObjectMapped, index) => {
                    return (
                        <div className="row">
                            <div className="col-md-2" key={anObjectMapped.flag}>
                                <img src={anObjectMapped.flag} width="25px"></img>
                            </div>
                            <div className="col-md-2" key={anObjectMapped.name}>
                                {anObjectMapped.name}
                            </div>
                            <div className="col-md-2" key={anObjectMapped.capital}>
                                {anObjectMapped.capital}
                            </div>
                            <div className="col-md-2" key={anObjectMapped.callingCodes}>
                                {anObjectMapped.callingCodes}
                            </div>
                            <div className="col-md-2" key={anObjectMapped.region}>
                                {anObjectMapped.region}
                            </div>
                            <div className="col-md-2" key={anObjectMapped.population}>
                                {anObjectMapped.population}
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Countries
