import React from 'react'
import { SidebarWrapper, IconWrapper, Icon, SidebarContent, SidebarIcons,  SidebarLink, SidebarBtn } from './styles'

const SideBar = ({ status, openclose }) => {
  return (
    <SidebarWrapper status={status} >
      <IconWrapper onClick={openclose} >
        <Icon />
      </IconWrapper>
      <SidebarContent>
        <SidebarIcons>
          <SidebarLink href='./'>Pizzas</SidebarLink>
          <SidebarLink href='./'>Pastas</SidebarLink>
          <SidebarLink href='./'>Colas</SidebarLink>
          <SidebarBtn href='./'>Ordena Ahora</SidebarBtn>
        </SidebarIcons>
      </SidebarContent>
    </SidebarWrapper>
  )
}

export default SideBar;
