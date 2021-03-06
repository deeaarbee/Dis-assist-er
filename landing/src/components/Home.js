import React, { Component } from 'react';




class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="banner-area relative" id="HOME">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen justify-content-center align-items-center">
                            <div className="col-lg-8">
                                <div className="banner-content text-center">
                                    <p className="text-uppercase text-white">We assist during disaster</p>
                                    <h1 className="text-uppercase text-white">Dis - Assist - er</h1>
                                    <br/>
                                    <a href="https://www.youtube.com/watch?v=d18cG0YhQ0I&feature=youtu.be"><p className="text-uppercase text-white">Checkout our App video -></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ React.Fragment>
        );
    }
}

export default Home;
