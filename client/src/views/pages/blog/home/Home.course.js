import React, { Component } from 'react';

class Homecourse extends Component {
    render() {
        return (
            <div>
                <div id="features-sec" className="container set-pad">
  <div className="row text-center">
    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
      <h1 data-scroll-reveal="enter from the bottom after 0.2s" className="header-line">FEATURE LIST </h1>
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
      <div className="about-div">
        <i className="fa fa-paper-plane-o fa-4x icon-round-border" />
        <h3>Quality Education</h3>
        <hr />
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo . 
        </p>
        <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
      </div>
    </div>
    <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.5s">
      <div className="about-div">
        <i className="fa fa-bolt fa-4x icon-round-border" />
        <h3>SYSTEMATIC APPROACH</h3>
        <hr />
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo . 
        </p>
        <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
      </div>
    </div>
    <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.6s">
      <div className="about-div">
        <i className="fa fa-magic fa-4x icon-round-border" />
        <h3>ONE TO ONE STUDY</h3>
        <hr />
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo . 
        </p>
        <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Homecourse;