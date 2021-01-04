import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Cottagedam from "./components/Continents/Cottagedam";
import Alchemis from "./components/Continents/Alchemis";
import Liminaland from "./components/Continents/Liminaland";
import Bubblebopia from "./components/Continents/Bubblebopia";
import Yesterway from "./components/Continents/Yesterway";
import Voidend from "./components/Continents/Voidend";
import Honeydoe from "./components/Continents/Honeydoe";
import CreateShopFormPage from "./components/CreateShopFormPage";
import ShopAdminPage from "./components/ShopAdminPage";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false); 
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <div id="App">
      <Sidebar isLoaded={isLoaded} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path="/">
            <HomePage />
          </Route>  
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/createshop">
            <CreateShopFormPage />
          </Route>
          <Route path="/admin">
            <ShopAdminPage />
          </Route>
          <Route path="/feeds/cottagedam">
            <Cottagedam />
          </Route>
          <Route path="/feeds/alchemis">
            <Alchemis />
          </Route>
          <Route path="/feeds/liminaland">
            <Liminaland />
          </Route>
          <Route path="/feeds/bubblebopia">
            <Bubblebopia />
          </Route>
          <Route path="/feeds/yesterway">
            <Yesterway />
          </Route>
          <Route path="/feeds/voidend">
            <Voidend />
          </Route>
          <Route path="/feeds/honeydoe">
            <Honeydoe />
          </Route>
        </Switch>
      )}
      </div>
    </div>
    </>
  );
}

export default App;
