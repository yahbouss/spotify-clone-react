import './Search.scss'
import React from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {BiDotsHorizontalRounded} from "react-icons/bi"


const Song = (song, index)=>(
    <tr>
            <th className="table_content-index">{index}</th>
            <th className="table_content-name">{song.songName}</th>
            <th className="table_content-options"><BiDotsHorizontalRounded className="dots" onClick/></th>
        </tr> 
)


const Search = (props) => {
    const [songs, setSongs] = React.useState([])

    React.useEffect(()=>{
        axios("https://accounts.spotify.com/api/token",{
            method:"POST",
            headers : {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": 'Basic ' + (new Buffer("cc92a14cc7a740e3bb5b339a6fc61046"+":"+"9f21a3140a224a80b0f0f6ac098a46cf").toString('base64'))
            },
            data: 'grant-type=client_credentials'
        }).then(res=>console.log(res.data))
    },[props])

    return (
        <div>
            <table className="table">
                <tr className="table__content">
                    <th className="table__content-title">i</th>
                    <th className="table__content-title">Song</th>
                    <th className="table__content-title">Length</th>
                    <th className="table__content-title">Options</th>
                </tr>
                {songs.map((song,i)=>{
                    return (<Song song={song} index={i}/>)
                })}
            </table>
        </div>
    )
}

export default Search
