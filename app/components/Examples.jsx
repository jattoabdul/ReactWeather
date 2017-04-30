var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    return(
        <div>
            <h3 className="text-center">Examples</h3>
            <p>Here are a few Example locations to try out!</p>
            <ol>
                <li>
                    <Link to='/?location=Ilorin'>Ilorin, NG</Link>
                </li>
                <li>
                    <Link to='/?location=Abuja'>Abuja, NG</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;