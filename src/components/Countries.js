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
                {this.state.countries.map((anObjectMapped, index) => {
                    return (
                        <p key={anObjectMapped.name}>
                            {anObjectMapped.name}
                        </p>
                    );
                })}
                <h3> Countires</h3>
            </div>
        )
    }
}

export default Countries
