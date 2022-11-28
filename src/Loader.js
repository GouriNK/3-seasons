import React from "react";

const Loader = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>
    );
};

// if any props are missing or not passed in, these values are used.
Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;