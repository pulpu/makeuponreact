import React from 'react';
import MyContext from "../../mycontext";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { CircularProgress } from '@material-ui/core';


const Intro = (props) => {
const {infoCategoryState, closeCategoryInfo } = React.useContext(MyContext);

    return (
            <div className={infoCategoryState ? 'intro' : 'intro intro--close'} onClick={props.action} >
                <div className="intro__head">

                </div>
                <div className="intro__body container-sm">
                    {!props.show ? <div className="intro__close"><CircularProgress size={24} /></div> :
                        <button onClick={closeCategoryInfo} className="intro__close">
                            <CloseOutlinedIcon/>
                        </button>}
                    <h1 className="intro__title">
                        {props.info.paragraph.en.title}
                    </h1>
                    <p className="intro__paragraphs">
                        {props.info.paragraph.en.info}
                    </p>
                    {!props.show ? <CircularProgress size={24} /> :
                        <button onClick={closeCategoryInfo}>click</button>}
                    <br/>
                </div>
            </div>
    );
};

export default Intro;
