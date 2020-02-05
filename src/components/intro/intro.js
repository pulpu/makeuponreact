import React from 'react';
import MyContext from "../../mycontext";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const Intro = (props) => {
const {infoCategoryState, closeCategoryInfo} = React.useContext(MyContext);

    return (
        <div className={infoCategoryState ? 'intro' : 'intro intro--close'} onClick={props.action} >
            <div className="intro__head">
                <button onClick={closeCategoryInfo} className="intro__close">
                    <CloseOutlinedIcon/>
                </button>
            </div>
            <div className="intro__body container-sm">
                <h1 className="intro__title">
                    {props.info.paragraph.en.title}
                </h1>
                <p className="intro__paragraphs">
                    {props.info.paragraph.en.info}
                </p>
                <button onClick={closeCategoryInfo}>click</button>
                <br/>
            </div>
        </div>
    );
};

export default Intro;
