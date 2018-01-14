import React from "react";
import FlatButton from "material-ui/FlatButton";
import {FloatingActionButton, RaisedButton} from "material-ui";

export const RemoteFlatButton = (props) => {
    let {icon, iconColor, ...otherProps} = props;
    icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
    props = {icon, ...otherProps};
    return (
        <FlatButton {...props}/>
    )
};

export const RemoteRaisedButton = (props) => {
    let {icon, iconColor, ...otherProps} = props;
    icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
    props = {icon, ...otherProps};
    return (
        <RaisedButton {...props}/>
    )
};

export const RemoteFloatingActionButton = (props) => {
    let {icon, iconColor, ...otherProps} = props;
    icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
    props = {icon, ...otherProps};
    return (
        <FloatingActionButton {...props}>
            <i className="material-icons" style={{color: iconColor}}>{icon}</i>
        </FloatingActionButton>
    )
};

export const RemoteIconButton = (props) => {
    let {icon, iconColor, ...otherProps} = props;
    icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
    props = {icon, ...otherProps};
    return (
        <i className="material-icons" style={{color: iconColor}} {...props}>{icon}</i>
    )
};
