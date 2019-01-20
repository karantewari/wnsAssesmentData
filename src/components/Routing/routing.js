import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, NavLink as RRNavLink} from 'react-router-dom';

import Login from '../../components/config/login';
import Mainchart from '../ChartsData/ChartMain/chartmain';
import ApiChart from '../ChartsData/Fromapi/fromapi';
import Signup from '../config/signup';
import ErrMess from '../ErrorPage/errorPage';
import TransformedChart from '../ChartsData/Transformed/transformed';

class RouterComp extends Component{
    //not implemented yet
    render(){
        return(
                <Switch>
                    <Route component={ApiChart} path='/' exact/>
                    <Route component={Mainchart} path='/static' />
                    <Route component={TransformedChart} path='/transformed' />
                    <Route component={Login} path='/login'/>
                    <Route component={Signup} path='/signup'/>
                    <Route component={ErrMess}/>
            </Switch>
        )
    }
}

export default RouterComp