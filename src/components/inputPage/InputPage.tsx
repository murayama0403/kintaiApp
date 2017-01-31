import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";
import {FooterTab} from "../common/FooterTab";

export class InputPage extends React.Component<RootProps, {}> {
    render() {
        return (
            <div>
                <Toolbar {...this.props} />
                <Main {...this.props}/>
                <FooterTab {...this.props}/>
            </div>
        )
    }

}