import * as React from "react";
import {DispatchActions} from "../../DispatchActions"
import SelectField from 'material-ui/SelectField'
import {ListItem} from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ActionSchedule from 'material-ui/svg-icons/action/schedule'
import ActionUpdate from 'material-ui/svg-icons/action/update'
import {TouchTapEvent} from 'material-ui'
import * as _ from "lodash"

interface Props {
    type: InputType;
    value: string;
    onSelected: (value: string) => void;
}

interface InputType {
    label: string;
    menus: Array<any>
    offsetMinutes: number
}

const TIMES = [':00', ':15', ':30', ':45']

export const IN: InputType = {
    label: "出勤",
    menus: createMenus("9:00"),
    offsetMinutes: 15
}

export const OUT: InputType = {
    label: "退勤",
    menus: createMenus("17:45"),
    offsetMinutes: 0
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
                <IconButton>
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
        const time = this.calcNowTime(new Date())
        this.props.onSelected(time)
    }

    private calcNowTime(now: Date) {
        now.setMinutes(now.getMinutes() + this.props.type.offsetMinutes);
        now.setMinutes(Math.floor(now.getMinutes() / 15) * 15);
        return now.getHours().toString() + ':' + _.padStart(now.getMinutes().toString(), 2, '0')
    }
}