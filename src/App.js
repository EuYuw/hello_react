// 创建外壳APP
import React, { Component } from 'react';
import BaseRoute from './feature/BaseRoute';

// 暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <BaseRoute></BaseRoute>
      </div>
    );
  }
}
