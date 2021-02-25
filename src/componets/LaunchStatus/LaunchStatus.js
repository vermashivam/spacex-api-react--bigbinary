import React from 'react';
import "./LaunchStatus.css";

let LaunchStatus = ({statusAsBoolean}) => {
    if(statusAsBoolean === true){
        return (<p className = "successStatus">Success</p>)
    }
    else if(statusAsBoolean === false){
        return (<p className = "failedStatus">Failed</p>)
    }
    else{
        return (<p className = "upcomingStatus">Upcoming</p>)
    }
}

export default LaunchStatus;