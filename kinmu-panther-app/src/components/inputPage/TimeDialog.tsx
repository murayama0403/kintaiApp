import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class TimeDialog extends React.Component<Props, {}> {
    render() {
        return (
            <Ons.Dialog isOpen={this.props.value.timeDialogShown} onCancel={this.handleOnCancel.bind(this)} >
                <div>dialog</div>
            </Ons.Dialog>
        )
    }

    private handleOnCancel() {
        this.props.actions.hideTimeDialog()
    }
}