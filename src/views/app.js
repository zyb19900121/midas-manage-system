import React, { Component } from "react";
import "assets/css/app.less";
import { Layout } from "antd";

import Aside from 'components/Aside'

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Sider>
						<Aside></Aside>
					</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
