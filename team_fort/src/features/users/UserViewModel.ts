"use client"

import { useEffect, useState } from "react"
import { User } from "./UserModel"
import { getUser } from "./get"

export function useUserViewModel() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        async function loadUser() {            
            const data = await getUser();
            setUser(data);
        }
        loadUser();
    }, []);

 
    return { user };
}