import {Navigate, Outlet} from "react-router-dom";

const Protected = () => {
  const auth = localStorage.getItem('token')
  return auth ? <Outlet/> : <Navigate to="/auth/signin"/>
}
export default Protected
