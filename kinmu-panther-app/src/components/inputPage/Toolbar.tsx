import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

const DAY_OF_WEEKS = ['日', '月', '火', '水', '木', '金', '土']

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
        const date = new Date(this.props.value.inputPage.currentDate)
        date.setDate(date.getDate() - 1)
        this.props.actions.moveCurrentDate(date)
    }

    private handleAfter() {
        const date = new Date(this.props.value.inputPage.currentDate)
        date.setDate(date.getDate() + 1)
        this.props.actions.moveCurrentDate(date)
    }

    private formatCurrentDate() {
        const date = this.props.value.inputPage.currentDate
        return date.getMonth() + 1 + "/" + date.getDate() + "(" + DAY_OF_WEEKS[date.getDay()] + ")" 
    }
}
