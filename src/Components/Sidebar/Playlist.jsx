import React from 'react'
import { RiPlayListFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import axios from "axios"

let api = axios.create({
    baseURL:"http://localhost:8080/",
    headers : {
        "Access-Control-Allow-Origin" : "*"
    }
})

export const Playlist = ({PlaylistName}) => {
    
    const deletePlaylist = ()=>{
        api.post("playlist/remove", {name:PlaylistName})
        window.location.reload(false)
    }

    

    return (
        <a href={`/playlist?name=${PlaylistName}`} className="sidebar__playlists sidebar__create">
            <div className="one">
                <RiPlayListFill className="icon"/>
            <h2>{PlaylistName}</h2>
            </div>
            <MdDelete
            onClick={deletePlaylist}
            className="two icon delete"/>
        </a>
    )
}
