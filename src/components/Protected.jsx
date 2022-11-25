import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Header from "./pageStructure/Header";

function Protected(props) {
    
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    
    useEffect(() => {
    }, [user, loading]);

    if(loading) return <p>Loading...</p>

    if(!user) return <Header title='403 - Access Denied' desc='This page is protected. Please login to continue.' btnText='Login' link='/auth/login'/>

    if(user) return <>{props.children}</>
    
}

export default Protected