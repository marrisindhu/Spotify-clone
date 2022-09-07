import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./components/Login/Login.jsx";
import {getTokenFromResponse} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, settoken] = useState(null);

    useEffect(()=>{
        const urltoken = getTokenFromResponse();
        window.location.hash = "";
        const _token = urltoken.access_token;

        if(_token){
            settoken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then(user =>{
              console.log("👵", user);
            })
        };
    }, []);

  return (
    <div className="app">
      {token ? (<h1>I'm Logged in</h1>) : (<Login />) }
    </div>
  );
}

export default App;
