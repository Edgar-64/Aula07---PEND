import UserView from "@/src/features/users/UserView"

export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 bg-blue shadow">
            <h1 className="text-xl font-bold ">Admin Panel</h1>

            <UserView/>
        </header>
    )
}