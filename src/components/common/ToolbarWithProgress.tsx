import * as React from "react";
import {RootProps} from "../../RootProps";
import LinearProgress from 'material-ui/LinearProgress'

export class ToolbarWithProgress extends React.Component<RootProps, {}> {
    render() {
        const progressVisibility = this.props.value.view.isSending? 'visible': 'hidden'

        return (
            <div className="toolbar">
                {this.props.children}
                <LinearProgress mode="indeterminate" style={{visibility: progressVisibility}}/>
            </div>
        )
    }

}
