import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import './BaseRoute.scss';

const Git = lazy(() => import('../Git')); // 路由组件懒加载
const HooksDemo = lazy(() => import('../Hooks'));

export default class BaseRoute extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrap">
          <NavLink className="base-nav" to="/home">
            首页
          </NavLink>
          <NavLink className="base-nav" to="/git">
            Git用户搜索
          </NavLink>
          <NavLink className="base-nav" to="/hooks">
            Hooks
          </NavLink>
        </div>
        {/* react-router-dom v5 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Suspense fallback={<h2>Loading...</h2>}>
            {/* 懒加载的路由组件需用suspense包裹，并指定一个加载替用的组件 */}
            <Route path="/git" component={Git}></Route>
            <Route path="/hooks" component={HooksDemo}></Route>
          </Suspense>
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
