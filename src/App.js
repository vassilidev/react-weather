import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/ville/:ville" component={City}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
