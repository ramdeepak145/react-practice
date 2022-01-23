import { useState } from "react";
import React from 'react';
type UserProps = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    const handleLogin = () => {
        setUser({
            name: "ram",
            email: "ram@gmail.com",
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>Username is:{user?.name}</div>
        <div>User email is:{user?.email}</div>
    </div>;
};
