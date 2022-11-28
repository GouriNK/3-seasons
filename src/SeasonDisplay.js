import React from "react";
import "./SeasonDisplay.css";

// component configuration obj
const seasonConfig = {
    summer : {
        text: "Let's hit the beach!",
        iconName : 'sun'
    },
    winter : {
        text:  'Brr...It is Chilly!!',
        iconName : 'snowflake'
    }
}


// remove as much logic calculation as possible from func component to other global functions
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat>0 ? 'summer' : 'winter';
    } else {
        return lat>0 ? 'winter' : 'summer';
    }

}

// add a css class name to the root div of this component with the same name as the component (for ease)
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;