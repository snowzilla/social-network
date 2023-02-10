import React from "react";
import {Avatar, Logo, NavIcons, SearchInput} from "../../components/ui";
import './Header.css'

export function Header () {
    return (
        <div className='header'>
            <Logo/>
            <div className="header-center">
                <h2>Feed</h2>
                <SearchInput/>
            </div>
            <div className="header-right">
                <NavIcons/>
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