import React, { Component } from 'react';
import hello from './index.module.css'; // 文件名中间必须为module

export default class Hello extends Component {
  h2Click = () => {
    console.log('hello, react!!!');
  };

  render() {
    return (
      <h2 className={hello.bg} onClick={this.h2Click}>
        hello, react!!!
      </h2>
    );
  }
}
