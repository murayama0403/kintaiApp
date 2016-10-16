import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Main extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <Ons.Row>
                    <Ons.Col width="78px" verticalAlign="bottom">
                        <div>出勤:</div>
                    </Ons.Col>
                    <Ons.Col verticalAlign="bottom">
                        <input type="text"
                            className="text-input text-input--underbar"
                            value={this.props.value.inTime}
                            onClick={this.handleClickIn.bind(this)}
                            readOnly={true}></input>
                    </Ons.Col>
                </Ons.Row>
                <Ons.Row>
                    <Ons.Col width="78px" verticalAlign="bottom">
                        <div>退勤:</div>
                    </Ons.Col>
                    <Ons.Col verticalAlign="bottom">
                        <input type="text"
                            className="text-input text-input--underbar"
                            value={this.props.value.outTime}
                            onClick={this.handleClickOut.bind(this)}
                            readOnly={true}></input>
                    </Ons.Col>
                </Ons.Row>
            </div>
        )
    }

    private handleClickIn(e: Event): void {
        // TODO 実装
    }
    
    private handleClickOut(e: Event): void {
        // TODO 実装
    }
}