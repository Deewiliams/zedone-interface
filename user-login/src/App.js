import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CompanyRegistration from "./components/CompanyRegistration";
import Login from "./components/Login";
import UserRegistration from "./components/UserRegistration";
import CompanyLogged from "./components/CompanyLogged";
import HeaderNav from "./components/HeaderNav";
import Online from "./components/Online";
import Subscriptions from "./components/Subscriptions";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/AboutUs";
import Mobile from "./components/Mobile"

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

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
