import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductOutlined } from '@ant-design/icons';
import Products from './pages/Products';
import './App.css';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', height: '100vh' }}>
        <Sider 
          width={200}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
            background: '#ffffff',
            borderRight: '1px solid #d9d9d9',
          }}
        >
          <div style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '24px',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#000',
            borderBottom: '1px solid #f0f0f0'
          }}>
            PCC
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ borderRight: 'none' }}
            items={[
              {
                key: '1',
                icon: <ProductOutlined />,
                label: <Link to="/products" style={{ textDecoration: 'none' }}>Products</Link>,
              },
            ]}
          />
        </Sider>
        <Layout style={{ marginLeft: 200, height: '100vh' }}>
          <Header 
            style={{ 
              padding: '0 24px', 
              background: colorBgContainer,
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #f0f0f0',
              height: '64px',
              lineHeight: '64px',
            }}
          />
          <Content
            style={{
              padding: '24px',
              overflow: 'auto',
              flex: 1,
              background: '#f5f5f5',
            }}
          >
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;