import './Sidebar.scss'

import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { Playlist } from './Playlist';
import axios from "axios"

let api = axios.create({
    baseURL:"http://localhost:8080/",
    headers : {
        "Access-Control-Allow-Origin" : "*"
    }
})

const Sidebar = () => {
    const [playlists, setPlaylists] = React.useState([])

    React.useEffect(()=>{
        api.get("/playlist/getAll").then(res=>setPlaylists(res.data))
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <a href="/create" className="sidebar__create">
                    <AiOutlinePlus className="icon"/>
                    <h2>Create Playlist</h2>
                </a>
                {playlists.map((pl,k)=>(<Playlist PlaylistName={pl.playlistName} key={k}/>))}
                
            </div>
        </div>
    )
}

export default Sidebar
