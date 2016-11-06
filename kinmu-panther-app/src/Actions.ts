export type Action = SelectInAction | SelectOutAction | QuickInAction | QuickOutAction

export interface SelectInAction {
    type: "selectIn";
    time: string;
}

export interface SelectOutAction {
    type: "selectOut";
    time: string;
}

export interface QuickInAction {
    type: "quickIn";
    now: Date;
}

export interface QuickOutAction {
    type: "quickOut";
    now: Date;
}
