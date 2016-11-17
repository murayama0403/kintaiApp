import * as React from "react";
import {GlobalState} from "../States";
import {DispatchActions} from "../DispatchActions"
import {InputPage} from "./inputPage/InputPage";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class App extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <InputPage value={this.props.value.inputPage} actions={this.props.actions} />
            </div>
        )
    }

}