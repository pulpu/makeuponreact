import * as actionTypes from '../actions/actionType';

function RootReducer(state, action) {
    switch(action.type){
        case actionTypes.CLOSE_CATEGORY_INFO:
            return {
                ...state, infoCategoryState : false
            };
        case actionTypes.OPEN_CATEGORY_INFO:
            return {
                ...state, infoCategoryState : true
            };
        case actionTypes.TOGGLE_NAV:
            return {
                ...state, toggleNav : !state.toggleNav
            };
        case actionTypes.IMAGES_LOADED:
            return {
                ...state, imagesAreLoaded : state.imagesAreLoaded
            };
        default:
            return state;
    }
}

export default RootReducer;
