import { Route, Switch } from "react-router";
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";

import "../src/style.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/:endpointID" component={ContentPage} />
        <Route exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
