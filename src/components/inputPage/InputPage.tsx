import * as React from "react"
import { RootProps } from "../../RootProps"
import { Main } from "./Main"
import { Toolbar } from "./Toolbar"

export class InputPage extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div>
                <Toolbar {...this.props} />
                <Main {...this.props} />
            </div>
        )
    }

}
