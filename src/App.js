import React from "react";
import axios from "axios";
import Album from "./Album";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        albums : []
    }

    getAlbums = async () => {
        var url = "http://moonmusic.duckdns.org:8081/api/albums";
        const albums = await axios.get(url);
        this.setState({albums: albums.data, isLoading: false});
    }

    constructor(props) {
        super(props);

        const meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    componentDidMount() {
        document.title = "정기음평회 History Webpage";
	this.getAlbums();
    }

    render() {
        const { isLoading, albums } = this.state;
        return (
            <section className = "container">
                <div className = "web_title">
                    <center>
                        <h1>
                            대중 음악의 이해
                        </h1>
                        <h2>
                            정기 음평회 History
                        </h2>
                    </center>
                </div>
                {isLoading ? (
                    <div className = "loader">
                        <span className ="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className = "albums">
                        {albums.map(album => (
                            <Album 
                                key = {album.id}
                                id = {album.id}
                                name = {album.name}
                                artist = {album.artist}
                                genre = {album.genre}
                                nation = {album.nation}
                                year = {album.year}
                                volume = {album.volume}
                                rating = {album.rating}
                            />
                        ))}
                    </div>
                )}
            </section>
        )
    }
}

export default App;
