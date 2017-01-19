import * as React from "react";
import {DispatchActions} from "../../DispatchActions"
import SelectField from 'material-ui/SelectField'
import {ListItem} from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ActionSchedule from 'material-ui/svg-icons/action/schedule'
import ActionUpdate from 'material-ui/svg-icons/action/update'
import {TouchTapEvent} from 'material-ui'
import {ceil15Minutes, floor15Minutes, formatTime} from '../../DateUtils'

interface Props {
    type: InputType;
    value: string;
    onSelected: (value: string) => void;
}

interface InputType {
    label: string;
    regularTime: string
    menus: Array<any>
    adjustTime: (date: Date) => Date
}

const TIMES = [':00', ':15', ':30', ':45']

const REGULAR_TIME_IN = '9:00'
const REGULAR_TIME_OUT = '17:45'

export const IN: InputType = {
    label: "出勤",
    regularTime: REGULAR_TIME_IN,
    menus: createMenus(REGULAR_TIME_IN),
    adjustTime: ceil15Minutes
}

export const OUT: InputType = {
    label: "退勤",
    regularTime: REGULAR_TIME_OUT,
    menus: createMenus(REGULAR_TIME_OUT),
    adjustTime: floor15Minutes
}

const listInnerStyle = {
    paddingLeft: "4px",
    paddingRight: "4px",
    paddingTop: "0px",
    paddingBottom: "0px"
}

function createMenus(defaultValue: string): Array<any> {
    var menus: Array<any> = []
    for (var h = 0; h < 24; h++) {
        TIMES.forEach(time => {
            const value = h + time
            if (value == defaultValue) {
                menus.push(<MenuItem key="" value="" primaryText="" />)
                menus.push(<MenuItem key="---" value="---" primaryText="---" />)
            }
            menus.push(<MenuItem key={value} value={value} primaryText={value} />)
        })
    }
    return menus
}

export class TimeInput extends React.Component<Props, {}> {
    private quickButtons =
            <div>
                <IconButton onClick={this.handleNow.bind(this)}>
                    <ActionUpdate />
                </IconButton>
                <IconButton onClick={this.handleRegular.bind(this)}>
                    <ActionSchedule />
                </IconButton>
            </div>

    render() {
        return (
            <ListItem innerDivStyle={listInnerStyle} rightIconButton={this.quickButtons} disabled={true}>
                <SelectField
                    hintText={this.props.type.label}
                    value={this.props.value}
                    onChange={this.handleChange.bind(this)}
                    style={{width: "200px"}}
                    labelStyle={{height: "48px"}}
                    >
                    {this.props.type.menus}
                </SelectField>
            </ListItem>
        )
    }

    private handleChange(event: TouchTapEvent, index: number, value: string) {
        event.preventDefault()
        this.props.onSelected(value)
    }

    private handleNow() {
        const time = this.props.type.adjustTime(new Date())
        this.props.onSelected(formatTime(time))
    }

    private handleRegular() {
        this.props.onSelected(this.props.type.regularTime)
    }

}