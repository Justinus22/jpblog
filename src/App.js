import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"


import BlogPage from "./pages/BlogPage"
import Account from "./pages/Account"

function App() {
  return (
    <Layout>
        <Switch>
          <Route path="/" exact>
              Welcome
          </Route>
          <Route path="/blog" exact>
              <BlogPage />
          </Route>
          <Route path="/account">
              <Account />
          </Route>
        </Switch>
    </Layout>

);
}

export default App;
