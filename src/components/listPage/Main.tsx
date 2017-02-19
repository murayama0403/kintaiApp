import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintaiOrDefault} from "../../KintaiUtils"
import {getMonthDates, formatDateForListItem, getDayColor} from "../../DateUtils"
import {List, ListItem} from 'material-ui/List'
import {TouchTapEvent} from 'material-ui'

export class Main extends React.Component<RootProps, {}> {
    render() {
        const listItems = getMonthDates(this.props.value.view.currentDate).map(this.createListItem.bind(this))
        
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
                <span style={dayStyle}>{dayString}</span> {kintai.inTime} {kintai.outTime}
            </ListItem>
        )
    }

    private onSelectDate(event: TouchTapEvent, date: Date) {
        event.preventDefault()
        this.props.actions.showInputPage(date)
    }

    private getDayStyle(date: Date) {
        const color = getDayColor(date)
        if (color) {
            return {
                color: color
            }
        }
        
        return {}
    }
}