var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <div>
            <p>The Weather in {location} is {temp} <sup>o</sup>C</p>
        </div>
    );
};

module.exports = WeatherMessage; 