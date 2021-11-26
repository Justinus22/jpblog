import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"

import ProviderWrapper from "./context/ProviderWrapper.js"


import BlogPage from "./pages/BlogPage"
import Account from "./pages/Account"
import WelcomePage from "./pages/WelcomePage"
import SignUp from "./pages/SignUp"
import Contact from "./pages/Contact"

function App() {
  return (
    <ProviderWrapper>
      <Layout>
          <Switch>
            <Route exact path="/"  component={WelcomePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </Layout>
    </ProviderWrapper>
);
}

export default App;
