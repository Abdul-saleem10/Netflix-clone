import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Nav from "./Nav";
function AppRouter() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" exact component={Movie} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
