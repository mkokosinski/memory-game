import React, { useContext } from 'react'
import {createPortal} from 'react-dom'
import { ToastsContainer } from '../../index'
import { ToastContainer } from './ToastsStyles'
import { LanguageContext } from '../Context';

const SettingToasts = ({ isOpen, message='' }) => 
{
    // return isOpen && createPortal(
        return createPortal(
        <ToastContainer isOpen={isOpen} >
           {message}
        </ToastContainer>
        ,
        ToastsContainer
    )
}

export default SettingToasts;
