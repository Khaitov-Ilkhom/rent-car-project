import './App.css'
import RouteController from "./routes/RouteController.jsx";
import {useLocation} from "react-router-dom";
import BackToTop from "./components/backToTop/backToTop.jsx";

function App() {
  const {pathname} = useLocation()

  return (
      <div  className="bg-gray-200 w-full min-h-screen">
        <BackToTop URL={pathname}/>
        <RouteController/>
      </div>
  )
}

export default App