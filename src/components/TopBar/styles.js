import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
  z-index: 1;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  position: sticky;
  top: 0;
  z-index: 9;
  background: white;
  box-shadow: var(--elevation-1);
`

export const NavItemWrapper = styled.div`
  position: relative;
  flex: 1;

  @media (--range-palm), (--range-hand) {
    margin-left: 12px;
  }

  @media (--range-lap), (--range-desk) {
    margin-left: 24px;
  }
`

export const NavItem = styled(Link)`
  color: var(${p => p.active ? '--blue-base' : '--neutral-base'});
  background-color: rgba(${p => p.active ? '16,112,202,0.09' : ''});
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px 12px;
  margin-right: 8px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.4px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background-color: var(--N2A);
  }
`