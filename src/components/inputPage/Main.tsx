import TextField from "material-ui/TextField"
import * as React from "react"
import { getDayKintaiOrDefault } from "../../KintaiUtils"
import { RootProps } from "../../RootProps"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)

        return (
            <div className="content">
                <TimeInput
                    type={IN}
                    value={currentKintai.inTime}
                    onSelected={this.handleInSelected.bind(this)} />
                <TimeInput
                    type={OUT}
                    value={currentKintai.outTime}
                    onSelected={this.handleOutSelected.bind(this)} />
                <TextField
                    hintText="休暇"
                    defaultValue={currentKintai.holiday}
                    onChange={this.handleHolidayChange.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value)
    }

    private handleHolidayChange(_: Event, value: string) {
        this.props.actions.inputHoliday(this.props.value.view.currentDate, value)
    }

}
