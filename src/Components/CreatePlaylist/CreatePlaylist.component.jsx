import "./CeatePlaylist.scss"

import React from 'react'
import axios from "axios"

let api = axios.create({
    baseURL:"http://localhost:8080/",
    headers : {
        "Access-Control-Allow-Origin" : "*"
    }
})

const CreatePlaylist = () => {
    const [playlistName, setPlaylistName] = React.useState("")

    const submitAction = async ()=>{
        if (playlistName!==""){
            api.post("/playlist/create",{name:playlistName})
            window.location.reload(false)
        }
        
    }

    return (
        <div className="create">
            <h1>Playlist Name:</h1>
            <div className="input-field">
                <input value={playlistName} onChange={e=>setPlaylistName(e.target.value)} type="text" className="create__input" placeholder="Playlist Name"/>
            </div>
            <button onClick={submitAction} className="btn create__submit">Create</button>
        </div>
    )
}

export default CreatePlaylist
