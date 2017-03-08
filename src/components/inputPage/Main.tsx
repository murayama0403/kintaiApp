import TextField from "material-ui/TextField"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)

        return (
            <div className="content">
                <TimeInput
                    type={IN}
                    value={currentKintai.inTime}
                    onSelected={(event) => this.handleInSelected(event)} />
                <TimeInput
                    type={OUT}
                    value={currentKintai.outTime}
                    onSelected={(event) => this.handleOutSelected(event)} />
                <TextField
                    multiLine={true}
                    fullWidth={true}
                    hintText="メモ（勤務表には反映されません）"
                    value={currentKintai.memo}
                    onChange={(_, value) => this.handleMemoChange(value)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

}
