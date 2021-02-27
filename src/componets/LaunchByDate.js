import React , {useEffect , useState} from "react";
import { useParams } from 'react-router-dom';
import { getLaunchByDate } from "../api/getLaunchByDate";
import LaunchList from "./LaunchList/LaunchList";

const LaunchByDate = (props) => {

    let { startDate , endDate } = useParams();
    let [ launchData , setLaunchData] = useState(false);
    //console.log(launchData , startDate , endDate);

    useEffect(() => {
        (async function() {
            try{
                let x = await getLaunchByDate(startDate.slice(1), endDate.slice(1));
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

export default LaunchByDate;