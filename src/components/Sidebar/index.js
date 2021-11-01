import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu,
SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Bevarages</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
