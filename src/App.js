import Home from "./home";
import Navbaren from "./navbar";
import Arenor from "./arenor";
import Weather from "./weather";
import Covid from "./covid";
import covidCountry from "./covidCountry";
import users from "./users";
import fortniteStore from "./fortniteStore";
import loginHotell from "./loginHotell";
import addArena from "./addArena";
import editArena from "./editArena";
import fortniteStoreList from "./fortniteStoreList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbaren />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/arenor" component={Arenor} />
          <Route path="/weather" component={Weather} />
          <Route path="/covid" component={Covid} />
          <Route path="/covidCountry" component={covidCountry} />
          <Route exact path="/users" component={users} />
          <Route exact path="/fortniteStore" component={fortniteStore} />
          <Route exact path="/loginHotell" component={loginHotell} />
          <Route exact path="/addArena" component={addArena} />
          <Route exact path="/editArena/:id" component={editArena} />
          <Route
            exact
            path="/fortniteStoreList"
            component={fortniteStoreList}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
