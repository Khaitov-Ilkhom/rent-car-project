import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Protected = () => {
  const {token} = useSelector(state => state.auth);
  return token ? <Outlet/> : <Navigate to="/auth/signin"/>
}
export default Protected
