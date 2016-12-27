import {GlobalState} from "./States";
import {DispatchActions} from "./DispatchActions"
import {LocationDescriptor, InjectedRouter} from "react-router"

export interface RootProps {
    value: GlobalState;
    location: LocationDescriptor;
    actions: DispatchActions;
}
