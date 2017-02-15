import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import {ToolbarWithProgress} from './ToolbarWithProgress'
import {moveMonths, formatMonth} from '../../DateUtils'

export class MonthToolbar extends React.Component<RootProps, {}> {
    private buttons = <div>
            <IconButton onTouchTap={this.handleBefore.bind(this)} >
                <ArrowLeftIcon color="white" />
            </IconButton>
            <IconButton onTouchTap={this.handleAfter.bind(this)}>
                <ArrowRightIcon color="white" />
            </IconButton>
        </div>

    render() {
        return (
            <ToolbarWithProgress {...this.props}>
                <AppBar
                    title={this.formatCurrentMonth()}
                    showMenuIconButton={false}
                    iconElementRight={this.buttons} />
            </ToolbarWithProgress>
        )
    }

    private handleBefore(event: Event) {
        event.preventDefault()
        const date = moveMonths(this.props.value.view.currentDate, -1)
        this.props.actions.moveCurrentDate(date)
    }

    private handleAfter(event: Event) {
        event.preventDefault()
        const date = moveMonths(this.props.value.view.currentDate, 1)
        this.props.actions.moveCurrentDate(date)
    }

    private formatCurrentMonth() {
        return formatMonth(this.props.value.view.currentDate)
    }
}
