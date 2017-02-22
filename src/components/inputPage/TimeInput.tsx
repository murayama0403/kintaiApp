import { TouchTapEvent } from "material-ui"
import IconButton from "material-ui/IconButton"
import MenuItem from "material-ui/MenuItem"
import SelectField from "material-ui/SelectField"
import ActionSchedule from "material-ui/svg-icons/action/schedule"
import ActionUpdate from "material-ui/svg-icons/action/update"
import * as React from "react"
import { ceil15Minutes, floor15Minutes, formatTime } from "../../DateUtils"

interface Props {
    type: InputType
    value: string
    onSelected: (value: string) => void
}

interface InputType {
    label: string
    regularTime: string
    menus: JSX.Element[]
    adjustTime: (date: Date) => Date
}

const TIMES = [":00", ":15", ":30", ":45"]

const REGULAR_TIME_IN = "9:00"
const REGULAR_TIME_OUT = "17:45"

export const IN: InputType = {
    label: "出勤",
    regularTime: REGULAR_TIME_IN,
    menus: createMenus(REGULAR_TIME_IN),
    adjustTime: ceil15Minutes,
}

export const OUT: InputType = {
    label: "退勤",
    regularTime: REGULAR_TIME_OUT,
    menus: createMenus(REGULAR_TIME_OUT),
    adjustTime: floor15Minutes,
}

function createMenus(defaultValue: string): JSX.Element[] {
    const menus: JSX.Element[] = []
    for (let h = 0; h < 24; h++) {
        TIMES.forEach((time) => {
            const value = h + time
            if (value === defaultValue) {
                menus.push(<MenuItem key="" value="" primaryText="" />)
                menus.push(<MenuItem key="---" value="---" primaryText="---" />)
            }
            menus.push(<MenuItem key={value} value={value} primaryText={value} />)
        })
    }
    return menus
}

export class TimeInput extends React.Component<Props, {}> {
    public render() {
        return (
            <div style={{ display: "flex" }}>
                <SelectField
                    hintText={this.props.type.label}
                    value={this.props.value}
                    onChange={this.handleChange.bind(this)}
                    style={{ width: "200px" }}
                    labelStyle={{ height: "48px" }}
                >
                    {this.props.type.menus}
                </SelectField>
                <IconButton onTouchTap={this.handleNow.bind(this)}>
                    <ActionUpdate />
                </IconButton>
                <IconButton onTouchTap={this.handleRegular.bind(this)}>
                    <ActionSchedule />
                </IconButton>
            </div>
        )
    }

    private handleChange(event: Event, _: number, value: string) {
        event.preventDefault()
        this.props.onSelected(value)
    }

    private handleNow(event: TouchTapEvent) {
        event.preventDefault()
        const time = this.props.type.adjustTime(new Date())
        this.props.onSelected(formatTime(time))
    }

    private handleRegular(event: TouchTapEvent) {
        event.preventDefault()
        this.props.onSelected(this.props.type.regularTime)
    }

}
