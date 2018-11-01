import React, { Component } from 'react'
import {
  NavWrapper,
  NavItemWrapper,
  NavItem
} from './styles'

class TopBar extends Component {
  render() {
    const pathname = this.props.location.pathname

    return (
      <NavWrapper>
        <NavItemWrapper>
          <NavItem to='/' active={pathname === '/' ? 1 : 0}>后台首页</NavItem>
          <NavItem to='/users' active={pathname === '/users' ? 1 : 0}>用户列表</NavItem>
        </NavItemWrapper>
      </NavWrapper>
    )
  }
}

export default TopBar
