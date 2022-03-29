import { useContext } from "react"
import { AuthContext } from "../component/AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;