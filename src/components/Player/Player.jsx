import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import  Body from "../Body/Body.jsx";
import footer from "../Footer/Footer";

function player(){
    return <div className="player">
        <div className="player_body">
        <Sidebar />
        <Body />
        <h1>I'm Player</h1>
        </div>
    </div>;
}

export default player;