import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages here
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}