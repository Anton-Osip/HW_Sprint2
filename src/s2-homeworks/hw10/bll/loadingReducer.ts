export type LadingStateType = {
    isLoading: boolean
}


type ChangeLoadingACType = {
    type: 'CHANGE_LOADING',
    isLoading: boolean
}


const initState = {
    isLoading: false,
}


export const loadingReducer = (state: LadingStateType = initState, action: ChangeLoadingACType): LadingStateType => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
