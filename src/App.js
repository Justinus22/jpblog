import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"


import BlogPage from "./pages/BlogPage"

function App() {
  return (
    <Layout>
        <Switch>
          <Route path="/" exact>
              <BlogPage />
          </Route>
          <Route path="/blog" exact>
              Blog
          </Route>
          <Route path="/account">
              Log In
          </Route>
        </Switch>
    </Layout>

);
}

export default App;
