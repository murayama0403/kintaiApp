export interface ActionType<T> {
    type: string
    create(payload: T): Action<T>
}

export interface Action<T> {
    type: string
    payload: T
}

export function action<T>(type: string): ActionType<T> {
    return {
        type,
        create: (payload: T) => {
            return {
                type,
                payload,
            }
        },
    }
}

type Reducer<S, T> = (state: S, payload: T) => S
type Handle<S> = <T>(type: ActionType<T>, reducer: Reducer<S, T>) => void

export function createReducer<S>(
        initialState: S,
        reducers: (handle: Handle<S>) => void): (state: S, action: Action<any>) => S {
    const reducerMap: {[key: string]: Reducer<S, any>} = {}

    reducers(<T>(actionType: ActionType<T>, reduce: Reducer<S, T>) => reducerMap[actionType.type] = reduce)

    return (state: S = initialState, action: Action<any>) => {
        const reducer = reducerMap[action.type]
        if (reducer) {
            return reducer(state, action.payload)
        }
        return state
    }
}
