import * as React from "react"
import {GlobalState, getDayKintai} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ActionSchedule from 'material-ui/svg-icons/action/schedule'
import ActionUpdate from 'material-ui/svg-icons/action/update'
import {TimeInput, IN, OUT} from "./TimeInput"
import * as _ from "lodash"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

const listInnerStyle = {
    paddingLeft: "4px",
    paddingRight: "4px",
    paddingTop: "0px",
    paddingBottom: "0px"
}

export class Main extends React.Component<Props, {}> {
    private inButtons =
            <div>
                <IconButton onClick={this.handleInNow.bind(this)}>
                    <ActionUpdate />
                </IconButton>
                <IconButton>
                    <ActionSchedule />
                </IconButton>
            </div>

    private outButtons =
            <div>
                <IconButton onClick={this.handleOutNow.bind(this)}>
                    <ActionUpdate />
                </IconButton>
                <IconButton>
                    <ActionSchedule />
                </IconButton>
            </div>

    render() {
        const currentKintai = getDayKintai(this.props.value.kintai, this.props.value.inputPage.currentDate)

        return (
            <List>
                <ListItem innerDivStyle={listInnerStyle} rightIconButton={this.inButtons} disabled={true}>
                    <TimeInput type={IN} value={currentKintai.inTime} onSelected={this.handleInSelected.bind(this)} />
                </ListItem>
                <ListItem innerDivStyle={listInnerStyle} rightIconButton={this.outButtons} disabled={true}>
                    <TimeInput type={OUT} value={currentKintai.outTime} onSelected={this.handleOutSelected.bind(this)} />
                </ListItem>
            </List>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.inputPage.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.inputPage.currentDate, value)
    }

    private handleInNow() {
        const time = this.calcInTime(new Date())
        this.props.actions.selectIn(this.props.value.inputPage.currentDate, time)
    }

    private handleOutNow() {
        const time = this.calcOutTime(new Date())
        this.props.actions.selectOut(this.props.value.inputPage.currentDate, time)
    }

    private calcInTime(now: Date) {
        now.setMinutes(now.getMinutes() + 15);
        return this.to15minTime(now)
    }

    private calcOutTime(now: Date) {
        return this.to15minTime(now)
    }

    private to15minTime(time: Date) {
        time.setMinutes(Math.floor(time.getMinutes() / 15) * 15);
        return time.getHours().toString() + ':' + _.padStart(time.getMinutes().toString(), 2, '0')
    }
}