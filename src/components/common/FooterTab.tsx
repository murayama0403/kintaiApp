import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation"
import Divider from "material-ui/Divider"
import PrjIcon from "material-ui/svg-icons/action/assignment"
import ListIcon from "material-ui/svg-icons/action/list"
import SendIcon from "material-ui/svg-icons/content/send"
import EditIcon from "material-ui/svg-icons/image/edit"
import CommonIcon from "material-ui/svg-icons/social/person"
import * as React from "react"
import { RootProps } from "../../RootProps"

const iconStyle = {
    minWidth: "64px",
}

export class FooterTab extends React.Component<RootProps, {}> {

    public render() {
        const selectedIndex = this.getSelectedIndex()

        return (
            <div className="footerTab">
                <Divider />
                <BottomNavigation selectedIndex={selectedIndex}>
                    <BottomNavigationItem label="入力"
                        icon={<EditIcon />}
                        style={iconStyle}
                        onClick={() => this.onInputSelected()}
                    />
                    <BottomNavigationItem label="一覧"
                        icon={<ListIcon />}
                        style={iconStyle}
                        onClick={() => this.onListSelected()}
                    />
                    <BottomNavigationItem label="共通"
                        icon={<CommonIcon />}
                        style={iconStyle}
                        onClick={() => this.onCommonSelected()}
                    />
                    <BottomNavigationItem label="PRJ"
                        icon={<PrjIcon />}
                        style={iconStyle}
                        onClick={() => this.onProjectSelected()}
                    />
                    <BottomNavigationItem label="送信"
                        icon={<SendIcon />}
                        style={iconStyle}
                        onClick={() => this.onSendSelected()}
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

    private onProjectSelected() {
        this.props.actions.showProjectPage(this.props.history)
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
        if (this.props.location.pathname === "/project") {
            return 3
        }
        if (this.props.location.pathname === "/send") {
            return 4
        }
        return 0
    }
}
