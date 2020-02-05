import React, { useState } from 'react';
import Masonry from 'react-masonry-component';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MyContext from "../../mycontext";

const masonryOptions = {
    transitionDuration: 4
};

const imagesLoadedOptions = { background: '.my-bg-image-el'}


const Gallery = (props) => {
    const {infoCategoryState} = React.useContext(MyContext);
    const [open, setOpen] = React.useState(false);
    const [elementInfo, setElementInfo ] = useState({});

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (_element) => {
        setOpen(true);
        setElementInfo(_element);
    };

    const childElements = props.elements.map(function(element){
        return (
            <div className="image-element-class col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4" key={element.id}>
                <div >
                    <img onClick={()=> handleClickOpen(element)} className={!infoCategoryState ? 'article-image remove-filter' : 'article-image' } src={element.img} alt={element.company} />
                </div>
            </div>
        );
    });

    return (
        <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
            {childElements}

            <Dialog
                fullScreen={fullScreen}
                aria-labelledby='responsive-dialog-title'
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText>
                       <img className={'modal-image'} src={elementInfo.img} alt={elementInfo.name} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Masonry>
    );
};

export default Gallery;
