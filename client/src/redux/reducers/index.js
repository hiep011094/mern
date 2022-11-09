import { combineReducers } from 'redux'
import auth from "./authReducer"
import token from "./tokenReducer"
import popupUser from "./popupUserReducer"

export default combineReducers({
    auth,
    token,
    popupUser
})
