import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import CompanyRegistration from "./components/CompanyRegistration";
import Login from "./components/Login";
import UserRegistration from "./components/UserRegistration";
import CompanyLogged from "./components/CompanyLogged";
import HeaderNav from "./components/HeaderNav";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <HeaderNav />
        <Route exact path="/">
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
        {/* <Route path="/compaylogin"> */}
        <CompanyLogged />
        {/* </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
