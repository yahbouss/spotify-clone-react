import './App.scss';
import CreatePlaylist from './Components/CreatePlaylist/CreatePlaylist.component';
import Navbar from './Components/Navbar/Navbar.component';
import Playlist from './Components/Playlist/Playlist.component';
import Sidebar from './Components/Sidebar/Sidebar.component';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './Components/Search/Search.components';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        <Route path='/search' component={Search}/>
        <Route path="/playlist" component={Playlist}/>
        <Route path="/create" component={CreatePlaylist}/>
      </div>
    </Router>
  );
}

export default App;
