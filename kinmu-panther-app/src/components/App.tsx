import * as React from "react";
import {GlobalState} from "../States";
import {DispatchActions} from "../DispatchActions"
import {InputPage} from "./inputPage/InputPage"
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Divider from 'material-ui/Divider'
import EditIcon from 'material-ui/svg-icons/image/edit'
import ListIcon from 'material-ui/svg-icons/action/list'

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class App extends React.Component<Props, {}> {
    render() {
        return (
            <div style={{height: "100vh", display: "flex", justifyContent: "space-between", flexDirection: "column"}} >
                <InputPage {...this.props} />
                <div>
                    <Divider />
                    <BottomNavigation selectedIndex={0}>
                        <BottomNavigationItem label="入力"
                            icon={<EditIcon />}
                            onTouchTap={() => console.log('input')}
                        />
                        <BottomNavigationItem label="一覧"
                            icon={<ListIcon />}
                            onTouchTap={() => console.log('list')}
                        />
                    </BottomNavigation>
                </div>
            </div>
        )
    }
}