import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages here
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={SavedBooks} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;