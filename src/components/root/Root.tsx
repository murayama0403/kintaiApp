import * as React from "react";
import {RootProps} from "../../RootProps";
import {FooterTab} from '../common/FooterTab'
import {SendStatus} from './SendStatus'

export class Root extends React.Component<RootProps, {}> {
    render() {
        return (
            <div>
                {this.props.children}
                <SendStatus {...this.props} />
                <FooterTab {...this.props} />
            </div>
        )
    }
}