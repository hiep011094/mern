import ACTIONS from "./index"

export const dispatchPopupUser = () =>{
    return {
        type : ACTIONS.POPUP_USER
    }
}

export const dispatchPopupUserOutside = () =>{
    return {
        type : ACTIONS.POPUP_USER_OUTSIDE
    }
}