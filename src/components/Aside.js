import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "assets/css/app.less";

const SubMenu = Menu.SubMenu;

class Aside extends Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <div className="logo">Midas</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Coming Soon</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Coming Soon</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Coming Soon</span>
              </span>
            }
          >
            <Menu.Item key="3">Coming Soon</Menu.Item>
            <Menu.Item key="4">Coming Soon</Menu.Item>
            <Menu.Item key="5">Coming Soon</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Coming Soon</span>
              </span>
            }
          >
            <Menu.Item key="6">Coming Soon</Menu.Item>
            <Menu.Item key="8">Coming Soon</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>Coming Soon</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Aside;
