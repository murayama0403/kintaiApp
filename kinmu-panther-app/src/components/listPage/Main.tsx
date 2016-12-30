import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../KintaiUtils"
import {getMonthDates, formatDateForListItem} from "../../DateUtils"
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
        return (
            <ListItem>
                {dayString} {kintai.inTime} {kintai.outTime}
            </ListItem>
        )
    }
}