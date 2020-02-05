import * as actionTypes from '../actions/actionType';

function RootReducer(state, action) {
    switch(action.type){
        case actionTypes.CLOSE_CATEGORY_INFO:
            return {
                ...state, infoCategoryState : action.value
            };
        case actionTypes.OPEN_CATEGORY_INFO:
            return {
                ...state, infoCategoryState : true
            };
        default:
            return state;
    }
}

export default RootReducer;
