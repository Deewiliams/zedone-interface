import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import CompanyRegistration from './components/CompanyRegistration';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route exact path="/">
            <Home />
            </Route>
            
             <Route path="/CompanyRegistration">
             <CompanyRegistration />
             </Route>
            <Route path="/Login">
            <Login />
            </Route>
        </switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
