import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
  const [loading,setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async()=>{
    setLoading(true)
    try{
       const res = await fetch("/api/auth/logout",
        {
            method : "POST",
            headers : {"Content-Type":"application/json"}
        });
        console.log(res);
        const data = await res.json();
        console.log(data)
        if(data.error)
        {
            throw new Error(data.error);
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null);
    }
    catch(error)// catch(error)of the program 
    {
       toast.error(error.message)
    }
    finally
    {
        setLoading(false);
    }
  }
  return { loading, logout };
}


export default useLogout;
