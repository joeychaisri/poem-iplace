import React, { Component , Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import PropTypes from 'prop-types';

const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <div>loading...</div>
  </div>
);
class App extends Component {
  render() {
    // console.log(this.props.env)
    return (
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes env={this.props.env} />
      </BrowserRouter>
      </Suspense>
      
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
