import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi"
import "./Playlist.scss"

export const Song = ({song, index}) => {
    return (
        <tr>
            <th className="table_content-index">{index}</th>
            <th className="table_content-name">{song.songName}</th>
            <th className="table_content-duration">{song.songLength}</th>
            <th className="table_content-options"><BiDotsHorizontalRounded className="dots"/></th>
        </tr>   
    )
}
