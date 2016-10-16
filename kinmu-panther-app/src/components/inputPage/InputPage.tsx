import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";
import {BottomToolbar} from "./BottomToolbar";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class InputPage extends React.Component<Props, {}> {
    render() {
        return (
            <Ons.Page renderToolbar={() => <Toolbar {...this.props} />}>
                <Main {...this.props} />
                <BottomToolbar {...this.props} />
            </Ons.Page>
        )
    }

}