import * as reactRedux from "react-redux"
import {RouteComponentProps} from "react-router"
import {withRouter} from "react-router-dom"
import {Dispatch} from "redux"
import {DispatchActions} from "../actions/DispatchActions"

export function connect(component: reactRedux.ComponentClass<any>): reactRedux.ComponentClass<any> {
    const connected = reactRedux.connect<any, any, RouteComponentProps<any>>(
        (store: any) => ({ value: store }),
        (dispatch: Dispatch<any>) => ({ actions: new DispatchActions(dispatch) }),
    )(component)

    return withRouter(connected)
}
