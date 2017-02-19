import * as React from "react";
import {RootProps} from "../../RootProps";
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";

export class InputPage extends React.Component<RootProps, {}> {
    render() {
        return (
            <div>
                <Toolbar {...this.props} />
                <Main {...this.props}/>
            </div>
        )
    }

}