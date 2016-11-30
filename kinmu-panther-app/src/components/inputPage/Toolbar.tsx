import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import {IconMenuAll} from "./IconMenu";
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {DatePickers} from "./Calendar";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

function handleTouchTap() {
  return DatePickers; 
}

export class Toolbar extends React.Component<Props, {}> {
    render() {
        return (
            <AppBar title={this.formatCurrentDate()}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={<IconButton><IconMenuAll /></IconButton>}
            iconElementRight={<FlatButton label="Save" />}/>
        )
    }

    private formatCurrentDate() {
        const date = this.props.value.currentDate
        return date.getMonth() + 1 + "月" + date.getDate() + "日" 
    }
}