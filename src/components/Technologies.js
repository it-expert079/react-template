import React, { Component } from 'react'
import './css/technologies.scss';
import check from './images/check.png'
export class Technologies extends Component {
    render() {
        return (
            <div className="container-fluid tech">
                <div className="row">
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Modern Technologies</h4>
                        </span>
                        <p>Technology improves the means we perform organisation operations.</p>

                    </div>
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Active community</h4>
                        </span>
                        <p>Area advertising and marketing is a technique to engage a target.</p>
                        
                    </div>
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Multifunctional</h4>
                        </span>
                        <p>The effective exploitation of originalities is important to a service.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Big Projects</h4>
                        </span>
                        
                        <p>We know how to work with big projects.</p>
                    </div>
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Web Solution</h4>
                        </span>
                        
                        <p>We constantly solve different web issues.</p>
                    </div>
                    <div className="col-md-4 section">
                        <span>
                            <img src={check} className="check-img"></img>
                            <h4>Market Analysis</h4>
                        </span>
                        
                        <p>Our analytics work in our team for 5 years and have a great experience.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies
