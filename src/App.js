import Navbar from "./components/navbar.component";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login.component";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";
function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={Login} path="/login" />
                    <Route component={SignUp} path="/signup" />
                    <Route component={Dashboard} path="/dashboard" />
                    <Route exact component={Home} path="/" />
                </Switch>
            </div>
        </>
    );
}

export default App;
