import React from "react";
import PropTypes from "prop-types";
import "./Album.css"

function Album({id, name, artist, genre, nation, year, volume, rating}) {
    const imgsrc = "http://moonmusic.duckdns.org:3000/images/" + id + ".jpg"
    var genreName, textColor, Comment;

    switch(genre) {
    case 1:
            genreName = "POP";
            break;
    case 2:
            genreName = "R&B/Soul";
            break;
	case 3:
	    genreName = "Rock";
	    break;
	case 4:
	    genreName = "J-POP";
	    break;
	case 5:
	    genreName = "Jazz";
	    break;
	case 6:
	    genreName = "HipHop";
	    break;
	case 7:
	    genreName = "Electronic";
	    break;
        default:
            genreName = "Others";
            break;
    }

    if (rating >= 8.4) {
        textColor = '#ff0033';
        Comment = '압도적으로 긍정적';
    }
    else if (rating > 7.0) {
        textColor = '#330033';
        Comment = '긍정적';
    }
    else if (rating > 5.2) {
        textColor = '#333333';
        Comment = '부정적';
    }
    else {
        textColor = 'gray';
        Comment = '압도적으로 부정적';
    }

    return (
        <div className = "album">
            <center>
            <div className = "album__name">{name}</div>
            <div className = "album__artist">{artist} | {year} ({nation})</div>
            <div className = "album__genre">{genreName} ⦁ {volume} tracks</div>
            <img src = {imgsrc} alt = {name} />
            <div className = "album__rating"
                 style = {{
                     color: textColor
                 }}> {rating}
            </div>
            <div className = "album__comment"
                 style = {{
                     color: textColor
                 }}> {Comment}
            </div>
            </center>
        </div>
    );
}


Album.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.number.isRequired,
    nation: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}


export default Album;
