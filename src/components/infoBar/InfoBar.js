import React from "react";


import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({room}) =>{
    return(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt = "online" />
            <h1 className="roomShow">{room}</h1>
        </div>
        <div className="rightInnerContainer">
            <a href = "/"><img src={closeIcon} alt="close"/></a>
        </div>
    </div>
    );
}

export default InfoBar;
