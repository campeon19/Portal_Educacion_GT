import Layout from './Components/Layout/Layout';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import { Switch, Route } from 'react-router-dom';
import Navbar_Course from './Components/Navbars/Navbar-Courses';
import CourseSearcher from './Components/Courses/CourseSearcher';
import Becas from './Components/Becas Screen/BecasScreen';
import BecasInfo from './Components/BecasInfo/BecasInfo';
import Jobs from './Components/Jobs/Jobs';
import JobDetail from './Components/Jobs/JobDetail/JobDetail';
import HomeScreen from './Components/Homescreen/HomeScreen';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomeScreen/>
        </Route>
        <Route path="/courses/:id" exact>
          <CourseDetail />
        </Route>
        <Route path="/becas" exact>
          <Becas />
        </Route>
        <Route path="/becas/:id" exact>
          <BecasInfo />
        </Route>
        <Route path="/courses" exact>
          <CourseSearcher />
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
