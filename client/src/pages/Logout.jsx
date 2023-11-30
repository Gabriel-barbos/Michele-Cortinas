export const Logout = () => {
    console.log(sessionStorage.getItem("token_admin"))
    if(sessionStorage.getItem("token_admin")) {
        sessionStorage.removeItem("token_admin");
        window.location = "/dashboard/login"
    } else if (sessionStorage.getItem("token_user")){
        sessionStorage.removeItem("token_user");
        window.location = "/login"
    }

}
