const initState = {
    themeId: 1,
}

export type StateType={
    themeId:number
}

type ChangeThemeIdType={
    type: 'SET_THEME_ID',
    id:number
}

type ActionType=ChangeThemeIdType

export const themeReducer = (state:StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state, themeId:action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id })
