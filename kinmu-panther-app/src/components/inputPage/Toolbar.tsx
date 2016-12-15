import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import * as moment from 'moment'

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
        const date = moment(this.props.value.inputPage.currentDate).add(-1, 'days')
        this.props.actions.moveCurrentDate(date.toDate())
    }

    private handleAfter() {
        const date = moment(this.props.value.inputPage.currentDate).add(1, 'days')
        this.props.actions.moveCurrentDate(date.toDate())
    }

    private formatCurrentDate() {
        return moment(this.props.value.inputPage.currentDate).format('MM/DD(ddd)')
    }
}
