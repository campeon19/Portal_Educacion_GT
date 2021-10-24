import Layout from './Components/Layout/Layout';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import { Switch, Route } from 'react-router-dom';
import Navbar_Course from './Components/Navbars/Navbar-Courses';
import CourseSearcher from './Components/Courses/CourseSearcher';
import Becas from './Components/Becas Screen/BecasScreen';
import Jobs from './Components/Jobs/Jobs';
import JobDetail from './Components/Jobs/JobDetail/JobDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <CourseSearcher />
        </Route>
        <Route path="/courses/:id" exact>
          <CourseDetail />
        </Route>
        <Route path="/becas" exact>
          <Becas />
        </Route>

        <Route path="/jobs" exact>
          <Jobs />
        </Route>

        <Route path="/jobs/:id" exact>
          <JobDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
