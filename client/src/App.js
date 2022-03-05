import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import ContactState from './context/contacts/ContactState';
import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState'
import Alert from './components/layout/Alert'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register';
import Login from  './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App= ()=> {
  return (

    <ContactState>
     <AuthState> 
     <AlertState> 
    <Router>
    <Fragment>
    <Navbar />
     <div className='container'>
       <Alert/>
       <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path= '/login' component ={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/about' component={About} />
       </Switch>
     </div>

     </Fragment>
     </Router>
     
    </AlertState>
    </AuthState>
     </ContactState>
     
  );
}

export default App;
