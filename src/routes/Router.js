import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserForm from '../components/Login/UserForm';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import Menu from '../views/Menu';

const Router = () => {
    return(
       
        <Switch>
            <Route exact path='/' component={Home}/>

            <Route exact path= '/Register'>
                <UserForm windowchoose='Register' hash='/Login'/>
            </Route>

            <Route  path= '/Login'>
                <UserForm windowchoose='Login' hash='/Register'/>
            </Route>
    
            <PrivateRoute path='/Menu'>
               <Menu/>
            </PrivateRoute>
    
        </Switch>
     
    )
}
export default Router