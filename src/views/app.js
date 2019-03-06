import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import Aside from "components/Aside";
import Test from "views/Test";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "assets/css/app.less";

const { Header, Footer, Sider, Content } = Layout;
const Index = () => <h2>Home</h2>;
const About = () => <h2>About111</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
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
                <div
                  style={{ padding: 24, background: "#fff", minHeight: 360 }}
                >
                  <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                    <Route path="/test/" component={Test} />
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Midas ©2018 Created by Midas
              </Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
