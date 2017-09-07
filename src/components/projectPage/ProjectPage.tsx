import AppBar from "material-ui/AppBar"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { ToolbarWithProgress } from "../common/ToolbarWithProgress"
import { Main } from "./Main"

export class ProjectPage extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div>
                <ToolbarWithProgress {...this.props}>
                    <AppBar
                        title="プロジェクト"
                        showMenuIconButton={false} />
                </ToolbarWithProgress>
                <Main {...this.props} />
            </div>
        )
    }
}
