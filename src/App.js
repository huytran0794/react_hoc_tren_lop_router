import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Header from "./components/Header";
import DemoHook from "./DemoHook/DemoHook";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/login"} component={LoginPage} />
          <Route
            path={"/detail/:id"}
            render={(routeProps) => <DetailPage {...routeProps} />}
          />
        </Switch>
      </BrowserRouter> */}
      <DemoHook />
    </div>
  );
}

export default App;
