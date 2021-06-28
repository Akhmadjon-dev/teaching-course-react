import Form from "./Components/Form/Form";
import { Switch, Route, Link } from "react-router-dom";
import Users from "./Components/Users";
import User from "./Components/User";
import Home from "./Components/Main";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/sign-in" component={Form} />
        <Route path="/user-list" component={Users} />
        <Route path="/user" component={User} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
