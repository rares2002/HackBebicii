import React, {useEffect} from 'react'
import { Navigate } from 'react-router';

function Logout() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }
    useEffect(() => {
        logout();
    }, [])

    return (    
        <div>Loging out...</div>
    )
}

export default Logout