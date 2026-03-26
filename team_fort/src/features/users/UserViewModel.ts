"use client"

import { useEffect, useState } from "react"
import { User } from "./UserModel"

export function useUserViewModel(){
    const [user, setUser] = useState<User | null>(null)

    useEffect(()=>{
        //simulando API
        
    }, []);
    return {user};
}