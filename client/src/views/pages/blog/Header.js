import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
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
                  <button className="subnavbtn" ><NavLink  to={"/topic/"+data}> {data} </NavLink> </button>
                </div>
              )
            })}

            {this.state.menuwithsub.map((data,index) => {
              return (
                <div className="subnav" key={index}>
                  <button className="subnavbtn"> {data.name} <i className="fa fa-caret-down"></i> </button>
                  <div className="subnav-content">
                    {data.submenus.map((subdata,index) => {
                      return (
                        <NavLink  to={"/topic/"+subdata} data={subdata} key={index}>{subdata}</NavLink>
                      )

                    })}


                  </div>
                </div>
              )
            })}
 
 

          
                <div className="mymegamenu" >
                  <button className="dropbtn"><NavLink  to="/css"> HTML <i className="fa fa-caret-down"></i></NavLink>
                  </button>
                  
                  <div className="mymegamenu-content">
                    <div className="row">
                      <div className="column">
                        <h3>Category 1</h3>
                        <a href="#">Navlink 1</a>
                        <a href="#">NavLink 2</a>
                        <a href="#">NavLink 3</a>
                      </div>
                      <div className="column">
                        <h3>Category 1</h3>
                        <a href="#">Navlink 1</a>
                        <a href="#">NavLink 2</a>
                        <a href="#">NavLink 3</a>
                      </div>
                      <div className="column">
                        <h3>Category 1</h3>
                        <a href="#">Navlink 1</a>
                        <a href="#">NavLink 2</a>
                        <a href="#">NavLink 3</a>
                      </div>
                    </div>
                  </div>
                </div>
           

           <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/">Home</NavLink> </button>
            </div>


            <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/userlogin">Login</NavLink> </button>
            </div>
           
            <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/userregister">Register</NavLink> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/writterdashboard"> writter?</NavLink> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/SupperAdminDashboard">Supper Admin</NavLink> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><NavLink  to="/makequestion">Make Question</NavLink> </button>
            </div>
            <div className="subnav">
              <button className="subnavbtn"><a href="https://kb-quiz.herokuapp.com/" target="_blank">Play Quiz</a></button>
            </div>
           
          </div>

        </div>
      </div>

    

    );
  }
}

export default Header;