import React, { Component } from 'react';
import AdminLTE, { Sidebar, Navbar, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import user1Image from '../assets/img/user1-128x128.jpg';
import user2Image from '../assets/img/user2-160x160.jpg';
import user3Image from '../assets/img/user3-128x128.jpg';
import user4Image from '../assets/img/user4-128x128.jpg';
import moment from 'moment';
// import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Dashboard from './dashboard/Dashboard';
import Import from './import/Import';
import Export from './export/Export';
import Transfer from './transfer/Transfer';
import Warehouse from './warehouse/Warehouse';
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Login = React.lazy(() => import('./views/pages/Login'))

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

const Default = () => {

  return (
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
        <Item to="/" text="B???ng tin" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
        <Item text="Danh m???c" icon="fa-chart-pie">
          <Item text="Lo???i v???t t??" to="/chart-js" />
        </Item>
        <Item active text="Ch???c n??ng" icon="fa-tachometer-alt">
          <Item text="Nh???p kho" to="/import" />
          <Item text="Xu???t kho" to="/export" />
          <Item text="Lu??n chuy???n" to="/transfer" />
        </Item>
        <Item text="Qu???n l?? kho" icon="far-copy">
          <Item text="Kho" to="/warehouse" />
          <Item text="Gi??/k???" to="/boxed" />
        </Item>
        <Item text="Admin" icon="fa-laptop">
          <Item text="Ng?????i d??ng" to="/ui-elements/general" />
          <Item text="Ch???c n??ng - Quy???n h???n" to="/ui-elements/icons" />
        </Item>
        <Item to="/widgets" text="Th??ng b??o" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
      </Sidebar.Core>
      <Dashboard path="/" exact />
      <Import path="/import" exact />
      <Import path="/import" exact />
      <Export path="/export" exact />
      <Transfer path="/transfer" exact />
      <Warehouse path="/warehouse" exact />
    </AdminLTE>
  )
}

export default Default;