import React , {useEffect, useState} from "react";
import { getUpcomingLaunches } from "../api/getUpcomingLaunches";
import LaunchList from "./LaunchList/LaunchList";

function UpcomingLaunches(props) {

    let [ launchData , setLaunchData] = useState(false);
    //console.log(launchData);

    useEffect(() => {
        (async function() {
            try{
                let x = await getUpcomingLaunches();
                setTimeout(() => {
                    setLaunchData(x);
                }, 1000);
            }catch(err){

            }
        })();
    },[]);

    return <LaunchList data = {launchData} />
}

export default UpcomingLaunches;