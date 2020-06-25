import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {makeServer} from './server';
import {StudentsTable} from './components/StudentsTable/StudentsTable';
import {StudentDetail} from './components/StudentDetail/StudentDetail';
import './App.scss';

const App: React.FC= () => {
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
  return (
    <Router>
        <header>
          <nav>
            <NavLink activeClassName="active" exact to='/'> Add Student </NavLink>
            <NavLink activeClassName="active" to='/students'> All the students </NavLink>
          </nav>
        </header>
        <main>
          <Switch>
              <Route path="/student/:studentId" component={StudentDetail} />
              <Route path="/students">
                <StudentsTable />
              </Route>
              <Route>
                <p>add student</p>
              </Route>
          </Switch>
        </main>
    </Router>
  );
};

export default App;
