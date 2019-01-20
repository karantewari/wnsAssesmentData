import React, { Component } from 'react';
import './App.css';
import {NavLink} from 'reactstrap';
import {BrowserRouter, Route, Switch, NavLink as RRNavLink} from 'react-router-dom';

import Mainchart from './components/ChartsData/ChartMain/chartmain';
import ApiChart from './components/ChartsData/Fromapi/fromapi';
import TransformedChart from './components/ChartsData/Transformed/transformed';
import ErrMess from './components/ErrorPage/errorPage';

import fire from './components/config/Firebase'
import Login from './components/config/login';
import Signup from './components/config/signup';




class App extends Component {

  // state = {
  //   user: null,
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem('user', user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem('user');
  //     }
  //   });
  // }

  render() {
    return (
      // <div>
      // {this.state.user ? 



      //container for router, refer react router doc for more info
      <BrowserRouter> 
      <div className="maindiv">
        <div className="menuContainer">
            <div className="container">
              <div className="menu">
                <ul>
                  <li>
                    {/* using navlink of bootstrap to get the active class, if active isnt required , you can use Link of router-dom as well */}
                    <NavLink tag={RRNavLink} to={{
                      pathname:"/static"
                    }}>Hard coded</NavLink>
                  </li>
                  <li>
                    <NavLink tag={RRNavLink} to={{
                      pathname:"/"
                    }} exact>
                    
                    From API</NavLink>
                  </li>
                  <li>
                    <NavLink tag={RRNavLink} to={{
                      pathname:"/transformed"
                    }}>
                    Transformed</NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        {/* making routes, to give feel of multipaged app, exact is for specifying exact path, component is imported on top, path is used to specifiy what to be shown in url */}
      <Switch>
        <Route component={ApiChart} path='/' exact/>
        <Route component={Mainchart} path='/static' />
        <Route component={TransformedChart} path='/transformed' />
        <Route component={Login} path='/login'/>
        <Route component={Signup} path='/signup'/>
        <Route component={ErrMess}/>
      </Switch>
      </div>
      </BrowserRouter>
      // : <Login />
      //             }
      //             </div>
    );
  }
}

export default App;
