import {AutoComplete, Badge, Dropdown, Form, Space} from "antd";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.png"
import {useGetProfileQuery} from "../../redux/api/user-api.jsx";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/slices/Auth-slice.jsx";

import {LuSettings2, LuLayoutDashboard} from "react-icons/lu";
import {IoIosNotifications} from "react-icons/io";
import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5";
import {SlUser} from "react-icons/sl";
import {AiFillHeart} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import useSearchParamsHook from "../../params-hook/useSearchParamsHook.jsx";
import {useSearchCarsQuery} from "../../redux/api/car-api.jsx";
import {useState} from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const {getParam} = useSearchParamsHook()
  const {data: searchData} = useSearchCarsQuery({q: search})
  const navigate = useNavigate();
  const {data} = useGetProfileQuery()
  const {likedCars} = useSelector(state => state.like)
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
    window.location.reload();
  };

  const handleSearchSubmit = (value) => {
    navigate(`/search?q=${value.search}`);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const loadData = async (searchText) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.log(error);
    }
  };

  const items = data?.payload && data?.payload?.role === "admin" ?
      [
        {
          label: data?.payload ?
              <div className="bg-transparent flex items-center gap-2 text-[#596780]">
                <span>{data?.payload?.first_name}</span> <SlUser/>
              </div> : <div className="bg-transparent flex items-center gap-2 text-[#596780]">User not registered</div>,
          key: "0"
        },
        {
          label: <div onClick={() => navigate("/dashboard")}
                      className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Dashboard</span> <LuLayoutDashboard/>
          </div>,
          key: '1',
        },
        {
          label: <div onClick={() => navigate("/auth/signin")}
                      className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Sign in</span>
            <IoLogInOutline/>
          </div>,
          key: '2',
        },
        {
          label: <div onClick={logOutUser} className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Log Out</span>
            <IoLogOutOutline/>
          </div>,
          key: '3',
        }
      ] :
      [
        {
          label: data?.payload ?
              <div className="bg-transparent flex items-center gap-2 text-[#596780]">
                <span>{data?.payload?.first_name}</span> <SlUser/>
              </div> : <div className="bg-transparent flex items-center gap-2 text-[#596780]">User not registered</div>,
          key: "0"
        },

        {
          label: <div onClick={() => navigate("/auth/signin")}
                      className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Sign in</span>
            <IoLogInOutline/>
          </div>,
          key: '1',
        },
        {
          label: <div onClick={logOutUser} className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Log Out</span>
            <IoLogOutOutline/>
          </div>,
          key: '2',
        }
      ];

  return (
      <>
        <div className="w-full py-3 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl px-4">
          <div>
            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center gap-16">
                <Link to={"/"}>
                  <img className="max-w-[140px] object-contain" src={logo} alt="logo"/>
                </Link>
                <Form initialValues={{search: getParam("q")}} onFinish={handleSearchSubmit}
                      className="flex items-center gap-3 bg-[#fefefe] h-[45px] w-[500px] py-1 px-4 rounded-[62px] border border-gray-300 hover:border-[#1677FF]">
                  <BiSearch className="text-[#0000005f] text-2xl"/>
                  <Form.Item
                      name="search"
                      className="w-full !mb-0"
                      rules={[{required: false}]}
                  >
                    <AutoComplete
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            navigate(`/search?q=${search}`);
                          }
                        }}
                        options={searchData?.payload?.map((item) => ({
                          label: (
                              <Link
                                  className="block"
                                  key={item._id}
                                  to={`/car-details/${item._id}`}
                              >
                                {item.name}
                              </Link>
                          ),
                        }))}
                        className="search_input"
                        onSelect={onSelect}
                        onSearch={(text) =>
                            text ? loadData(text) : loadData({payload: []})
                        }
                        placeholder="Search..."
                    />
                  </Form.Item>
                  <LuSettings2 className="text-[24px] text-gray-400"/>
                </Form>
              </div>
              <div className="flex items-center gap-3">
                <Link to={"/liked-cars"}>
                  <Badge size="large" count={likedCars?.length}>
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
                <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="pb-2 flex justify-center items-center">
                        <FaRegUserCircle
                            className="w-[40px] h-[40px] text-[#596780] rounded-full"
                        />
                      </div>
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Header;
