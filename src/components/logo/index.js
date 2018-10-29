import React from 'react'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`

const LogoTextImg = styled.img`
  height: ${p => p.size ? p.size : '32px'};
`

export const LogoText = () => {
  return (
    <LogoTextImg src="/img/logo-text.png" />
  )
}

export const Logo = () => {
  return (
    <LogoImg src="/img/logo.png" />
  )
}

export const LogoFull = (props) => {
  return (
    <LogoTextImg src="/img/logo-full.png" {...props} />
  )
}