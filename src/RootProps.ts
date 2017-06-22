import { RouteComponentProps } from "react-router"
import { DispatchActions } from "./actions/DispatchActions"
import { GlobalState } from "./states/States"

export interface RootProps extends RouteComponentProps<any> {
    value: GlobalState
    actions: DispatchActions
}
