export type Action = QuickInAction | QuickOutAction | ShowTimeDialogAction | HideTimeDialogAction

export interface QuickInAction {
    type: "quickIn";
    now: Date;
}

export interface QuickOutAction {
    type: "quickOut";
    now: Date;
}

export interface ShowTimeDialogAction {
    type: "showTimeDialog";
    defaultTime: string;
}

export interface HideTimeDialogAction {
    type: "hideTimeDialog";
}
