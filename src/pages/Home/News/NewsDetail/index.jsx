import React, { Component } from 'react';

export default class NewsDetail extends Component {
  render() {
    // 接受params参数
    // const { id } = this.props.match.params;
    // 接受search参数
    // const { search } = this.props.location;
    // const searchParam = new URLSearchParams(search);
    // const id = searchParam.get('id');
    // 接受state参数
    const { id } = this.props.location.state;
    return <h5>{`新闻${id}的新闻内容`}</h5>;
  }
}
