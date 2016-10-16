import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Toolbar extends React.Component<Props, {}> {
    render() {
        return (
            <Ons.Toolbar>
                <div className='center'>{this.formatCurrentDate()}</div>
            </Ons.Toolbar>
        )
    }

    private formatCurrentDate() {
        const date = this.props.value.currentDate
        return date.getMonth() + 1 + "月" + date.getDate() + "日" 
    }
}