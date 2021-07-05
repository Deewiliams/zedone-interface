import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import CompanyRegistration from "./components/CompanyRegistration";
import Login from "./components/Login";
import UserRegistration from "./components/UserRegistration";
import CompanyLogged from "./components/CompanyLogged";
import HeaderNav from "./components/HeaderNav";
import Online from "./components/Online";
import Subscriptions from "./components/Subscriptions"
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/users">
          <UserRegistration />
        </Route>

        <Route path="/CompanyRegistration">
          <CompanyRegistration />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="online">
          <Online />
        </Route>
        {/* <Subscriptions /> */}

        <Route path="/company-login">
          <CompanyLogged />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
