import * as React from "react";
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";
import {BottomNavi} from "./BottomNavigation";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 180,
    },
    center:{
        margin: '0 auto',
        display:'flex',
        width: '30%',
    }
};

export class InputPage extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <Toolbar {...this.props} />
                <Main {...this.props}/>
                <div style={styles.checkbox}>
                    <BottomNavi/>
                </div>
            </div>
        )
    }

}