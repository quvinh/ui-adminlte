import React, { Component } from 'react';
import AdminLTE, { Sidebar, Navbar, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import user1Image from './assets/img/user1-128x128.jpg';
import user2Image from './assets/img/user2-160x160.jpg';
import user3Image from './assets/img/user3-128x128.jpg';
import user4Image from './assets/img/user4-128x128.jpg';
import moment from 'moment';

const { Item, Header } = Sidebar;
const {
  MessageItem, Entry, NotificationItem, TaskItem,
} = Navbar;
const messageMenu = [
  {
    text: 'Support Team',
    subText: 'Why not buy a new awesome theme?',
    imageUrl: user1Image,
    when: moment().subtract(5, 'minutes'),
  },
  {
    text: 'AdminLTE Design Team',
    subText: 'Why not buy a new awesome theme?',
    imageUrl: user2Image,
    when: moment().subtract(2, 'hours'),
  },
  {
    text: 'Developers',
    subText: 'Why not buy a new awesome theme?',
    imageUrl: user3Image,
    when: moment().subtract(13, 'hours'),
  },
  {
    text: 'Sales departement',
    subText: 'Why not buy a new awesome theme?',
    imageUrl: user4Image,
    when: moment().subtract(1, 'day'),
  },
  {
    text: 'Reviewers',
    subText: 'Why not buy a new awesome theme?',
    imageUrl: user3Image,
    when: moment().subtract(2, 'days'),
  },
]

const notificationMenu = [
  {
    icon: 'fas-users',
    iconColor: 'aqua',
    text: '5 new members joined today',
  },
  {
    icon: 'fas-exclamation-triangle',
    iconColor: 'yellow',
    text: ' Very long description here that may not fit into the page and may cause design problems',
  },
  {
    icon: 'fas-users',
    iconColor: 'red',
    text: '5 new members joined today',
  },
  {
    icon: 'fas-shopping-cart',
    iconColor: 'green',
    text: '25 sales made',
  },
  {
    icon: 'fas-user',
    iconColor: 'red',
    text: 'You changed your username',
  },
]

const taskMenu = [
  {
    value: 20,
    barColor: 'aqua',
    text: 'Design some buttons',
  },
  {
    value: 40,
    barColor: 'green',
    text: 'Create a nice theme',
  },
  {
    value: 60,
    barColor: 'red',
    text: 'Some task I need to do',
  },
  {
    value: 80,
    barColor: 'yellow',
    text: 'Make beautiful transitions',
  },
]

const App = () => {

  const sidebar = [
    <Item key="hello" text="Hello" to="/hello-world" />
  ]

  return (
    // <AdminLTE title={["Hello", "World"]} titleShort={["He", "we"]} theme="blue" sidebar={sidebar}>
    //   <HelloWorld path="/hello-world" />
    // </AdminLTE>
    <AdminLTE browserTitle="adminlte-2-react-examples" theme="black">
      <Navbar.Core>
        <Entry
          icon="fas-envelope"
        >
          {messageMenu.map(p => <MessageItem {...p} />)}
          {notificationMenu.map(p => <NotificationItem {...p} />)}
        </Entry>
        <Entry
          icon="fas-bell"
          className="notifications-menu"
          labelType="warning"
        >
          {notificationMenu.map(p => <NotificationItem {...p} />)}
        </Entry>
        <Entry
          icon="far-flag"
          className="tasks-menu"
          labelType="danger"
          headerText="You have #value# tasks"
          footerText="View all tasks"
        >
          {taskMenu.map(p => <TaskItem {...p} />)}
        </Entry>
        <Entry
          icon="fas-power-off"
        />
      </Navbar.Core>
      <Sidebar.Core>
        <Item icon="fas-pencil-ruler" text="NAM KHANH" to="/" />
        <Header text="MAIN NAVIGATION" />
        <Item to="/dashboard" text="Bảng tin" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
        <Item text="Danh mục" icon="fa-chart-pie">
          <Item text="Loại vật tư" to="/category" />
        </Item>
        <Item active text="Chức năng" icon="fa-tachometer-alt">
          <Item text="Nhập kho" to="/export" />
          <Item text="Xuất kho" to="/import" />
          <Item text="Luân chuyển" to="/transfer" />
        </Item>
        <Item text="Quản lý kho" icon="far-copy">
          <Item text="Kho" to="/warehouse" />
          <Item text="Giá/kệ" to="/shelf" />
        </Item>
        <Item text="Admin" icon="fa-laptop">
          <Item text="Người dùng" to="/ui-elements/general" />
          <Item text="Chức năng - Quyền hạn" to="/ui-elements/icons" />
        </Item>
        <Item to="/widgets" text="Thông báo" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
      </Sidebar.Core>
    </AdminLTE>
  )
}

export default App;