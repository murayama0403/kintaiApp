import {TouchTapEvent} from "material-ui"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import * as React from "react"
import {RootProps} from "../../RootProps"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const buttonLabel = this.props.value.view.isSending ? "送信中..." : "勤務表送信"
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

    private handleEmailChange(_: Event, value: string) {
        this.props.actions.inputEmail(value)
    }

    private handlePasswordChange(_: Event, value: string) {
        this.props.actions.inputPassword(value)
    }

    private handleSend(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.sendMonth(
            this.props.value.kintai,
            this.props.value.view.currentDate,
            this.props.value.view.password)
    }

}
