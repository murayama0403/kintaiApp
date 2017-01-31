import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import {moveDates, formatDate, getDayColor} from '../../DateUtils'

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
            <div className="toolbar">
                <AppBar
                    title={this.createTitle()}
                    showMenuIconButton={false}
                    iconElementRight={this.buttons} />
            </div>
        )
    }

    private handleBefore() {
        const date = moveDates(this.props.value.inputPage.currentDate, -1)
        this.props.actions.moveCurrentDate(date)
    }

    private handleAfter() {
        const date = moveDates(this.props.value.inputPage.currentDate, 1)
        this.props.actions.moveCurrentDate(date)
    }

    private createTitle() {
        const dayStyle = this.getDayStyle(this.props.value.inputPage.currentDate)
        const text = formatDate(this.props.value.inputPage.currentDate)
        return <span style={dayStyle}>{text}</span>
    }

    private getDayStyle(date: Date) {
        const color = getDayColor(date)
        if (color) {
            return {
                color: color
            }
        }
        return {}
    }
}
