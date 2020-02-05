import React from "react";
import MyContext from "./mycontext";
import RootReducer from './reducers/rootReducer'
import * as actionTypes from './actions/actionType';

const initialState = {
    infoCategoryState: true,
};

function Provider({children}) {

    const [state, dispach] = React.useReducer(RootReducer, initialState);

    const value = {
        infoCategoryState: state.infoCategoryState,
        closeCategoryInfo: ()=> {
            document.body.classList.add('remove-overflow');
            dispach({type: actionTypes.CLOSE_CATEGORY_INFO})
        },
        openCategoryInfo: (value)=> {
            document.body.classList.remove('remove-overflow');
            dispach({type: actionTypes.OPEN_CATEGORY_INFO, value})
        }
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default Provider;
