import {Location} from "react-router"
import {DispatchActions} from "./DispatchActions"
import {GlobalState} from "./States"

export interface RootProps {
    value: GlobalState
    actions: DispatchActions
    location: Location
}
