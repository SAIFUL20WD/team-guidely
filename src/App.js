import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetail from "./components/TeamDetail/TeamDetail";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/team/:id'>
            <TeamDetail></TeamDetail>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
