import {Navigate, useRoutes} from "react-router-dom";
import {SuspenseElement as Suspense} from "../utils/Index.jsx";
import {lazy} from "react";
import {useSelector} from "react-redux";

const Home = lazy(() => import("./home/Home.jsx"));
const Auth = lazy(() => import("./auth/Auth.jsx"));
const SignUp = lazy(() => import("./auth/signup/SignUp.jsx"));
const SignIn = lazy(() => import("./auth/signin/SignIn.jsx"));
const VerifyOtp = lazy(() => import("./auth/verify-otp/VerifyOtp.jsx"));

const Protected = lazy(() => import("../routes/protected/Protected.jsx"));
const Dashboard = lazy(() => import("./dashboard/Dashboard.jsx"));
const CarRent = lazy(() => import("./dashboard/car-rent/CarRent.jsx"));
const Category = lazy(() => import("./dashboard/categories/Category.jsx"));
const Liked = lazy(() => import("./liked-cars/Liked.jsx"));
const Notification = lazy(() => import("./dashboard/notification/Notification.jsx"));
const Profile = lazy(() => import("./dashboard/profile/Profile.jsx"));
const Setting = lazy(() => import("./dashboard/setting/Setting.jsx"));
const Users = lazy(() => import("./dashboard/users/Users.jsx"));

const Categories = lazy(() => import("./categories/Categories.jsx"));
const CarDetails = lazy(() => import("./car-details/CarDetails.jsx"));
const NotFound = lazy(() => import("./not-found/NotFound.jsx"));

const RouteController = () => {
  const {user} = useSelector(state => state.auth);
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
    },
    {
      path: "dashboard",
      element: user?.role && user?.role === "admin" ? <Suspense><Protected/></Suspense> : <Navigate to="notfound"/>,
      children: [
        {
          path: "",
          element: <Suspense><Dashboard/></Suspense>,
          children: [
            {
              path: "profile",
              element: <Suspense><Profile/></Suspense>
            },
            {
              path: "car-rent",
              element: <Suspense><CarRent/></Suspense>,
            },
            {
              path: "category",
              element: <Suspense><Category/></Suspense>,
            },
            {
              path: "users",
              element: <Suspense><Users/></Suspense>,
            },
            {
              path: "liked",
              element: <Suspense><Liked/></Suspense>,
            },
            {
              path: "notification",
              element: <Suspense><Notification/></Suspense>,
            },
            {
              path: "setting",
              element: <Suspense><Setting/></Suspense>,
            }
          ]
        }
      ]
    },
    {
      path: "categories",
      element: <Suspense><Categories/></Suspense>,
    },
    {
      path: "car-details/:id",
      element: <Suspense><CarDetails/></Suspense>,
    },
    {
      path: "liked-cars",
      element: <Suspense><Liked/></Suspense>,
    },
    {
      path: "notfound",
      element: <Suspense><NotFound/></Suspense>
    },
    {
      path: "*",
      element: <Suspense><Navigate to="notfound"/></Suspense>
    }
  ])
}
export default RouteController
