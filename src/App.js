import Home from './home'
import Navbar from './navbar'
import Arenor from './arenor'
import Weather from './weather'
import Covid from './covid'
import covidCountry from './covidCountry'
import users from './users'
import login from './login'
import testcovid from './testcovid'
import fortniteStore from './fortniteStore'
import loginHotell from './loginHotell'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <loginHotell/>
     <Navbar/>
     <switch>
       <Route path="/home" component={Home}/>
       <Route path="/arenor" component={Arenor}/>
       <Route path="/weather" component={Weather}/>
       <Route path="/covid" component={Covid}/>
       <Route path="/covidCountry" component={covidCountry}/>
       <Route exact path="/users" component={users}/>
       <Route exact path="/login" component={login}/>
       <Route exact path="/fortniteStore" component={fortniteStore}/>
       <Route exact path="/testcovid" component={testcovid}/>
       <Route exact path="/loginHotell" component={loginHotell}/>
       <Route exact path="/" component={Home}/>
     </switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
