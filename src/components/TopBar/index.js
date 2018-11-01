import React, { Component } from 'react'
import {
  NavWrapper,
  NavItemWrapper,
  NavItem
} from './styles'

class TopBar extends Component {
  render() {
    return (
      <NavWrapper>
        <NavItemWrapper>
          <NavItem to='/' active>后台首页</NavItem>
          <NavItem to='/users'>用户列表</NavItem>
        </NavItemWrapper>
      </NavWrapper>
    )
  }
}

export default TopBar
