import React from "react";
import './SearchInput.css'

export function SearchInput () {
    return (
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
    )
}