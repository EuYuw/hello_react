import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './userList.scss';

export default class UserList extends Component {
  state = { userList: [], isLoading: false, err: '' };

  jumpToHome = (homeUrl) => {
    window.open(homeUrl);
  };

  componentDidMount() {
    this.pubSubId = PubSub.subscribe('USER_CHANGE', (_, data) => {
      // 消息订阅
      this.setState(data);
    });
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.pubSubId);
  }

  render() {
    const { userList, isLoading, err } = this.state;
    const errVDom = React.createElement('div', { class: 'err', id: 'err-wrap' }, err); // react API创建虚拟dom
    return (
      <div className="user-container">
        {isLoading ? (
          <div className="loading">Loading...........</div>
        ) : err ? (
          errVDom
        ) : (
          userList.map((userObj) => {
            return (
              <div
                className="user-wrap"
                key={userObj.id}
                onClick={() => {
                  this.jumpToHome(userObj.html_url);
                }}
              >
                <img src={userObj.avatar_url} alt="avatar" />
                <p>{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
