import * as React from "react"
import { RootProps } from "../../RootProps"
import { MonthToolbar } from "../common/MonthToolbar"
import { Main } from "./Main"

export class SendPage extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div>
                <MonthToolbar {...this.props} />
                <Main {...this.props} />
            </div>
        )
    }
}
