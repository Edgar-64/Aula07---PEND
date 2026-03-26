export async function getUser() {
    const token = localStorage.getItem("token");//JWT salvo

    const response = await fetch("http://localhost:3030/users",{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Accept":"application/json",
            "Authorization":`Bearer ${token}`
        },
    });
    return response.json();
}