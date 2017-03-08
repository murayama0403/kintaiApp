import { Location } from "react-router"
import { DispatchActions } from "./actions/DispatchActions"
import { GlobalState } from "./states/States"

export interface RootProps {
    value: GlobalState
    actions: DispatchActions
    location: Location
}
