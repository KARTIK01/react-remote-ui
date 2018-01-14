import React, {Component} from "react";
import map from "lodash/map";
import AppBar from "./AppBar";
import {WxComponents} from "../utils/Constants";

class ReactElement extends Component {

    render() {
        return (
            <div>{this.getUI(this.props.fields, 0)}</div>
        );
    }

    getUI = (fields, index = 0) => {
        let returnObj = undefined;
        if (fields instanceof Array) {
            returnObj = map(fields, (listItem, index) => getUI(listItem, index));
            return returnObj; // Process if item is not an Array
        } else if (fields) {
            let passingProps = {
                elementState: elementState,
                metadata: fields,
                key: index,
                style: item.style,
                onClick: this.onClick
            };
            switch (item.type) {
                case WxComponents.APP_BAR :
                    return <AppBar {...passingProps}/>
            }
        }

    };
}

ReactElement.propTypes = {};
ReactElement.defaultProps = {};

export default ReactElement;
