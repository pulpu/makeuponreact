import React from "react";
import MyContext from "./mycontext";
import RootReducer from './reducers/rootReducer'
import * as actionTypes from './actions/actionType';

const initialState = {
    infoCategoryState: true,
    toggleNav: true,
    imagesAreLoaded: false

};

function Provider({children}) {

    const [state, dispatch] = React.useReducer(RootReducer, initialState);

    const value = {
        infoCategoryState: state.infoCategoryState,
        toggleNav: state.toggleNav,
        imagesAreLoaded: state.imagesAreLoaded,
        closeCategoryInfo: ()=> {
            document.body.classList.add('remove-overflow');
            dispatch({type: actionTypes.CLOSE_CATEGORY_INFO})
        },
        openCategoryInfo: (value)=> {
            document.body.classList.remove('remove-overflow');
            dispatch({type: actionTypes.OPEN_CATEGORY_INFO, value})
        },
        navToggleAndReset: (value)=> {
            dispatch({type: actionTypes.TOGGLE_NAV, value})
        },
        imagesLoaded: ()=> {
            dispatch({type: actionTypes.IMAGES_LOADED, value})
        }
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default Provider;
