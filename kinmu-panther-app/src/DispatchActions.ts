import {Action} from "./Actions";

export class DispatchActions {
    private dispatch: (action: Action) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    selectIn(time: string) {
        this.dispatch({type: "selectIn", time: time})
    }

    selectOut(time: string) {
        this.dispatch({type: "selectOut", time: time})
    }

    quickIn() {
        this.dispatch({type: "quickIn", now: new Date()})
    }

    quickOut() {
        this.dispatch({type: "quickOut", now: new Date()})
    }
}