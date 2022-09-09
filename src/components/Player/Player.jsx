import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import  Body from "../Body/Body.jsx";
import Footer from "../Footer/Footer";
import "./Player.css";

function player({ spotify }){
    return (
        <div className="player">
          <div className="player__body">
            <Sidebar />
            <Body spotify={spotify} />
          </div>
          <Footer spotify={spotify} />
        </div>
      );
}

export default player;