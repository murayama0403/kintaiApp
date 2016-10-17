import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import {TimeRow} from "./TimeRow"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Main extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <TimeRow label="出勤" time={this.props.value.inTime} actions={this.props.actions} />
                <TimeRow label="退勤" time={this.props.value.outTime} actions={this.props.actions} />
            </div>
        )
    }
}