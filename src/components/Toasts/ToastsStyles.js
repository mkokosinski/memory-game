import styled, { keyframes } from 'styled-components'

export const ToastContainer = styled.div`
    align-items:center;
    background:white;
    box-shadow: 0 2px 10px -5px rgba(0,0,0,0.7);
    display: flex;
    justify-content:center;
    margin: 40px;
    overflow:hidden;
    padding:10px 20px;
    transition:500ms ease-out;
    width: 200px;

    ${props=> (
        props.isOpen? 
        `height: 100px;opacity: 1;`
        :
        `height: 0px;opacity: 0;`
    )}
`