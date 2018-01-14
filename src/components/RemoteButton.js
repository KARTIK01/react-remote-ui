import React from "react";
import FlatButton from "material-ui/FlatButton";
import {FloatingActionButton, IconButton, RaisedButton} from "material-ui";

export const RemoteFlatButton = (props) => {
    return (
        <FlatButton {...props}/>
    )
};

export const RemoteRaisedButton = (props) => {
    return (
        <RaisedButton {...props}/>
    )
};

export const RemoteFloatingActionButton = (props) => {
    return (
        <FloatingActionButton {...props}/>
    )
};

export const RemoteIconButton = (props) => {
    return (
        <IconButton {...props}/>
    )
};
