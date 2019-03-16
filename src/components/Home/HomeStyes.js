import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const Menu = styled.ul`
    background-color: ${props => props.bgColor || '' };
    border-radius:4px;
    box-shadow: 0 1px 10px -2px rgba(0,0,0,0.5);
    list-style: none;
    margin:0;
    padding:40px;
    padding:0;
`

export const Item = styled.li`
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