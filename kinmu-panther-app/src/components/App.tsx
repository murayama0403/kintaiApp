import * as React from "react";
import {RootProps} from '../RootProps'

export class App extends React.Component<RootProps, {}> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}