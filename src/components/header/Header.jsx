import {BiLogInCircle} from "react-icons/bi";
import {IoIosNotifications} from "react-icons/io";
import {AiFillHeart} from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";
import {AutoComplete, Avatar, Badge} from "antd";
import {BiSearch} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.png"

const Header = () => {
  const navigate = useNavigate();

  return (
      <>
        <div className="w-full py-3 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl px-4">
          <div>
            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center gap-16">
                <Link to={"/"}>
                  <img className="max-w-[140px] object-contain" src={logo} alt="logo"/>
                </Link>
                <form
                    className="flex items-center gap-3 bg-[#fefefe] w-[500px] py-1 px-4 rounded-[62px] border border-gray-300 hover:border-[#1677FF]">
                  <BiSearch className="text-[#0000005f] text-2xl"/>
                  <AutoComplete
                      className="search_input"
                      placeholder="Search..."
                  />
                  <LuSettings2 className="text-[24px] text-gray-400"/>
                </form>
              </div>
              <div className="flex items-center gap-3">
                <Link to={"/dashboard/liked"}>
                  <Badge size="large" count={5}>
                    <div className="p-2 bg-white border border-gray-200 rounded-full">
                      <AiFillHeart className="text-[#596780] text-2xl"/>
                    </div>
                  </Badge>
                </Link>
                <Link to={"/dashboard/notification"}>
                  <Badge count={5}>
                    <div className="p-2 bg-white border border-gray-200 rounded-full">
                      <IoIosNotifications className="text-[#596780] text-2xl"/>
                    </div>
                  </Badge>
                </Link>
                <div onClick={() => navigate("/auth/signin")} className="p-2 bg-white border border-gray-200 rounded-full mb-2">
                  <BiLogInCircle className="text-[#596780] text-2xl"/>
                </div>
                <div className="pb-2 flex justify-center items-center">
                  <Avatar onClick={() => navigate("/dashboard")}
                      className="w-[44px] h-[44px] bg-slate-900  border border-gray-200 rounded-full"
                      src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Header;
