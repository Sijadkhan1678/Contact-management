import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import ContactState from './context/contacts/contactState';
import AlertState from './context/alert/alertState'
import AuthState from './context/auth/authState'
import Alert from './components/pages/Alert'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register';
import Login from  './components/auth/Login'

const  App= ()=> {
  return (
    <ContactState>
     <AuthState> 
     <AlertState> 
    <Router>
    <Fragment>
    <Navbar />
     <div class='container'>
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
