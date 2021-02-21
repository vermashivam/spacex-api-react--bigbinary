import React ,{useState} from "react";
import Loader from "../../UI/Loader";
import NoData from "../../UI/NoData";
import Paginate from "../Paginate/Paginate";

import './LaunchList.css';

function LaunchList(props) {

    const noOfItemsInPage = 12;
    let [page , setPage] = useState(1);

    let display = null;

    if(props.data == null){
        display = <Loader />
    }
    else if(props.data && props.data.length === 0){
        display = <NoData />
    }
    else{
        console.log(props.data,props.data.slice((page - 1) * noOfItemsInPage, (page - 1) * noOfItemsInPage + noOfItemsInPage));
        let displayData = props.data.slice((page - 1) * noOfItemsInPage,(page - 1) * noOfItemsInPage +  noOfItemsInPage)
                                .map((item , index) => {
                                    const notAvailable = "NA";

                                    let getLaunchStatus = (statusAsBoolean) => {
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

                                    let launch_success = getLaunchStatus(item.launch_success);
                                    
                                    return (<tr key = {index}>
                                                <td>{item.flight_number ? item.flight_number: notAvailable}</td>
                                                <td>{item.launch_date_utc ? item.launch_date_utc : notAvailable}</td>
                                                <td>{item.launch_site.site_name ? item.launch_site.site_name : notAvailable}</td>
                                                <td>{item.mission_name ? item.mission_name : notAvailable}</td>
                                                <td>{notAvailable}</td>
                                                <td>{launch_success ? launch_success : notAvailable}</td>
                                                <td>{item.rocket.rocket_name ? item.rocket.rocket_name : notAvailable}</td>
                                            </tr>);
                                });
        
        display = ( <tbody>
                        {displayData}
                    </tbody> );
    }

    let displayHead = (<thead>
            <tr>
                <th>No.</th>
                <th>Launched(UTC)</th>
                <th>Location</th>
                <th>Mission</th>
                <th>Orbit</th>
                <th>Launch Status</th>
                <th>Rocket</th>
            </tr>
        </thead>);

    return (
        <div className="displayArea">
            <table className = "table">
                {displayHead}
                {display}
            </table>
            <Paginate totalItems = {props.data ? props.data.length : 0} itemPerPage = {noOfItemsInPage} pageClicked = {setPage} currentPage={page} />
        </div>
    );
}

export default LaunchList;