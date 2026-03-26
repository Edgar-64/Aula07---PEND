import { ReactNode } from "react";
import Header from "../organisms/Header";

type Props = {
    children: ReactNode
}

export default function MainLayout({children}:Props){
    return(
        <div>
            <Header/>
            <main className="p-4">{children}</main>
        </div>
    )
}