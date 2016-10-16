import {Action} from "./Actions";

export class DispatchActions {
    private dispatch: (action: Action) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    quickIn() {
        this.dispatch({type: "quickIn", now: new Date()})
    }

    quickOut() {
        this.dispatch({type: "quickOut", now: new Date()})
    }
}