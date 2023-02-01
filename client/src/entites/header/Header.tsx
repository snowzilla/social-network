import React from "react";
import {Avatar, Logo} from "../../components/ui";
import './Header.css'

export function Header () {
    return (
        <div className='header'>
            <Logo/>
            <div className="header-center">
                <h2>Community</h2>
                <div className="input-search">
                    <svg version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <g transform="translate(30.000000, 230.000000)">
                                <path
                                    d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z"
                                    id="Fill-1"/>
                                <polyline points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2"/>
                            </g>
                        </g>
                    </svg>
                    <input type="text" placeholder='Search your friends'/>
                </div>
            </div>
            <div className="header-right">
                <div className="nav">
                    <div className="nav-chat">
                        <div className="notification-number">1</div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <title/>
                            <g data-name="Layer 2" id="Layer_2">
                                <path
                                    d="M4,28a.84.84,0,0,1-.38-.08A1,1,0,0,1,3,27V8.78A4.89,4.89,0,0,1,8,4H24a4.89,4.89,0,0,1,5,4.78v9.44A4.89,4.89,0,0,1,24,23H9.41l-4.7,4.71A1,1,0,0,1,4,28ZM8,6A2.9,2.9,0,0,0,5,8.78V24.59l3.29-3.3A1,1,0,0,1,9,21H24a2.9,2.9,0,0,0,3-2.78V8.78A2.9,2.9,0,0,0,24,6Z"/>
                                <circle cx="16" cy="13.5" r="1.5"/>
                                <circle cx="21.5" cy="13.5" r="1.5"/>
                                <circle cx="10.5" cy="13.5" r="1.5"/>
                            </g>
                            <g id="frame">
                                <rect height="32" width="32"/>
                            </g>
                        </svg>
                    </div>
                    <div className="nav-notification">
                        <div className="notification-number">2</div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <title/>
                            <g data-name="Layer 2" id="Layer_2">
                                <path
                                    d="M16,29a4,4,0,0,1-4-4,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1A4,4,0,0,1,16,29Zm-1.73-3a2,2,0,0,0,3.46,0Z"/>
                                <path d="M18,7H14a1,1,0,0,1-1-1,3,3,0,0,1,6,0A1,1,0,0,1,18,7ZM16,5h0Z"/>
                                <path
                                    d="M27,26H5a1,1,0,0,1-1-1,7,7,0,0,1,3-5.75V14a9,9,0,0,1,8.94-9h.11a9,9,0,0,1,9,9v5.25A7,7,0,0,1,28,25h0A1,1,0,0,1,27,26ZM6.1,24H25.9a5,5,0,0,0-2.4-3.33,1,1,0,0,1-.5-.87V14A7,7,0,1,0,9,14v5.8a1,1,0,0,1-.5.87A5,5,0,0,0,6.1,24Z"/>
                            </g>
                            <g id="frame">
                                <rect height="32" width="32"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="user-menu">
                    <Avatar/>
                    <svg width="15px" height="7px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Rounded" transform="translate(-482.000000, -3442.000000)">
                                <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                                    <g id="-Round-/-Navigation-/-arrow_drop_down" transform="translate(374.000000, 54.000000)">
                                        <g>
                                            <path d="M8.71,11.71 L11.3,14.3 C11.69,14.69 12.32,14.69 12.71,14.3 L15.3,11.71 C15.93,11.08 15.48,10 14.59,10 L9.41,10 C8.52,10 8.08,11.08 8.71,11.71 Z" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}