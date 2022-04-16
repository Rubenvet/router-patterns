
import React, { Component } from 'react';
import Navbar from "./Navbar";
import Food from "./Food";
import { Route, Switch } from "react-router-dom";
import FoodSearch from "./FoodSearch";
import Meal from "./Meal";

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/food/:name" component={Food} /> */}
      <Navbar />
      <Switch>
      <Route 
      exact path="/food/:name" 
      render={routerProps => <Food {...routerProps} 
      stuff={routerProps} />}
      />
      <Route 
      exact path="/food/:foodName/drink/:drinkName" 
      component={Meal}
      />
      {/* <Route exact path="/" 
      render={() => <FoodSearch />} 
      /> */}
      <Route 
      exact path="/" 
      render={() => <FoodSearch />} 
      />
      <Route 
      render={() => <h1>Error Not Found!!</h1>} 
      />
      </Switch>
    </div>
  );
}

export default App;
