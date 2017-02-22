import { TouchTapEvent } from "material-ui"
import AppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import ArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left"
import ArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right"
import * as React from "react"
import { formatDate, getDayColor, moveDates } from "../../DateUtils"
import { RootProps } from "../../RootProps"
import { ToolbarWithProgress } from "../common/ToolbarWithProgress"

export class Toolbar extends React.Component<RootProps, {}> {
    private buttons = <div>
        <IconButton onTouchTap={this.handleBefore.bind(this)} >
            <ArrowLeft color="white" />
        </IconButton>
        <IconButton onTouchTap={this.handleAfter.bind(this)}>
            <ArrowRight color="white" />
        </IconButton>
    </div>

    public render() {
        return (
            <ToolbarWithProgress {...this.props}>
                <AppBar
                    title={this.createTitle()}
                    showMenuIconButton={false}
                    iconElementRight={this.buttons} />
            </ToolbarWithProgress>
        )
    }

    private handleBefore(event: TouchTapEvent) {
        event.preventDefault()
        const date = moveDates(this.props.value.view.currentDate, -1)
        this.props.actions.moveCurrentDate(date)
    }

    private handleAfter(event: TouchTapEvent) {
        event.preventDefault()
        const date = moveDates(this.props.value.view.currentDate, 1)
        this.props.actions.moveCurrentDate(date)
    }

    private createTitle() {
        const dayStyle = this.getDayStyle(this.props.value.view.currentDate)
        const text = formatDate(this.props.value.view.currentDate)
        return <span style={dayStyle}>{text}</span>
    }

    private getDayStyle(date: Date) {
        const color = getDayColor(date)
        if (color) {
            return {
                color,
            }
        }
        return {}
    }
}
