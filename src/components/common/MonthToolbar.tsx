import { TouchTapEvent } from "material-ui"
import AppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import ArrowLeftIcon from "material-ui/svg-icons/hardware/keyboard-arrow-left"
import ArrowRightIcon from "material-ui/svg-icons/hardware/keyboard-arrow-right"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { formatMonth, moveMonths } from "../../utils/DateUtils"
import { ToolbarWithProgress } from "./ToolbarWithProgress"

export class MonthToolbar extends React.Component<RootProps, {}> {
    private buttons = <div>
        <IconButton onTouchTap={(event) => this.handleBefore(event)} >
            <ArrowLeftIcon color="white" />
        </IconButton>
        <IconButton onTouchTap={(event) => this.handleAfter(event)}>
            <ArrowRightIcon color="white" />
        </IconButton>
    </div>

    public render() {
        return (
            <ToolbarWithProgress {...this.props}>
                <AppBar
                    title={this.formatCurrentMonth()}
                    showMenuIconButton={false}
                    iconElementRight={this.buttons} />
            </ToolbarWithProgress>
        )
    }

    private handleBefore(event: TouchTapEvent) {
        event.preventDefault()
        const date = moveMonths(this.props.value.view.currentDate, -1)
        this.props.actions.moveCurrentDate(date)
    }

    private handleAfter(event: TouchTapEvent) {
        event.preventDefault()
        const date = moveMonths(this.props.value.view.currentDate, 1)
        this.props.actions.moveCurrentDate(date)
    }

    private formatCurrentMonth() {
        return formatMonth(this.props.value.view.currentDate)
    }
}
