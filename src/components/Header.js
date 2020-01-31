import React, { Component } from 'react'
import './css/header.scss';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import Countries from './Countries'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';

export class Header extends Component {
    render() {
        return (
            <Router>
                <div className="container container-height">
                        <div className= "row">
                            <div className= "col-md-3">
                                <h4>TechM4</h4>
                            </div>
                            <div className= "col-md-3 columns">
                                <span>
                                    <i className="fas fa-phone-alt"></i>
                                    <b>+ (123) 1800-567-8990</b>
                                </span>
                                <br/>
                                <span>+ (123) 1800-567-8990</span>
                            </div>
                            <div className= "col-md-3 columns border-left">
                                <span>
                                    <b>Mon - Fri: 9:00AM - 5:00PM</b>
                                </span>
                                <br/>
                                <span>Sat - Sun: Closed</span>
                            </div>
                            <div className= "col-md-3 columns border-left">
                                <span>
                                    <b>office@example.com</b>
                                </span>
                                <br/>
                                <span>info@medical.com</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="row menu">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Demo</a>
                            <button className="contact-btn">Contacts</button>
                        
                        </div>
                        <Link to="/">Home</Link>
                        <Link to="/countries">Countries</Link>
                        <Route exact path="/" component={App} />
                        <Route path="/countries" component={Countries} />
                </div>
            </Router>
        )
    }
}

export default Header
