import React, {Component} from "react";
import map from "lodash/map";
import {RemoteAppBar} from "./RemoteAppBar";
import {REMOTE_COMPONENT, RemoteComponent} from "../utils/Constants";
import {RemoteFlatButton, RemoteFloatingActionButton, RemoteIconButton, RemoteRaisedButton} from "./RemoteButton";
import RemoteForm from "./RemoteForm";
import {RemoteTextField} from "./RemoteTextField";

class ReactElement extends Component {

    getRemoteUI = (config, index = 0) => {
        let returnObj = undefined;
        if (config instanceof Array) {
            returnObj = map(config, (listItem, index) => this.getRemoteUI(listItem, index));
            return returnObj; // Process if item is not an Array
        } else if (config) {
            let passingProps = {
                key: index, ...config,
                onChange: this.props.onChange
            };
            switch (config.type) {
                case REMOTE_COMPONENT.APP_BAR :
                    return <RemoteAppBar {...passingProps}/>;
                case REMOTE_COMPONENT.BUTTON_FLAT :
                    return <RemoteFlatButton {...passingProps}/>;
                case REMOTE_COMPONENT.BUTTON_RAISED :
                    return <RemoteRaisedButton {...passingProps}/>;
                case REMOTE_COMPONENT.BUTTON_ICON :
                    return <RemoteIconButton {...passingProps}/>;
                case REMOTE_COMPONENT.BUTTON_FAB :
                    return <RemoteFloatingActionButton {...passingProps}/>;


                case REMOTE_COMPONENT.TEXT :
                    return <RemoteTextField {...passingProps}/>;


                case REMOTE_COMPONENT.FORM :
                    return <RemoteForm {...passingProps}/>;
            }
        }
    };

    render() {
        let {config = []} = this.props;
        return (
            <div>{this.getRemoteUI(config, 0)}</div>
        );
    }

}

ReactElement.propTypes = {};
ReactElement.defaultProps = {};

export default ReactElement;
