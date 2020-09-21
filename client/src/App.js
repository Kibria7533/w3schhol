
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import Logout from './views/pages/Logout';
import ProtectedRoute from './ProtectedRoute';
import Adminregister from './views/pages/Adminregister';
import Adminlogin from './views/pages/Adminlogin';
import Superadminlogin from './views/pages/Superadminlogin';
import CheckandActive from './views/pages/CheckandActive';
import RecoverOrActive from './views/pages/RecoverOrActive';
import Checkrecover from './views/pages/Checkrecover';
import Changepassword from './views/pages/Changepassword';
import Roothome from './views/pages/blog/home/Roothome';
import Header from './views/pages/blog/Header';
import Body from './views/pages/blog/Body';
import WritterDashboard from './views/pages/WritterDashboard';
import Login from './views/pages/login/Login';
import Register from './views/pages/register/Register';
import Page404 from './views/pages/page404/Page404';
import Page500 from './views/pages/page500/Page500';
import Forms from './views/pages/Forms';
import PostsForms from './views/pages/PostsForms';
import SupperAdminDashboard from './views/pages/SupperAdminDashboard';
import Superadmintables from './views/pages/Superadmintables';
import Topicstable from './views/pages/Topicstable';
import Getallcomments from './views/pages/Getallcomments';
import Usersinfo from './views/pages/Usersinfo';
import writters from './views/pages/writters';
import writteraplicants from './views/pages/writteraplicants';
import Modals from './views/pages/MOdals';
import makequestion from './views/pages/makequestion';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={Roothome} />
          <Route exact path="/userlogin"  component={Login } />
          <Route exact path="/userregister"  component={Register} />
          <Route exact path="/checkactivationlink" component={CheckandActive} />
          <Route exact path="/recoveroractive" component={RecoverOrActive} />
          <Route exact path="/checkrecover" component={Checkrecover} />
          <Route exact path="/forgotpassword/:token" component={Changepassword} />
          <Route exact path="/404"  component={Page404} />
          <Route exact path="/500" component={Page500} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/adminregister" component={Adminregister} />
          <Route exact path="/adminlogin" component={Adminlogin} />
          <Route exact path="/Superadminlogin" component={Superadminlogin} />
+         <Route exact path="/topic/:html" component={Body} />
          <Route exact path="/writterdashboard" component={WritterDashboard} />
          <Route exact path="/superadminforms" component={Forms} />
          <Route exact path="/writerforms" component={PostsForms} />
          <Route exact path="/SupperAdminDashboard" component={SupperAdminDashboard} />
          <Route exact path="/Supperadmintables" component={Superadmintables} />
          <Route exact path="/Topicstable" component={Topicstable} />
          <Route exact path="/getcomment" component={Getallcomments} />
          <Route exact path="/usersinfo" component={Usersinfo} />
          <Route exact path="/writter" component={writters} />
          <Route exact path="/writteraplicant" component={writteraplicants} />
          <Route exact path="/modal" component={Modals} />
          <Route exact path="/makequestion" component={makequestion} />
          


        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
