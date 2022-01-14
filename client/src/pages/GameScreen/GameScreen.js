import { useState } from "react";

import PropTypes from "prop-types";

import Canvas from '../../components/Canvas/Canvas';
import Guess from '../Guess';

const GameScreen = ({host}) => {
    //which player is draw 
    const [drawer, setDrawer] = useState(host);
    const [drawingVideo, setDrawingVideo] = useState(null);

    //function that when the drawer clicking on send they switching
    const sendDrawing = (drawingVideo) => {
        setDrawer(!drawer);
        setDrawingVideo(drawingVideo)
        //send to guess the drawing video
    }

    const getDrawingVideo = () => {
        let dv
        if(!drawingVideo){
            dv = drawingVideo;
            setDrawingVideo(null)
        }
        return dv;
    }

    return (
        <>
        {drawer &&
            <Canvas onSendClick={sendDrawing}/>
        }
        {!drawer &&  
            <Guess waiting={drawer} getDrawingVideo={getDrawingVideo}/>
        }
        </>
    )
};

GameScreen.prototype = {
    drawer : PropTypes.string.isRequired,
};

export default GameScreen;
