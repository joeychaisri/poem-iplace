import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home"
import ServiceRetail from "./containers/service-retail"
import Header from "./containers/header"
import Footer from "./containers/footer"


const Routes = props => {
  return (
    
    <Switch>
     
      <Route exact path="/" render={() =>  <div><Header/><Home/><Footer/></div> } />
      <Route exact path="/service-retail" render={() =>  <div><Header/><ServiceRetail/><Footer/></div> } />
      
      

    </Switch>
      
      

  );
};

export default Routes;
