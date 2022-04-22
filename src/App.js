// 创建外壳APP
import React, { Component } from 'react';
import Entry from './pages/Entry';

// 暴露App组件
export default class App extends Component {
  render() {
    return (
      <>
        {/* 空标签，不会渲染真实dom，相当于vue template， 也可以使用Fragment标签 */}
        <Entry></Entry>
      </>
    );
  }
}
