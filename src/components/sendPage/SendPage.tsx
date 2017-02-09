import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import {MonthToolbar} from "../common/MonthToolbar";
import {Main} from "./Main";
import {FooterTab} from "../common/FooterTab";

export class SendPage extends React.Component<RootProps, {}> {
    render() {
        return (
            <div>
                <MonthToolbar {...this.props} />
                <Main {...this.props}/>
            </div>
        )
    }

}