import React from "react";
import PropTypes from "prop-types";

function Music({id, name, rating, image}) {
    return (
        <div>
            <center>
                <h3>
                    {id}번째 Album : {name} <br/>
                    rating : {rating} / 10.0
                </h3>
                <img src={image} alt={name} />
            </center>
        </div>
    );
}

const covers = [
    {
        id: 1,
        name: "Future Nostalgia",
        image: "/images/1.jpg",
        rating: 7.6
    },
    {
        id: 2,
        name: "The New Abnormal",
        image: "/images/2.jpg",
        rating: 8.4
    },
    {
        id: 3,
        name: "Punisher",
        image: "/images/3.jpg",
        rating: 7.0
    }
];

Music.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    image : PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App">
        <h1>
            <center>대중 음악의 이해</center>
        </h1>
        <h2>
            <center>정기 음평회</center>
        </h2>
        {covers.map(cover => 
            <Music
                key={cover.id} 
                id={cover.id}
                name={cover.name}
                rating={cover.rating}
                image={cover.image}
            />
        )}
    </div>
  );
}

export default App;
