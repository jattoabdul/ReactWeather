var React = require('react');
var {Link} = require('react-router');


var About = (props) => {
    return(
        <div>
            <h3 className="text-center page-title">About Component</h3>
            <p>This is a Weather application built on react. I have built this for the complete react Developer Course</p>
            <p>Here are some of the tools i used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map API</a> - I used Open Weather Map API to Get the Weather of different locations
                </li>
            </ul>
        </div>
    );
};

module.exports = About;