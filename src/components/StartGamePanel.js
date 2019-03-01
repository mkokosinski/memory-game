import React, { Component } from 'react'
import { withCookies } from 'react-cookie';

import styled from 'styled-components'

const MenuContainer = styled.ul`
    padding:40px;
`
const Menu = styled.ul`
    background-color: red;
    border-radius:4px;
    box-shadow: 0 1px 10px -2px rgba(0,0,0,0.5);
    list-style: none;
    margin:0;
    padding:0;
`

const Item = styled.li`
    background-color: #D7CCC8; 
    border: 1px solid #BCAAA4;
    border-collapse:collapse;
    font-weight: bold;
    padding:20px 60px;
    text-transform: uppercase;
    text-align:center;
    cursor: pointer;
    transition: background-color ease-out 200ms;
    user-select: none;

    :hover{
        background-color:#EFEBE9;
    }

    :active{
        background-color:#e6dedb;
    }
`

class StartGamePanel extends Component {

    render() {
        const { cookies } = this.props;
        const canResume = cookies.get('turnCounter') && parseInt(cookies.get('turnCounter')) > 0;
        return (
            <MenuContainer>
                <Menu>
                    {canResume ? <Item>Resume</Item> : null}
                    <Item>New game</Item>
                    <Item>Settings</Item>
                    <Item>Exit</Item>
                </Menu>
            </MenuContainer>
        )
    }
}

export default withCookies(StartGamePanel);