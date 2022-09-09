import React from "react";
import "./Sidebar.css";
import Sidebaroption from "../Sidebar_option/Sidebar_option";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { getTokenFromResponse } from "../spotify";
import { useStateValue } from "../DataLayer";

function Sidebar(){
    const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Sidebaroption Icon={HomeIcon} option="Home" />
      <Sidebaroption Icon={SearchIcon} option="Search" />
      <Sidebaroption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <Sidebaroption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar