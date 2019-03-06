import React from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import "assets/css/app.less";
const SubMenu = Menu.SubMenu;

const Aside = withRouter(({ history }) => {
  return (
    <div>
      <div className="logo">Midas</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        selectedKeys={[history.location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">
            {" "}
            <Icon type="pie-chart" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/about/">
          <Link to="/about/">
            {" "}
            <Icon type="pie-chart" />
            About
          </Link>
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
        <Menu.Item key="/test/">
          <Link to="/test/">
            {" "}
            <Icon type="pie-chart" />
            Test
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
});

export default Aside;
