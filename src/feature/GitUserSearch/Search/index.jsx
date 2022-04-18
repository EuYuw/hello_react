import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './search.scss';

export default class Search extends Component {
  // 键盘enter查询
  keyupEnterSearch = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.doSearch();
    }
  };

  // 执行查询
  doSearch = () => {
    const {
      keywordNode: { value: keyword }
    } = this;
    if (!keyword.trim()) {
      alert('请输入关键字');
    } else {
      // 发布loading消息
      PubSub.publish('USER_CHANGE', { isLoading: true });
      axios.get(`/api/search/users?q=${keyword}`).then(
        (resp) => {
          // 发布user列表信息
          PubSub.publish('USER_CHANGE', { isLoading: false, userList: resp.data.items });
        },
        (err) => {
          // 发布查询错误信息
          PubSub.publish('USER_CHANGE', { isLoading: false, userList: [], err: err.message });
        }
      );
    }
  };

  render() {
    return (
      <div className="user-search-wrap" style={{ fontSize: '14px' }}>
        <h2>搜索Github用户</h2>
        <input
          type="text"
          ref={(ele) => (this.keywordNode = ele)}
          onKeyUp={this.keyupEnterSearch}
          className="search-input"
        ></input>
        &nbsp; &nbsp;
        <button className="search-btn" onClick={this.doSearch}>
          搜索
        </button>
      </div>
    );
  }
}
