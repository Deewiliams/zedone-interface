import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/HomeCard";
import CompanyRegistration from "./Auth/CompanyRegistration";
import Login from "./Auth/Login";
import UserRegistration from "./components/UserRegistration";
import CompanyLogged from "./Auth/CompanyLogged";
import HeaderNav from "./components/HeaderNav";
import Online from "./Pages/Online";
import Subscriptions from "./Pages/Subscriptions";
import "./App.css";
import PageNotFound from "./Pages/PageNotFound";
import AboutUs from "./Pages/AboutUs";
import Mobile from "./Pages/Mobile"
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/users">
            <UserRegistration />
          </Route>

          <Route exact path="/CompanyRegistration">
            <CompanyRegistration />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/online">
            <Online />
          </Route>
          <Route exact path="/subscriptions">
            <Subscriptions />
          </Route>

          <Route path="/mobile">
            <Mobile />
          </Route>

          <Route exact path="/company-login">
            <CompanyLogged />
          </Route>
          
          <Route path="/about">
          <AboutUs />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
