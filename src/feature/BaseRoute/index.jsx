import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import './BaseRoute.scss';

export default class BaseRoute extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrap">
          <NavLink className="base-nav" to="/home">
            首页
          </NavLink>
          <NavLink className="base-nav" to="/git">
            Git用户
          </NavLink>
        </div>
        {/* react-router-dom v5 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/git" component={About}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>

        {/* react-router-dom v6 */}
        {/* 
          <Routes>
            <Route path="/news/*" element={<News />}>
                <Route path=":id" element={<NewsDetail />}></Route>
              </Route>
            <Route path="message" element={<Message />}></Route>
          </Routes> 
            重定向 Navigate
          <Route path="*" element={<Navigate to="/home" />}></Route> 
       */}
      </div>
    );
  }
}
