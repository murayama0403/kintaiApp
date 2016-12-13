import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import {IconMenuAll} from "./IconMenu";
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionInput from 'material-ui/svg-icons/action/input';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

const style = {
  margin: 12,
};

export class Toolbar extends React.Component<Props, {}> {
    render() {
        return (
            <AppBar title={this.formatCurrentDate()}
            iconElementLeft={<IconMenuAll />}
            iconElementRight={<RaisedButton label="SAVE" style={style} />}
            titleStyle={{textAlign: "center"}}/>
        )
    }

    private formatCurrentDate() {
        const date = this.props.value.currentDate
        return date.getMonth() + 1 + "月" + date.getDate() + "日" 
    }
}