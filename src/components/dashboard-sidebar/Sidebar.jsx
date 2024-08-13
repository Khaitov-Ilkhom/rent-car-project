import "./Sidebar.css"
import {Layout, Menu} from 'antd';
import {NavLink} from "react-router-dom";
import { IoHome, IoPersonSharp, IoNotifications, IoSettings } from "react-icons/io5";
import { FaCar, FaHeart } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";


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
                icon: <BiSolidMessageDetail size={22}/>,
                label: <NavLink to="/dashboard/inbox">Inbox</NavLink>,
              },
              {
                key: '5',
                icon: <FaHeart size={22}/>,
                label: <NavLink to="/dashboard/liked">Liked</NavLink>,
              },
              {
                key: '6',
                icon: <IoNotifications size={22}/>,
                label: <NavLink to="/dashboard/notification">Notification</NavLink>,
              },
              {
                key: '7',
                icon: <IoSettings size={22}/>,
                label: <NavLink to="/dashboard/setting">Setting</NavLink>,
              },
            ]}
        />
      </Sider>
  )
}
export default Sidebar
