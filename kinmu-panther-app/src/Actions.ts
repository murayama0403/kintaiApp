export type Action = QuickInAction | QuickOutAction

export interface QuickInAction {
    type: "quickIn";
    now: Date;
}

export interface QuickOutAction {
    type: "quickOut";
    now: Date;
}
