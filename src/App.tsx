import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.scss'
import {
  CustomNavbar,
  Header,
  Footer,
  BusinessPlan
} from "./components";

export default function App() {

  return (
    <Router>
      <div id="main-body">
        <CustomNavbar />
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/questions">
            <BusinessPlan />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
    
  )

}