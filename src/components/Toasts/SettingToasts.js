import React from 'react'
import ReactDOM from 'react-dom'
import {ToastsContainer} from '../../index'
import { ToastContainer } from './ToastsStyles'

const SettingToasts = ({isOpen}) => isOpen && ReactDOM.createPortal(
    <ToastContainer>
        Elo
    </ToastContainer>,
    ToastsContainer
)

export default SettingToasts;
