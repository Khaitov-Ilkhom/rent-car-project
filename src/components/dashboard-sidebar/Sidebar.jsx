import "./Sidebar.css"
import {Layout, Menu} from 'antd';
import {NavLink} from "react-router-dom";
import { IoHome, IoPersonSharp, IoSettings } from "react-icons/io5";
import { FaCar, FaHeart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { PiUsersThreeBold } from "react-icons/pi";
import { LiaSalesforce } from "react-icons/lia";




const {Sider} = Layout;


const Sidebar = ({collapsed}) => {
  return (
      <Sider trigger={null}  collapsible collapsed={collapsed}>
        <Menu
            selectable={false}
            className="bg-white min-h-screen "
            mode="inline"
            items={[
              {
                key: '1',
                icon: <IoHome  size={22}/>,
                label: <NavLink to="/">Home</NavLink>,
              },
              {
                key: '2',
                icon: <IoPersonSharp size={22}/>,
                label: <NavLink to="/dashboard/profile">Profile</NavLink>,
              },
              {
                key: '3',
                icon: <FaCar size={22}/>,
                label: <NavLink to="/dashboard/car-rent">Car Rent</NavLink>,
              },
              {
                key: '4',
                icon: <BiCategory size={22}/>,
                label: <NavLink to="/dashboard/category">Categories</NavLink>,
              },
              {
                key: '5',
                icon: <PiUsersThreeBold size={22}/>,
                label: <NavLink to="/dashboard/users">Users</NavLink>,
              },
              {
                key: '6',
                icon: <LiaSalesforce size={22}/>,
                label: <NavLink to="/dashboard/orders">Orders</NavLink>,
              },
              {
                key: '7',
                icon: <FaHeart size={22}/>,
                label: <NavLink to="/dashboard/liked">Liked</NavLink>,
              },
              {
                key: '8',
                icon: <IoSettings size={22}/>,
                label: <NavLink to="/dashboard/setting">Setting</NavLink>,
              },
            ]}
        />
      </Sider>
  )
}
export default Sidebar
