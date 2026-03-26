"use client"

import { useEffect, useState } from "react"
import { User } from "./UserModel"

export function useUserViewModel(){
    const [user, setUser] = useState<User | null>(null)

    useEffect(()=>{
        //simulando API
        setTimeout(()=>{
            setUser({
                name:"Edgar",
                avatar:"https://i.pravatar.cc/150",//=>online;  /images/Avatar.png => local
            });
        }, 500);
    }, []);
    return {user};
}