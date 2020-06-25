import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {makeServer} from './server';
import {StudentsTable} from './components/StudentsTable/StudentsTable';

const App: React.FC= () => {
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
  return (
    <Router>
        <nav>
          <Link to='/add-student'> Add Student </Link>
          <Link to='/students'> All the students </Link>
        </nav>
        <Switch>
            <Route path="/student/:studentId">
            <p>Student</p>
            </Route>
            <Route path="/students">
              <StudentsTable />
            </Route>
            <Route path="/add-student">
            <p>add student</p>
            </Route>
            <Route>
              <p>Inicio</p>
            </Route>
      </Switch>
    </Router>
  );
};

export default App;
