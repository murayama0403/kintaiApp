import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";
import {FooterTab} from '../FooterTab'

export class ListPage extends React.Component<RootProps, {}> {
    render() {
        return (
            <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
                <div>
                    <Toolbar {...this.props} />
                </div>
                <div style={{flexGrow: 1, minHeight: "100px", overflowY: "auto"}}>
                    <Main {...this.props}/>
                </div>
                <FooterTab {...this.props}/>
            </div>
        )
    }

}