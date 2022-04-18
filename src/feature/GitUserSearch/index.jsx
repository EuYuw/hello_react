import React, { Component } from 'react';
import Search from './Search';
import UserList from './UserList';

export default class GitUserSearch extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <UserList></UserList>
      </div>
    );
  }
}
