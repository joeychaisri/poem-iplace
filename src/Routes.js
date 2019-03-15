import React, { Component }  from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home"
import ServiceRetail from "./containers/service-retail"
import News from "./containers/news"
import AboutUs from "./containers/aboutus"
import Directory from "./containers/directory"
import Gallery from "./containers/gallery"
import Header from "./containers/header"
import Footer from "./containers/footer"
import ContactUs from "./containers/contactus"
import PropTypes from 'prop-types';


class Routes extends Component{
  render(){
    // console.log(this.props.env)
    return(
      <div>
      <Switch>
     <Route exact path="/" render={() =>  <div><Header/><Home/><Footer/></div> } />
     <Route exact path="/directory" render={() =>  <div><Header/><Directory/><Footer/></div> } />
     <Route exact path="/service-retail" render={() =>  <div><Header/><ServiceRetail/><Footer/></div> } />
     <Route exact path="/gallery" render={() =>  <div><Header/><Gallery/><Footer/></div> } />
     <Route exact path="/news" render={() =>  <div><Header/><News/><Footer/></div> } />
     <Route exact path="/aboutus" render={() =>  <div><Header/><AboutUs/><Footer/></div> } />
     <Route exact path="/contactus" render={() =>  <div><Header/><ContactUs env={this.props.env}/><Footer/></div> } />
   </Switch>
      </div>
    )
  }
}

Routes.propTypes = {
  env: PropTypes.object.isRequired
};


export default Routes;
