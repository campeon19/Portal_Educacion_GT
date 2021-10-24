import Layout from './Components/Layout/Layout';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import { Switch, Route } from 'react-router-dom';
import Navbar_Course from './Components/Navbars/Navbar-Courses'
import CourseSearcher from './Components/Courses/CourseSearcher';
import Jobs from './Components/Jobs/Jobs';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <CourseSearcher/>
        </Route>
        <Route path="/courses/:id" exact>
          <CourseDetail />
        </Route>

        <Route path="/jobs" exact>
          <Jobs />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
