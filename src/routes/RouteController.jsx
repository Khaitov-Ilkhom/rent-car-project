import {useRoutes} from "react-router-dom";
import {SuspenseElement as Suspense} from "../utils/Index.jsx";
import {lazy} from "react";

const Home = lazy(() => import("./home/Home.jsx"));
const Auth = lazy(() => import("./auth/Auth.jsx"));
const SignUp = lazy(() => import("./auth/signup/SignUp.jsx"));
const SignIn = lazy(() => import("./auth/signin/SignIn.jsx"));
const VerifyOtp = lazy(() => import("./auth/verify-otp/VerifyOtp.jsx"));


const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Suspense><Home/></Suspense>,
    },
    {
      path: "auth",
      element: <Suspense><Auth/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><SignUp/></Suspense>,
        },
        {
          path: "verify-otp",
          element: <Suspense><VerifyOtp/></Suspense>,
        },
        {
          path: "signin",
          element: <Suspense><SignIn/></Suspense>
        }
      ]
    }
  ])
}
export default RouteController
