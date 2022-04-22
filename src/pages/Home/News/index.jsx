import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewsDetail from './NewsDetail';
import { Button } from 'antd';
import './news.less';
import 'antd/dist/antd.css';

// 路由组件能接收到三个固定的props参数  history location match

export default class News extends Component {
  state = {
    newsArr: [
      {
        id: '1',
        name: '新闻1',
        content: '你好,react'
      },
      {
        id: '2',
        name: '新闻2',
        content: '你好,reactsfsdfasdasfasd'
      },
      {
        id: '3',
        name: '新闻3',
        content: '你好,reactsdfasdfsdfsd'
      }
    ]
  };

  // replace跳转
  replaceJump = () => {
    this.props.history.replace('/');
  };

  // push跳转
  pushJump = (path, state) => {
    this.props.history.push({
      pathname: path,
      state
    });
  };

  render() {
    const { newsArr } = this.state;
    return (
      <div>
        <div>
          {newsArr.map((newObj) => {
            return (
              <div className="news-wrap" key={newObj.id}>
                {/* 路由组件传递params参数 */}
                {/* <Link to={`/home/news/${newObj.id}`}>{newObj.name}</Link> */}
                {/* 路由组件传递search参数 */}
                {/* <Link to={`/home/news/detail?id=${newObj.id}`}>{newObj.name}</Link> */}
                {/* 路由组件传递state参数 */}
                <Button
                  type="link"
                  onClick={() => {
                    this.pushJump('/home/news/detail', { id: newObj.id });
                  }}
                >
                  {newObj.name}
                </Button>
                {/* <Link to={{ pathname: '', state:  }}></Link> */}
              </div>
            );
          })}
        </div>
        {/* 声明接受params参数 */}
        {/* <Route path="/home/news/:id" component={NewsDetail}></Route> */}
        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/news/detail" component={NewsDetail}></Route> */}
        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/news/detail" component={NewsDetail}></Route>
      </div>
    );
  }
}
