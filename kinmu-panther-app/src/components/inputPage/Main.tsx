import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import {TimeInput, IN, OUT} from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    render() {
        const currentKintai = getDayKintai(this.props.value.kintai, this.props.value.inputPage.currentDate)

        return (
            <div>
                <List>
                    <TimeInput type={IN} value={currentKintai.inTime} onSelected={this.handleInSelected.bind(this)} />
                    <TimeInput type={OUT} value={currentKintai.outTime} onSelected={this.handleOutSelected.bind(this)} />
                </List>
                <TextField hintText="休暇" value={currentKintai.holiday} onChange={this.handleHolidayChange.bind(this)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.inputPage.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.inputPage.currentDate, value)
    }

    private handleHolidayChange(event: any) {
        this.props.actions.inputHoliday(this.props.value.inputPage.currentDate, event.target.value)
    }

}