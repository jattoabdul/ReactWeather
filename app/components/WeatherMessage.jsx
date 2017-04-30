var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <div>
            <h3 className="text-center">The Weather in {location} is {temp} <sup>o</sup>C</h3>
        </div>
    );
};

module.exports = WeatherMessage; 