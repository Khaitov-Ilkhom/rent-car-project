import {Layout} from "antd";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {useState} from "react";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.jsx";
import {Outlet} from "react-router-dom";

const {Content} = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout className="h-screen">
        <Sidebar collapsed={collapsed}/>
        <Layout>
          <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
          <Content className="bg-white rounded-2xl shadow-xl p-6 my-6 mx-4 min-h-[280px]">
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  )
}
export default Dashboard