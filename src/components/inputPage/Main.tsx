import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintaiOrDefault} from "../../KintaiUtils"
import TextField from 'material-ui/TextField'
import {TimeInput, IN, OUT} from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)

        return (
            <div className="content">
                <TimeInput type={IN} value={currentKintai.inTime} onSelected={this.handleInSelected.bind(this)} />
                <TimeInput type={OUT} value={currentKintai.outTime} onSelected={this.handleOutSelected.bind(this)} />
                <TextField hintText="休暇" defaultValue={currentKintai.holiday} onChange={this.handleHolidayChange.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value)
    }

    private handleHolidayChange(_event: Event, value: string) {
        this.props.actions.inputHoliday(this.props.value.view.currentDate, value)
    }

}