import React, { Component } from 'react'
import './css/Intro.scss'
export class Intro extends Component {
    render() {
        return (
            <div className = "company-intro-section">
                {/* <div class="company-overlay"></div> */}
                <div className = "company-intro">
                    <div className ="container company-info">
                        <div className = 'col-md-12 col-lg-7'>
                            <h2> Tech Company</h2>
                            <p> Web Page Design Template</p>
                            <p>We are a team of cutting-edge specialists providing high - high quality, 
                                prompt, value-added solutions to our customers. Our success is attained through 
                                sincerity in thought, word and activity towards our customers, fellow workers, 
                                neighborhoods and suppliers. Whould you like to try web Page Design Template?
                            </p>
                            <a href='#' className = 'btn btn-primary read-more'> Read More</a>
                            <a href='#' className = 'btn btn-primary contact-us'> Contact Us</a>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
