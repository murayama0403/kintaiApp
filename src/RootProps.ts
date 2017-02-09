import {GlobalState} from "./States";
import {DispatchActions} from "./DispatchActions"
import {Location, InjectedRouter} from "react-router"

export interface RootProps {
    value: GlobalState;
    location: Location;
    actions: DispatchActions;
}
