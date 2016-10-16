import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class BottomToolbar extends React.Component<Props, {}> {
    render() {
        return (
            <Ons.BottomToolbar>
                <Ons.Row>
                    <Ons.Col verticalAlign="bottom" style={{textAlign: 'right'}}>
                        <Ons.Button onClick={this.handleQuickInClick.bind(this)}>出</Ons.Button>
                    </Ons.Col>
                    <Ons.Col verticalAlign="bottom" style={{marginLeft: '4px', marginRight: '4px'}}>
                        <input type="text" className="text-input text-input--underbar" defaultValue="現在時刻" style={{textAlign: 'center'}}></input>
                    </Ons.Col>
                    <Ons.Col verticalAlign="bottom" style={{textAlign: 'left'}}>
                        <Ons.Button onClick={this.handleQuickOutClick.bind(this)}>退</Ons.Button>
                    </Ons.Col>
                </Ons.Row>
            </Ons.BottomToolbar>
        )
    }

    private handleQuickInClick() {
        this.props.actions.quickIn()
    }

    private handleQuickOutClick() {
        this.props.actions.quickOut()
    }
}