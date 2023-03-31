

import { onAuthStateChanged, signOut } from 'firebase/auth'
import React ,{useState,useEffect}from 'react'
import { auth } from '../firebase'

const AuthDetails = () => {
    const [authUser,setAuthUser]=useState(null)
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        });
        return ()=>{
            listen();
        }
    },[]);

    const usersignOut=()=>{
        signOut(auth).then(()=>{
            console.log("sign out Successful")
        }).catch((err)=>console.log(err))
    }
  return (
    <div>
        <h2>User Logged In</h2>
      {authUser ? <><h1>{`SignedIn as ${authUser.email}`}</h1> <button onClick={usersignOut}>Sign Out</button></>:<h1>SignedOut</h1>}
    </div>
  )
}

export default AuthDetails

