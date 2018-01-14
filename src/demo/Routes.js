import React, {Component} from "react";
import BasicComponents from "./basic/BasicComponents";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RunningForm from "./forms/RunningForm";

class Routes extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path="/" component={BasicComponents}/>
                    <Route exact path="/buttons" component={BasicComponents}/>
                    <Route exact path="/text-field" component={BasicComponents}/>
                    <Route exact path="/forms" component={RunningForm}/>
                </Switch>
            </Router>
        );
    }
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
