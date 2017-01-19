export interface ActionType<T> {
    type: string
    create(payload: T, error?: boolean, mata?: any): Action<T>
}

export interface Action<T> {
    type: string;
    payload: T;
    error?: boolean,
    meta?: any
}

export function action<T>(type: string): ActionType<T> {
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

type Reducer<S, T> = (state: S, payload: T, error?: boolean, meta?: any) => S

export function createReducer<S>(initialState: S, reducers: (handle: <T>(type: ActionType<T>, reducer: Reducer<S, T>) => void) => void): (state: S, action: Action<any>) => S {
    const reducerMap: {[key: string]: Reducer<S, any>} = {}

    reducers(<T>(actionType: ActionType<T>, reduce: Reducer<S, T>) => reducerMap[actionType.type] = reduce)

    return (state: S = initialState, action: Action<any>) => {
        const reducer = reducerMap[action.type]
        if (reducer) {
            return reducer(state, action.payload, action.error, action.meta)
        }
        return state
    }
}
