import { TouchTapEvent } from "material-ui"
import { List, ListItem } from "material-ui/List"
import { red700 } from "material-ui/styles/colors"
import * as React from "react"
import { getHolidayText } from "../../constants/Holidays"
import { RootProps } from "../../RootProps"
import { formatDateForListItem, getDayColor, getMonthDates } from "../../utils/DateUtils"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const listItems = getMonthDates(this.props.value.view.currentDate).map((date) => this.createListItem(date))

        return (
            <div className="content">
                <List>
                    {listItems}
                </List>
            </div>
        )
    }

    private createListItem(date: Date) {
        const kintai = getDayKintaiOrDefault(this.props.value.kintai, date)
        const dayString = formatDateForListItem(date)
        const dayStyle = this.getDayStyle(date)
        return (
            <ListItem key={date.getDate()} onTouchTap={(event) => this.onSelectDate(event, date)}>
                <div style={dayStyle}>{dayString}</div>
                <div style={{display: "inline-block", width: "48px"}} >{kintai.inTime}</div>
                <div style={{display: "inline-block", width: "48px"}} >{kintai.outTime}</div>
                <div style={{display: "inline-block", color: red700}}>
                    {kintai.specialNote} {getHolidayText(kintai.holiday)}
                </div>
            </ListItem>
        )
    }

    private onSelectDate(event: TouchTapEvent, date: Date) {
        event.preventDefault()
        this.props.actions.showInputPage(date)
    }

    private getDayStyle(date: Date) {
        const defaultStyle = { display: "inline-block", width: "58px"}
        const color = getDayColor(date)
        if (color === undefined) {
            return defaultStyle
        }

        return {...defaultStyle, ...{ color }}
    }
}
