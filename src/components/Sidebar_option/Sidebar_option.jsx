import React from "react";
import "./Sidebar_option.css";

function Sidebar_option({Icon, option}){
    return (
        <div className="sidebarOption">
          {Icon && <Icon className="sidebarOption__icon" />}
          {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
      );
}

export default Sidebar_option