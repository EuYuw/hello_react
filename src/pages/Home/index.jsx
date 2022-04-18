import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import News from './News';
import Message from './Message';
import './Nav.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>路由组件Home</h2>
        <div className="nav-wrap">
          <NavLink className="second-nav" to="/home/news">
            新闻
          </NavLink>
          <NavLink className="second-nav" to="/home/message">
            消息
          </NavLink>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
