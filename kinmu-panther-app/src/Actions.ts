export interface Action<T> {
    type: string;
    payload: T;
    error?: boolean,
    meta?: any
}

const action = function<T>(type: string): ActionType<T> {
    return {
        type: type,
        create: (payload: T, error?: boolean, meta?: any) => {
            return {
                type: type,
                payload: payload,
                error: error,
                meta: meta
            }
        }
    }
}

export interface ActionType<T> {
    type: string
    create(payload: T, error?: boolean, mata?: any): Action<T>
}

export const SelectInAction = action<string>('SelectIn')
export const SelectOutAction = action<string>('SelectOut')

// export interface QuickInAction {
//     type: "quickIn";
//     now: Date;
// }

// export interface QuickOutAction {
//     type: "quickOut";
//     now: Date;
// }
