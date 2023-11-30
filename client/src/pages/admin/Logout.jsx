export const Logout = () => {
    sessionStorage.removeItem("token");
    window.location = "/login"
}
