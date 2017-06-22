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
                        onTouchTap={() => this.onInputSelected()}
                    />
                    <BottomNavigationItem label="一覧"
                        icon={<ListIcon />}
                        onTouchTap={() => this.onListSelected()}
                    />
                    <BottomNavigationItem label="共通"
                        icon={<CommonIcon />}
                        onTouchTap={() => this.onCommonSelected()}
                    />
                    <BottomNavigationItem label="送信"
                        icon={<SendIcon />}
                        onTouchTap={() => this.onSendSelected()}
                    />
                </BottomNavigation>
            </div>
        )
    }

    private onInputSelected() {
        this.props.actions.showInputPage(this.props.history)
    }

    private onListSelected() {
        this.props.actions.showListPage(this.props.history)
    }

    private onCommonSelected() {
        this.props.actions.showCommonPage(this.props.history)
    }

    private onSendSelected() {
        this.props.actions.showSendPage(this.props.history)
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
