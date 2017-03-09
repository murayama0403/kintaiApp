import { TouchTapEvent } from "material-ui"
import RaisedButton from "material-ui/RaisedButton"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"

export class RestInput extends React.Component<RootProps, {}> {
    public render() {
        const dayKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)

        return (
            <div style={{ display: "flex" }}>
                <RaisedButton
                    primary={dayKintai.rest1}
                    style={{height: "auto"}}
                    onTouchTap={(event) => this.handleRest1(event)}>
                    17:45<br />18:00
                </RaisedButton>
            </div>
        )
    }

    private handleRest1(event: TouchTapEvent) {
        event.preventDefault()
        const dayKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)
        this.props.actions.rest1(this.props.value.view.currentDate, !dayKintai.rest1)
    }
}
