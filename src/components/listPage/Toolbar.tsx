import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {moveMonths, formatMonth} from '../../DateUtils'

export class Toolbar extends React.Component<RootProps, {}> {
    private buttons = <div>
            <IconButton onClick={this.handleBefore.bind(this)} >
                <ArrowLeftIcon color="white" />
            </IconButton>
            <IconButton onClick={this.handleAfter.bind(this)}>
                <ArrowRightIcon color="white" />
            </IconButton>
            <IconMenu useLayerForClickAway={true} iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}>
                <MenuItem onClick={this.handleSend.bind(this)} primaryText="送信" />
            </IconMenu>
        </div>

    render() {
        return (
            <div className="toolbar">
                <AppBar
                    title={this.formatCurrentMonth()}
                    showMenuIconButton={false}
                    iconElementRight={this.buttons} />
            </div>
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

    private handleSend() {
        this.props.actions.sendMonth(this.props.value.kintai, this.props.value.listPage.currentDate)
    }

    private formatCurrentMonth() {
        return formatMonth(this.props.value.listPage.currentDate)
    }
}
