import styled from 'styled-components'
import Dropdown from 'react-dropdown'


export const SettingsContainer = styled.div`
    background: #f2f2f2;
    box-shadow: 0 2px 6px -3px rgba(0,0,0,0.8);
    display:block;
    padding: 20px;
`

export const StyledDropdown = styled(Dropdown)`
    .Dropdown-control{
        }
    .Dropdown-options{
        }
`

export const FormRow = styled.div`
    align-items:center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
`

export const CenterContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content:center;
`

export const Button = styled.button`
    background: #fdfdfd;
    box-shadow: 0 1px 2px -2px rgba(0,0,0,.7);
    border: 1px solid rgba(0,0,0,.1);
    cursor: pointer;
    display: block;
    margin: 15px 10px 0;
    padding:10px;
    transition: 200ms;
    width:100px;

    :hover{
        background: white;
        box-shadow: 0 2px 3px -3px rgba(0,0,0,.7);
        transform: translateY(-1px);
    }

    :active{
        box-shadow: none;
        outline: none;
        transform: translateY(0);
    }
`