import React, { Component } from 'react';

class Hometeacher extends Component {
    render() {
        return (
            <div>
                <div id="faculty-sec">
                    <div className="container set-pad">
                        <div className="row text-center">
                            <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                                <h1 data-scroll-reveal="enter from the bottom after 0.1s" className="header-line">OUR FACULTY </h1>
                                <p data-scroll-reveal="enter from the bottom after 0.3s">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo.
        </p>
                            </div>
                        </div>
                        {/*/.HEADER LINE END*/}
                        <div className="row">
                            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                                <div className="faculty-div">
                                    <img src="assets/img/faculty/1.jpg" className="img-rounded" />
                                    <h3>ROXI CHI LUENA </h3>
                                    <hr />
                                    <h4>Desigining <br /> Department</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo .
          </p>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.5s">
                                <div className="faculty-div">
                                    <img src="assets/img/faculty/2.jpg" className="img-rounded" />
                                    <h3>JANE DEO ALEX</h3>
                                    <hr />
                                    <h4>Enginering <br /> Department</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo .
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.6s">
                                <div className="faculty-div">
                                    <img src="assets/img/faculty/3.jpg" className="img-rounded" />
                                    <h3>RUBY DECORSA</h3>
                                    <hr />
                                    <h4>Management <br /> Department</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo .
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Hometeacher;