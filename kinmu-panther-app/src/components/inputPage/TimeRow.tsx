import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {DispatchActions} from "../../DispatchActions"

interface Props {
    label: string;
    time: string;
    actions: DispatchActions;
}

export class TimeRow extends React.Component<Props, {}> {
    render() {
        return (
            <Ons.Row>
                <Ons.Col width="78px" verticalAlign="bottom">
                    <div>{this.props.label}:</div>
                </Ons.Col>
                <Ons.Col verticalAlign="bottom">
                    <input type="text"
                        className="text-input text-input--underbar"
                        value={this.props.time}
                        onClick={this.handleClick.bind(this)}
                        readOnly={true}></input>
                </Ons.Col>
            </Ons.Row>
        )
    }

    private handleClick() {
        this.props.actions.showTimeDialog()
    }
}