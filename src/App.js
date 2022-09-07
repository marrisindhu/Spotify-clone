import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./components/Login/Login.jsx";
import {getTokenFromResponse} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player.jsx";
import { useDataLayerValue } from "./DataLayer.jsx";

const spotify = new SpotifyWebApi();

function App() {

  const [token, settoken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

    useEffect(()=>{
        const urltoken = getTokenFromResponse();
        window.location.hash = "";
        const _token = urltoken.access_token;

        if(_token){
            settoken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then(user =>{

              dispatch({
                type: "SET_USER",
                user: user,
              });
            });
        }
    }, []);

  return (
    <div className="app">
      {token ? (<Player />) : (<Login />) }
    </div>
  );
}

export default App;
