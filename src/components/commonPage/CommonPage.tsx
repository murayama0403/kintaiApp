import AppBar from "material-ui/AppBar"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { ToolbarWithProgress } from "../common/ToolbarWithProgress"
import { Main } from "./Main"

export class CommonPage extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div>
                <ToolbarWithProgress {...this.props}>
                    <AppBar
                        title="共通"
                        showMenuIconButton={false} />
                </ToolbarWithProgress>
                <Main {...this.props} />
            </div>
        )
    }
}
