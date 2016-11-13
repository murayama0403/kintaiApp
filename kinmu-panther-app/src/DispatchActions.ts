import {Action} from "./common/redux-common";
import {SelectInAction, SelectOutAction} from "./Actions";

export class DispatchActions {
    private dispatch: (action: Action<any>) => any;
    constructor(dispatch: (action: any) => any) {
        this.dispatch = dispatch
    }

    selectIn(time: string) {
        this.dispatch(SelectInAction.create(time))
    }

    selectOut(time: string) {
        this.dispatch(SelectOutAction.create(time))
    }
}