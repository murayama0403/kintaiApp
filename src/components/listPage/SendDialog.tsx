import * as React from "react";
import {RootProps} from "../../RootProps";
import {DispatchActions} from "../../DispatchActions"
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import {TouchTapEvent} from 'material-ui'

export class SendDialog extends React.Component<RootProps, {}> {
    
    render() {
        const actions = [
        <FlatButton
            label="キャンセル"
            primary={true}
            onTouchTap={this.handleClose.bind(this)}
        />,
        <FlatButton
            label="送信"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleSend.bind(this)}
        />,
        ];
        return (
            <Dialog
                title="勤務表送信"
                actions={actions}
                open={this.props.value.listPage.isSendDialogOpen}
                onRequestClose={this.handleClose.bind(this)}
                autoScrollBodyContent={true}
                contentStyle={{width: "94%"}} >

                <List>
                    <TextField
                        hintText="送信先アドレス"
                        value={this.props.value.kintai.person.email}
                        onChange={this.handleEmailChange.bind(this)}
                        style={{width: "174px"}} />@sji-inc.jp
                    <br />
                    <TextField
                        hintText="パスワード"
                        type="password"
                        value={this.props.value.listPage.password}
                        onChange={this.handlePasswordChange.bind(this)} />
                </List>
                
            </Dialog>
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
            this.props.value.listPage.currentDate,
            this.props.value.listPage.password)
        this.props.actions.closeSendDialog()
    }

    private handleClose() {
        this.props.actions.closeSendDialog()
    }
}