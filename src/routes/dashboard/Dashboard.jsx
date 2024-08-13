import {Layout} from "antd";
import Sidebar from "../../components/dashboard-sidebar/Sidebar.jsx";
import {useState} from "react";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.jsx";
import {Outlet} from "react-router-dom";

const {Content} = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
      <Layout className="h-screen">
        <div>
          <Sidebar collapsed={collapsed}/>
        </div>
        <Layout className="min-h-screen">
          <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
          <Content className="bg-white rounded-xl shadow-xl p-4 m-4 h-screen ">
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  )
}
export default Dashboard