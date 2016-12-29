import * as React from "react"
import {RootProps} from "../../RootProps";
import {getDayKintai} from "../../States"
import {DispatchActions} from "../../DispatchActions"
import {List, ListItem} from 'material-ui/List'

export class Main extends React.Component<RootProps, {}> {
    render() {
//        const currentKintai = getDayKintai(this.props.value.kintai, this.props.value.inputPage.currentDate)

        return (
            <div>
                TODO
                <List>
                </List>
            </div>
        )
    }

}