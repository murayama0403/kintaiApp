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
                <TimeInput type={IN} value={this.props.value.kintai.inTime} onSelected={this.handleInSelected.bind(this)} />
                <TimeInput type={OUT} value={this.props.value.kintai.outTime} onSelected={this.handleOutSelected.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.inputPage.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.inputPage.currentDate, value)
    }
}