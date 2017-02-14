import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../KintaiUtils"
import {getMonthDates, formatDateForListItem, getDayColor} from "../../DateUtils"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'
import {TouchTapEvent} from 'material-ui'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class Main extends React.Component<RootProps, {}> {
    render() {
        const buttonLabel = this.props.value.view.isSending? '送信中...': '勤務表送信'
        return (
            <div className="content">
                <TextField
                    hintText="送信先アドレス"
                    defaultValue={this.props.value.kintai.person.email}
                    onChange={this.handleEmailChange.bind(this)}
                    style={{width: "192px"}} />@caica.jp
                <br />
                <TextField
                    hintText="zipパスワード"
                    type="password"
                    defaultValue={this.props.value.view.password}
                    onChange={this.handlePasswordChange.bind(this)} />
                <br />
                <RaisedButton
                    label={buttonLabel}
                    primary={true}
                    onTouchTap={this.handleSend.bind(this)}
                    disabled={this.props.value.view.isSending} />
            </div>
        )
    }

    private handleEmailChange(event: any) {
        event.preventDefault()
        this.props.actions.inputEmail(event.target.value)
    }

    private handlePasswordChange(event: any) {
        event.preventDefault()
        this.props.actions.inputPassword(event.target.value)
    }

    private handleSend(event: Event) {
        event.preventDefault()
        this.props.actions.sendMonth(
            this.props.value.kintai,
            this.props.value.view.currentDate,
            this.props.value.view.password)
    }

}