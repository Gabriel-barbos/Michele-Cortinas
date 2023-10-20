import { AppRoutes } from "./pages/Routes";
import { AuthProvider } from 'react-auth-kit'

export default function App() {
  return ( 
    <AuthProvider authType = {'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}>
      <AppRoutes />
    </AuthProvider>
  )
}
