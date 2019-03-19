import styled from 'styled-components'

export const ToastContainer = styled.div`
    align-items:center;
    background:white;
    bottom: 0;
    display: flex;
    justify-content:center;
    margin: 40px;
    position: absolute;
    height: 200px;
    right: 0;
    width: 200px;

            opacity:1;

    animation-name: showToast;
    animation-duration: 500ms;
    animation-delay: 500ms;

    @keyframes showToast {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
        
    }
`