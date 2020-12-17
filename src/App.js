import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from '@material-ui/core/Button';
// import Home from './pages/Home'
import FireAuth from './comps/login/fireAuth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
        {/* <Button color="inherit"><Link className='whiteLink' to="/">Home</Link></Button>  */}
        <Button color="inherit"><Link className='whiteLink' to="/login">Login</Link></Button> 
       

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/login">
                   <FireAuth />
                </Route>
                {/* <Route path="/">
                    <Home />
                </Route> */}
        </Switch>
      </div>
    </Router>
  

    </div>
  );
}

export default App;
