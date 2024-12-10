import { createStore } from "redux"

const initialState = {
    balance : 0,
    fullName : '',
    mobileNumber : null
}

function accountReducer(state = initialState, action){
        switch(action.type){
            case 'deposit' :
                return{...state,balance:state.balance + +action.payload}
            case 'withdraw':
                return{...state,balance:state.balance - +action.payload}
            case 'fullName' :
                return{...state,fullName: action.payload}
            case 'mobileNumber' :
                return{...state,mobileNumber: action.payload}
            case 'reset' :
                return initialState
            default:
                return state
        }
}

 export const store = createStore(accountReducer)