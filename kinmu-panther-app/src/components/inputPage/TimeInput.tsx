import * as React from "react";
import {DispatchActions} from "../../DispatchActions"
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {TouchTapEvent} from 'material-ui'
import * as _ from "lodash"

interface Props {
    type: InputType;
    value: string;
    onSelected: (value: string) => void;
}

const TIMES = [':00', ':15', ':30', ':45']

export const IN: InputType = {
    label: "出勤",
    menus: createMenus("9:00")
}

export const OUT: InputType = {
    label: "退勤",
    menus: createMenus("17:45")
}

interface InputType {
    label: string;
    menus: Array<any>
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
    render() {
        return (
            <SelectField
                hintText={this.props.type.label}
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
                autoWidth={true}
                fullWidth={true}
            >
                {this.props.type.menus}
            </SelectField>
        )
    }

    private handleChange(event: TouchTapEvent, index: number, value: string) {
        event.preventDefault()
        this.props.onSelected(value)
    }
}