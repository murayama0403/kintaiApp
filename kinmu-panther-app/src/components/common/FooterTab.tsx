import * as React from "react";
import {RootProps} from '../../RootProps'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Divider from 'material-ui/Divider'
import EditIcon from 'material-ui/svg-icons/image/edit'
import ListIcon from 'material-ui/svg-icons/action/list'

export class FooterTab extends React.Component<RootProps, {}> {

    render() {
        const selectedIndex = this.getSelectedIndex()

        return (
            <div>
                <Divider />
                <BottomNavigation selectedIndex={selectedIndex}>
                    <BottomNavigationItem label="入力"
                        icon={<EditIcon />}
                        onClick={this.onInputSelected.bind(this)}
                    />
                    <BottomNavigationItem label="一覧"
                        icon={<ListIcon />}
                        onClick={this.onListSelected.bind(this)}
                    />
                </BottomNavigation>
            </div>
        )
    }

    private onInputSelected() {
        this.props.actions.showInputPage()
    }

    private onListSelected() {
        this.props.actions.showListPage()
    }

    private getSelectedIndex(): number {
        if (this.props.location.pathname == '/list') {
            return 1;
        }
        return 0;
    }
}