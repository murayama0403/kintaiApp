import {TouchTapEvent} from "material-ui"
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation"
import Divider from "material-ui/Divider"
import ListIcon from "material-ui/svg-icons/action/list"
import SendIcon from "material-ui/svg-icons/content/send"
import EditIcon from "material-ui/svg-icons/image/edit"
import * as React from "react"
import {RootProps} from "../../RootProps"

export class FooterTab extends React.Component<RootProps, {}> {

    public render() {
        const selectedIndex = this.getSelectedIndex()

        return (
            <div className="footerTab">
                <Divider />
                <BottomNavigation selectedIndex={selectedIndex}>
                    <BottomNavigationItem label="入力"
                        icon={<EditIcon />}
                        onTouchTap={this.onInputSelected.bind(this)}
                    />
                    <BottomNavigationItem label="一覧"
                        icon={<ListIcon />}
                        onTouchTap={this.onListSelected.bind(this)}
                    />
                    <BottomNavigationItem label="送信"
                        icon={<SendIcon />}
                        onTouchTap={this.onSendSelected.bind(this)}
                    />
                </BottomNavigation>
            </div>
        )
    }

    private onInputSelected(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.showInputPage()
    }

    private onListSelected(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.showListPage()
    }

    private onSendSelected(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.showSendPage()
    }

    private getSelectedIndex(): number {
        if (this.props.location.pathname === "/list") {
            return 1
        }
        if (this.props.location.pathname === "/send") {
            return 2
        }
        return 0
    }
}
