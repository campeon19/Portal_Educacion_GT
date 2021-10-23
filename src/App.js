import Layout from './Components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Navbar_Course from './Components/Navbars/Navbar-Courses'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <h1>main</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
