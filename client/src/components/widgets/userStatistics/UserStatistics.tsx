import React from "react";
import {Avatar, StatisticsNumber, UserName} from "../../ui";
import './UserStatistics.css'

export function UserStatistics () {
    return(
        <div className="user-statistics">
            <div className="user-main-info">
                <Avatar/>
                <UserName/>
            </div>
            <div className="statistics-list">
                <StatisticsNumber/>
                <StatisticsNumber/>
                <StatisticsNumber/>
            </div>
        </div>
    )
}