import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
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
            <InputPage {...this.props} />
        )
    }

}