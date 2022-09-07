import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./components/Login/Login.jsx";
import {getTokenFromResponse} from "./components/spotify";

function App() {

  const [token, settoken] = useState(null);

    useEffect(()=>{
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const _token = hash.access_token;

        if(_token){
            settoken(_token);
        };
    }, []);

  return (
    <div className="app">
      {token ? (<h1>I'm Logged in</h1>) : (<Login />) }
    </div>
  );
}

export default App;
