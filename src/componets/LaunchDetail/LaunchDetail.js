import React from "react";
import LaunchStatus from "../LaunchStatus/LaunchStatus";
import "./LaunchDetail.css";

const LaunchDetail = ({launchData}) => {

    if(!launchData){
        return <></>
    }

    let tabularData = [
            {title : 'Flight Number' , value : launchData.flight_number},
            {title : 'Mission Name' , value : launchData.mission_name},
            {title : 'Rocket Type' , value : launchData.rocket.rocket_type},
            {title : 'Rocket Name' , value : launchData.rocket.rocket_name},
            {title : 'Launch Date' , value : launchData.launch_date_utc},
            {title : 'Launch Site' , value : launchData.launch_site.site_name}
        ].map((data,index) => (
            <div key = {index} className = "tableRow">
                <div className = "tableTitle">{data.title}</div>
                <div className = "tableValue">{data.value}</div>
            </div>
        ));

    return (
        <div className = "launchDetail" >
            <div className = "launchDetailHead">
                <div>
                    <h2>{launchData.mission_name}</h2>
                    <h4>{launchData.rocket.rocket_name}</h4>
                </div>
                <LaunchStatus statusAsBoolean = {launchData.launch_success}/>
            </div>
            <p className = "launchDescription" >{launchData.details}</p>
            <div className = "tableContainer">
                {tabularData}
            </div>
        </div>);
};

export default LaunchDetail;