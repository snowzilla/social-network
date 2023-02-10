import React from "react";
import {ChatIcon} from "./ChatIcon";
import {NotificationIcon} from "./NotificationIcon";
import './NavIcons.css'

export function NavIcons () {
    return (
        <div className="nav-icon">
            <ChatIcon/>
            <NotificationIcon/>
        </div>
    )
}