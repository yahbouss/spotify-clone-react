import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi"
import "./Playlist.scss"

export const Song = ({song, index}) => {
    const [toggle, setToggle] = React.useState(false)
    return (
        <tr>
            <th className="table_content-index">{index}</th>
            <th className="table_content-name">{song.songName}</th>
            <th className="table_content-duration">{song.songLength}</th>
            <th className="table_content-duration">{song.songArtist}</th>
            <th className="table_content-options"><BiDotsHorizontalRounded className="dots" onClick={e=>setToggle(!toggle)}/></th>
            {toggle?(<a href={song.songUrl}>open</a>):null}
        </tr>   
    )
}
