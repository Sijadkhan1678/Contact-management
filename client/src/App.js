import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import contactState from './context/contacts/contactState';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'

const  App= ()=> {
  return (
    <contactState>
    <Router>
    <Fragment>
    <Navbar />
     <div class='container'>
       <Switch>
          <Route path='/' component={Home} />

          <Route exact path='/about' component={About} />
       </Switch>
     </div>

     </Fragment>
     </Router>
     </contactState>
  );
}

export default App;
