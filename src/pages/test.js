import React from 'react';
import { useSelector, useDispatch, getState } from 'react-redux'

const Test = (props) => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    function test() {
        console.log(counter)

    }

    return (
        <div className="Test">
            TesT {counter}
            <br/>
            <button  onClick={(() => dispatch({ type: 'SIMPLE_UNDO' }))}>click</button>
            <br/>
            <button  onClick={test}>test</button>
        </div>
    );
};

export default Test;
