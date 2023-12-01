export const Logout = () => {
    console.log(sessionStorage.getItem("token_admin"))
    if(sessionStorage.getItem("token_admin")) {
        sessionStorage.removeItem("token_admin");
        return window.location = "/dashboard/login"
    } else if (sessionStorage.getItem("token_client")){
        sessionStorage.removeItem("token_client");
        return window.location = "/entrar"
    }
}
