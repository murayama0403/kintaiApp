import * as React from "react"
import {GlobalState} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {TimeInput, IN, OUT} from "./TimeInput"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 180,
    },
    center:{
        margin: '0 auto',
        marginBottom: '0 auto',
        display:'flex',
        width: '50%',
    }
};

export class Main extends React.Component<Props, {}> {
    
    render() {
        return (
            <div>
                <div style={styles.center}>
                    <TimeInput type={IN} value={this.props.value.inTime} onSelected={this.handleInSelected.bind(this)} />
                </div>
                <div style={styles.center}>
                    <TimeInput type={OUT} value={this.props.value.outTime} onSelected={this.handleOutSelected.bind(this)} />
                </div>
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