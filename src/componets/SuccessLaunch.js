import React , {useEffect , useState} from "react";
import { useParams } from 'react-router-dom';
import { getSuccessLaunch } from "../api/getSuccessLaunch";
import LaunchList from "./LaunchList/LaunchList";

function SuccessLaunch(props) {

    let { val } = useParams();
    let [ launchData , setLaunchData] = useState(false);
    //console.log(launchData);

    useEffect(() => {
        (async function() {
            try{
                let x = await getSuccessLaunch(val.slice(1));
                setTimeout(() => {
                    setLaunchData(x);
                }, 1000);
            }catch(err){

            }
        })();
    },[val]);

    return <LaunchList data = {launchData} />
}

export default SuccessLaunch;