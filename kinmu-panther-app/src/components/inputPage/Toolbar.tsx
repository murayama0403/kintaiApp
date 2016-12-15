import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import {moveDates, formatDate} from '../../DateUtils'

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Toolbar extends React.Component<Props, {}> {
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
                title={this.formatCurrentDate()}
                showMenuIconButton={false}
                iconElementRight={this.buttons} />
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

    private formatCurrentDate() {
        return formatDate(this.props.value.inputPage.currentDate)
    }
}
