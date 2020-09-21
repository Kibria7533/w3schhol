import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from '../login/Login';
import Register from '../register/Register';
import RecoverOrActive from '../RecoverOrActive';
import Changepassword from '../Changepassword';
import CheckandActive from '../CheckandActive';
import Checkrecover from '../Checkrecover';
import Logout from '../Logout';
import Adminregister from '../Adminregister';
import adminlogin from '../Adminlogin';
import Superadminlogin from '../Superadminlogin';
import Body from './Body';
import Roothome from './home/Roothome';
import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      "menus": [],
      "menuwithsub": [],
      "menuwithmega": []
    }
  }
  async componentDidMount() {
    await axios.get(`http://localhost:5000/allmenus`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => {
      if(data.data.length)
      this.setState({ menus: data.data[0].menus, menuwithsub: data.data[0].menuwithsub, menuwithmega: data.data[0].menuwithmega })
  
   
    })
  }
  render() {
    return (
 
      <div className="row sticky-top">
        <div className="col-lg-12">
          <div className="mynav ">

            {this.state.menus.map((data,index) => {
              return (
                <div className="subnav" key={index}>
                  <button className="subnavbtn" ><Link  to={`/topic/${data}`}> {data} </Link> </button>
                </div>
              )
            })}

            {this.state.menuwithsub.map((data,index) => {
              return (
                <div className="subnav" key={index}>
                  <button className="subnavbtn"> {data.name} <i className="fa fa-caret-down"></i> </button>
                  <div className="subnav-content">
                    {data.submenus.map(subdata => {
                      return (
                        <Link  to={`/topic/${subdata}`} key={Math.random()}>{subdata}</Link>
                      )

                    })}


                  </div>
                </div>
              )
            })}



            {this.state.menuwithmega.map((megadata,index) => {
              return (
                <div className="mymegamenu" key={index}>
                  <button className="dropbtn"><Link  to="/css"> {megadata.name} <i className="fa fa-caret-down"></i></Link>
                  </button>
                  <div className="mymegamenu-content">
                    <div className="row">
                      <div className="column">
                        <h3>Category 1</h3>
                        <a href="#">link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

           <div className="subnav">
              <button className="subnavbtn"><Link  to="/">Home</Link> </button>
            </div>


            <div className="subnav">
              <button className="subnavbtn"><Link  to="/userlogin">Login</Link> </button>
            </div>
           
            <div className="subnav">
              <button className="subnavbtn"><Link  to="/userregister">Register</Link> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><Link  to="/writterdashboard"> writter?</Link> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><Link  to="/SupperAdminDashboard">Supper Admin</Link> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><Link  to="/makequestion">Make Question</Link> </button>
            </div>
          </div>
        </div>
      </div>

     

    );
  }
}

export default Header;