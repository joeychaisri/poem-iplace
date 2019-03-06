import React, { Component , Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <div>loading...</div>
  </div>
);
class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      </Suspense>
      
    );
  }
}

export default App;
