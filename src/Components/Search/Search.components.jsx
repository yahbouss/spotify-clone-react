import './Search.scss'
import React from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {BiDotsHorizontalRounded} from "react-icons/bi"

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

let api = axios.create({
    baseURL:"http://localhost:8080/",
    headers : {
        "Access-Control-Allow-Origin" : "*"
    }
})

const addSong= (pl, song)=>{
    api.post("/playlist/addSong",
     {
         name: pl, 
         songName:song.name,
         songUrl:song.external_urls.spotify, 
         songLength:millisToMinutesAndSeconds(song.duration_ms), 
         songArtist:song.artists[0].name})
}

const Search = (props) => {
    const [songs, setSongs] = React.useState([])
    const [playlists, setPlaylists] = React.useState([])
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(()=>{
        axios(`https://api.spotify.com/v1/search?q=${queryString.parse(props.location.search).search}&type=track%2Cartist`,{
            method:"GET",
            headers : {
                //"Access-Control-Allow-Origin" : "*",
                "Accept": "application/json",
                "Content-Type" : "application/json",
                "Authorization": "Bearer BQBgdXhFFoB8J5GR_HZROflSPIiBaBYrKrUVG34wHhkOyWs6jATW0HZbhY8rQ9BZVprFKA6TnPnX7-kS8ufHWXDNgnoz3gLhs1uSc73tkjBUXIlK7OzYFZuGbmmnaNogd0jz4Q2vdcpFiTZBi241ccNEBMkmBX_jtyfnc1EWXYZ2BcoHwURhg-K1DFlXLmV22oQEgaA7ZAoKal65Ipw7lwbw_xz8YSDx_lqzPdfvXW16XLyUVkyObLD8SYHas5vZ09v8O6HQtpBoDoexJ8yyDLd5EH4"
            },
        }).then(res=>{
            console.log(res.data.tracks.items)
            setSongs(res.data.tracks.items)
        })
        api.get("/playlist/getAll").then(res=>setPlaylists(res.data))
    },[props.location])

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
                    return (
                        <tr>
            <th className="table__content-index">{i}</th>
            <th className="table__content-name">{song.name}</th>
            <th className="table__content-duration">{millisToMinutesAndSeconds(song.duration_ms)}</th>
            <th className="table__content-title">{song.artists[0].name}</th>
            <th className="table__content-options"><BiDotsHorizontalRounded className="dots" onClick={e=>setToggle(!toggle)}/></th>
            {toggle?(<div>
                {playlists.map(pl=>(<button onClick={e=>addSong(pl.playlistName,song)}>{pl.playlistName}</button>))}
            </div>):null}
        </tr> 
                    )
                })}
            </table>
        </div>
    )
}

export default Search
