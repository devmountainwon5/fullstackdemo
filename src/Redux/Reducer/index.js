import {combineReducers} from 'redux'

const user = (state={}, action) => {
    debugger
    switch(action.type){
        case'user':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user})