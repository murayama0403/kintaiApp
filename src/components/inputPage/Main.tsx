import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../KintaiUtils"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import {TimeInput, IN, OUT} from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    render() {
        const currentKintai = getDayKintai(this.props.value.kintai, this.props.value.view.currentDate)

        return (
            <div className="content">
                <List>
                    <TimeInput type={IN} value={currentKintai.inTime} onSelected={this.handleInSelected.bind(this)} />
                    <TimeInput type={OUT} value={currentKintai.outTime} onSelected={this.handleOutSelected.bind(this)} />
                </List>
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

    private handleHolidayChange(event: any) {
        this.props.actions.inputHoliday(this.props.value.view.currentDate, event.target.value)
    }

}