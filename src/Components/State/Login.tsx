import React from 'react';
import { useState } from 'react';
export const Login = () => {

    const [isLogin,setisLogin]=useState(false);

    const handleLogin=()=>{
        setisLogin(true)
    }
    const handleLogout=()=>{
        setisLogin(false)
    }

  return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>{isLogin?"login successfully":"login failed"}</div>
  </div>;
};
