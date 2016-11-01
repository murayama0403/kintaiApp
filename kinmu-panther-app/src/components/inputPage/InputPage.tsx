import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";
import {BottomToolbar} from "./BottomToolbar";
import RaisedButton from 'material-ui/RaisedButton';

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class InputPage extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <Toolbar {...this.props} />
                <RaisedButton label="Default" />
            </div>
        )
    }

}