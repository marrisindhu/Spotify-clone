import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./components/Login/Login.jsx";
import {getTokenFromResponse} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player.jsx";
import { useStateValue } from "./DataLayer.jsx";

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useStateValue();

    useEffect(()=>{
        const urltoken = getTokenFromResponse();
        window.location.hash = "";
        const _token = urltoken.access_token;

        if(_token){
          dispatch({
            type: "SET_TOKEN",
            token: _token,
          });
            spotify.setAccessToken(_token);
            spotify.getMe().then(user =>
              dispatch({
                type: "SET_USER",
                user: user,
              })
            );
        }
    }, []);

    console.log("👧", user);

  return (
    <div className="app">
      {token ? (<Player />) : (<Login />) }
    </div>
  );
}

export default App;
