import * as React from "react"
import {GlobalState} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {TimeInput, IN} from "./TimeInput"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Main extends React.Component<Props, {}> {
    
    render() {
        return (
            <div>
                <TimeInput type={IN} value={this.props.value.inTime} onSelected={this.handleInSelected.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        console.log(value)
    }
}