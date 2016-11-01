import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Toolbar extends React.Component<Props, {}> {
    render() {
        return (
            <AppBar title={this.formatCurrentDate()} showMenuIconButton={false} />
        )
    }

    private formatCurrentDate() {
        const date = this.props.value.currentDate
        return date.getMonth() + 1 + "月" + date.getDate() + "日" 
    }
}