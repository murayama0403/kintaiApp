import { TouchTapEvent } from "material-ui"
import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation"
import Divider from "material-ui/Divider"
import ListIcon from "material-ui/svg-icons/action/list"
import SendIcon from "material-ui/svg-icons/content/send"
import EditIcon from "material-ui/svg-icons/image/edit"
import CommonIcon from "material-ui/svg-icons/social/person"
import * as React from "react"
import { RootProps } from "../../RootProps"

export class FooterTab extends React.Component<RootProps, {}> {

    public render() {
        const selectedIndex = this.getSelectedIndex()

        return (
            <div className="footerTab">
                <Divider />
                <BottomNavigation selectedIndex={selectedIndex}>
                    <BottomNavigationItem label="入力"
                        icon={<EditIcon />}
                        onTouchTap={(event) => this.onInputSelected(event)}
                    />
                    <BottomNavigationItem label="一覧"
                        icon={<ListIcon />}
                        onTouchTap={(event) => this.onListSelected(event)}
                    />
                    <BottomNavigationItem label="共通"
                        icon={<CommonIcon />}
                        onTouchTap={(event) => this.onCommonSelected(event)}
                    />
                    <BottomNavigationItem label="送信"
                        icon={<SendIcon />}
                        onTouchTap={(event) => this.onSendSelected(event)}
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

    private onCommonSelected(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.showCommonPage()
    }

    private onSendSelected(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.showSendPage()
    }

    private getSelectedIndex(): number {
        if (this.props.location.pathname === "/list") {
            return 1
        }
        if (this.props.location.pathname === "/common") {
            return 2
        }
        if (this.props.location.pathname === "/send") {
            return 3
        }
        return 0
    }
}
