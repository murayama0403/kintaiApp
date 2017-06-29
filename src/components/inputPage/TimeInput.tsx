import IconButton from "material-ui/IconButton"
import ActionUpdate from "material-ui/svg-icons/action/update"
import ContentClear from "material-ui/svg-icons/content/clear"
import NavigationCheck from "material-ui/svg-icons/navigation/check"
import TimePicker from "material-ui/TimePicker"
import * as React from "react"
import { HOLIDAY_TIME_VALUE } from "../../constants/Holidays"
import { ceil15Minutes, floor15Minutes, formatTime, parseTime } from "../../utils/DateUtils"

interface Props {
    type: InputType
    value: string
    onSelected: (value: string) => void
}

interface InputType {
    label: string
    regularTime: string
    adjustTime: (date: Date) => Date
}

const REGULAR_TIME_IN = "9:00"
const REGULAR_TIME_OUT = "17:45"

export const IN: InputType = {
    label: "出勤",
    regularTime: REGULAR_TIME_IN,
    adjustTime: ceil15Minutes,
}

export const OUT: InputType = {
    label: "退勤",
    regularTime: REGULAR_TIME_OUT,
    adjustTime: floor15Minutes,
}

export class TimeInput extends React.Component<Props, {}> {
    public render() {
        const dateValue = parseTime(this.props.value)
        const disabled = this.props.value === HOLIDAY_TIME_VALUE

        return (
            <div style={{ display: "flex" }}>
                <TimePicker
                    hintText={this.props.type.label}
                    format="24hr"
                    minutesStep={15}
                    value={dateValue}
                    onChange={(_, value) => this.handleChange(value)}
                    disabled={disabled}
                    textFieldStyle={{ width: "160px" }}
                />

                <IconButton onTouchTap={() => this.handleNow()}
                    disabled={disabled} >
                    <ActionUpdate />
                </IconButton>
                <IconButton onTouchTap={() => this.handleRegular()}
                    disabled={disabled} >
                    <NavigationCheck />
                </IconButton>
                <IconButton onTouchTap={() => this.handleClear()}
                    disabled={disabled} >
                    <ContentClear />
                </IconButton>
            </div>
        )
    }

    private handleChange(date: Date) {
        const value = formatTime(date)
        this.props.onSelected(value)
    }

    private handleNow() {
        const time = this.props.type.adjustTime(new Date())
        this.props.onSelected(formatTime(time))
    }

    private handleRegular() {
        this.props.onSelected(this.props.type.regularTime)
    }

    private handleClear() {
        this.props.onSelected("")
    }
}
