import * as React from "react"
import {GlobalState} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {TimeInput, IN, OUT} from "./TimeInput"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Main extends React.Component<Props, {}> {
    
    render() {
        return (
            <div>
                <TimeInput type={IN} value={this.props.value.inTime} onSelected={this.handleInSelected.bind(this)} />
                <TimeInput type={OUT} value={this.props.value.outTime} onSelected={this.handleOutSelected.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(value)
    }
}