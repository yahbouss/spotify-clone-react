import "./Playlist.scss"

import React from 'react'
import { Song } from "./Song"
import axios from 'axios'
import queryString from 'query-string'

let api = axios.create({
    baseURL:"http://localhost:8080/",
    headers : {
        "Access-Control-Allow-Origin" : "*"
    }
})

const Playlist = (props) => {
    const [songs, setSongs] = React.useState([])

    React.useEffect(()=>{
          api.post('/playlist/getPL', {name: queryString.parse(props.location.search).name})
          .then(res =>{
              console.log(res.data[0].playlistSongs)
              setSongs(res.data[0].playlistSongs)
          })  
          .catch(err=>console.log(err))
    },[props])

    if (songs.length !== 0){

        return (
            <div>
                <table className="table">
                    <tr className="table__content">
                        <th className="table__content-title">i</th>
                        <th className="table__content-title">Song</th>
                        <th className="table__content-title">Length</th>
                        <th className="table__content-title">Artist</th>
                        <th className="table__content-title">Options</th>
                    </tr>
                    {songs.map((song,i)=>{
                        return (<Song song={song} key={i} index={i}/>)
                    })}
                </table>
            </div>
        )
    }
    else{
        return(<h1 className="not found">Playlist either empty or not found</h1>)
    }
}

export default Playlist
