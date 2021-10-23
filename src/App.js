import Layout from './Components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';

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
