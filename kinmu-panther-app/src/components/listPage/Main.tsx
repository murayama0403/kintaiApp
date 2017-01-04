import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../KintaiUtils"
import {getMonthDates, formatDateForListItem, getDayColor} from "../../DateUtils"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'

export class Main extends React.Component<RootProps, {}> {
    render() {
        const listItems = getMonthDates(this.props.value.listPage.currentDate).map(this.createListItem.bind(this))
        
        return (
            <div>
                <List>
                    {listItems}
                </List>
            </div>
        )
    }

    private createListItem(date: Date) {
        const kintai = getDayKintai(this.props.value.kintai, date)
        const dayString = formatDateForListItem(date)
        const dayStyle = this.getDayStyle(date)
        return (
            <ListItem onClick={() => this.onSelectDate(date)}>
                <span style={dayStyle}>{dayString}</span> {kintai.inTime} {kintai.outTime}
            </ListItem>
        )
    }

    private onSelectDate(date: Date) {
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