import React , {useEffect, useState} from "react";
import { getAllLaunches } from "../api/getLaunches";
import LaunchList from "./LaunchList/LaunchList";

function AllLaunches(props) {

    let [ launchData , setLaunchData] = useState(null);

    useEffect(() => {
        (async function() {
            let x = await getAllLaunches();
            setTimeout(() => {
                setLaunchData(x);
            }, 1000);
        })();
    },[]);

    return <LaunchList data = {launchData} />
}

export default AllLaunches;