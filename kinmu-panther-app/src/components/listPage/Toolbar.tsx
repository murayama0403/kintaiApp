import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import {moveMonths, formatMonth} from '../../DateUtils'

export class Toolbar extends React.Component<RootProps, {}> {
    private buttons = <div>
            <IconButton onClick={this.handleBefore.bind(this)} >
                <ArrowLeft color="white" />
            </IconButton>
            <IconButton onClick={this.handleAfter.bind(this)}>
                <ArrowRight color="white" />
            </IconButton>
        </div>

    render() {
        return (
            <AppBar
                title={this.formatCurrentMonth()}
                showMenuIconButton={false}
                iconElementRight={this.buttons} />
        )
    }

    private handleBefore() {
        const date = moveMonths(this.props.value.listPage.currentDate, -1)
        this.props.actions.moveCurrentMonth(date)
    }

    private handleAfter() {
        const date = moveMonths(this.props.value.listPage.currentDate, 1)
        this.props.actions.moveCurrentMonth(date)
    }

    private formatCurrentMonth() {
        return formatMonth(this.props.value.listPage.currentDate)
    }
}
