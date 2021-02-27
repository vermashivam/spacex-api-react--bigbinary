import React , {useEffect , useState} from "react";
import { getPastLaunches } from "../api/getPastLaunches";
import LaunchList from "./LaunchList/LaunchList";

function PastLaunches(props) {

    let [ launchData , setLaunchData] = useState(false);
    //console.log(launchData);

    useEffect(() => {
        (async function() {
            try{
                let x = await getPastLaunches();
                setTimeout(() => {
                    setLaunchData(x);
                }, 1000);
            }
            catch(err){

            }
        })();
    },[]);

    return <LaunchList data = {launchData} />
}

export default PastLaunches;