import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import Aside from "components/Aside";
import "assets/css/app.less";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="app">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Aside />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>商品</Breadcrumb.Item>
                <Breadcrumb.Item>添加商品</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Midas ©2018 Created by Midas
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
