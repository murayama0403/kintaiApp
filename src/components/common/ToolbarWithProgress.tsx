import LinearProgress from "material-ui/LinearProgress"
import * as React from "react"
import { RootProps } from "../../RootProps"

export class ToolbarWithProgress extends React.Component<RootProps, {}> {
    public render() {
        const progressVisibility = this.props.value.view.isSending ? "visible" : "hidden"

        return (
            <div className="toolbar">
                {this.props.children}
                <LinearProgress mode="indeterminate" style={{ visibility: progressVisibility }} />
            </div>
        )
    }

}
