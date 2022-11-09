import ACTIONS from "../actions"

const popupUser = false

const popupUserReducer = (state = popupUser, action) =>{    
    
    switch(action.type){
        
        case ACTIONS.POPUP_USER:
            return !state; 
        default:
            return state
    }
}

export default popupUserReducer