import React from "react";
import './Avatar.css'
import avatar from '../../../assets/img/avatar.jpg'

export function Avatar() {
    return (
        <img className='avatar' src={avatar} alt=""/>
    )
}