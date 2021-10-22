import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/post_patient/Detailpost_patient'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/post_patient/Creatpost_patient'
import test from './components/test'
import test2 from './components/test2'
import test3 from './components/test3'
import posthelp from './components/posthelp';
import myCase from './components/seepost';
import loginp from './components/auth/loginp'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/test' component={test} />
            <Route path='/test2' component={test2} />
            <Route path='/test3' component={test3} />
            <Route path='/posthelp' component={posthelp} />
            <Route path='/myCase' component={myCase} />
            <Route path='/loginp' component={loginp} />

          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;