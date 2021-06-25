import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import CompanyRegistration from './components/CompanyRegistration';
import Login from './components/Login'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
import LogCard from './components/LogCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Route exact path="/home">
            <Home />
            </Route>
            <Route exact path="/users">
            <UserLogin />
            </Route>
            <Route exact path="/UserRegistration">
            <UserRegistration />
            </Route>
            <Route exact path="/LogCard">
              <LogCard />
            </Route>
            
             <Route exact path="/CompanyRegistration">
             <CompanyRegistration />
             </Route>

            <Route exact path="/Login">
            <Login />
            </Route>
            
      

      </BrowserRouter>


    </div>
  );
}

export default App;
