import Dialog from "material-ui/Dialog"
import Snackbar from "material-ui/Snackbar"
import * as React from "react"
import { RootProps } from "../../RootProps"

export class SendStatus extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div>
                <Snackbar
                    open={this.props.value.view.isShowSendSuccessMessage}
                    message="勤務表を送信しました"
                    autoHideDuration={2000}
                    onRequestClose={this.handleCloseSendSuccess.bind(this)} />
                <Dialog
                    open={this.props.value.view.sendErrorMessage != null}
                    title="エラー"
                    onRequestClose={this.handleCloseError.bind(this)} >
                    {this.props.value.view.sendErrorMessage}
                </Dialog>
            </div>
        )
    }

    private handleCloseSendSuccess() {
        this.props.actions.closeSendSuccessMessage()
    }

    private handleCloseError() {
        this.props.actions.closeSendErrorMessage()
    }
}
