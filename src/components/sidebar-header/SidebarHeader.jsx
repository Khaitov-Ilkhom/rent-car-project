import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {Button, Layout} from 'antd';

const {Header} = Layout;

const HeaderComponent = ({collapsed, setCollapsed}) => {
  return (
      <Header
          className="bg-white shadow-xl p-0"
      >
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
        />
      </Header>
  )
}
export default HeaderComponent