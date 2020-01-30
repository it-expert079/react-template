import React, { Component } from 'react'
import "./css/Article.scss"

export class Article extends Component {
    render() {
        return (
            <div className = "company-article-section">
                <div className = "container">
                    <div className = "row article-info">
                        <div className = "col-md-6 left-section"></div>
                        <div className = "col-md-6 right-section">
                            <p>Technological advancement is an extended idea of technology. 
                                While technology is a rather-well specified concept, it has a wide 
                                definition to lots of people, and also particularly numerous understanding in 
                                the academic and also service world. What's your opinion of Web Page Design Template 
                                Technic company?
                            </p>
                        </div>
                    </div>
                    <div className = "row article-items">
                        <div className = "col-md-4">
                            <div className="card">
                                <img alt="Card image cap" className="card-img-top" src={process.env.PUBLIC_URL + '/images/article-item-1.jpg'}/>
                                <div className="card-body">
                                    <h4 className = 'card-title'>Modern Technologies</h4>
                                    <p>Development, as well as modern technology, go hand in hand - 
                                        that virtually do without stating.
                                    </p>
                                    <a className = "footer-link" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>

                        <div className = "col-md-4">
                            <div className="card">
                                <img alt="Card image cap" className="card-img-top" src={process.env.PUBLIC_URL + '/images/article-item-2.jpg'}/>
                                <div className="card-body">
                                    <h4 className = 'card-title'>Big Projects</h4>
                                    <p>It can be practical to concentrate your innovation 
                                        initiatives on places where you have recurring challenges.
                                    </p>
                                    <a className = "footer-link" href="#">
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className = "col-md-4">
                            <div className="card">
                                <img alt="Card image cap" className="card-img-top" src={process.env.PUBLIC_URL + '/images/article-item-3.jpg'}/>
                                <div className="card-body">
                                    <h4 className = 'card-title'>Multifunctional</h4>
                                    <p>The effective exploitation of originalities is important to 
                                        a service being able to enhance its treatments.
                                    </p>
                                    <a className = "footer-link" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
