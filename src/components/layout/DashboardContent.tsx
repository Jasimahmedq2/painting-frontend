
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content>
      <div style={{ minHeight: "100vh", background: colorBgContainer }}>
        {children}
      </div>
    </Content>
  );
};

export default DashboardContent;
