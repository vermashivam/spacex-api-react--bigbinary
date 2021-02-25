import React ,{useState} from "react";
import Loader from "../../UI/Loader/Loader";
import NoData from "../../UI/NoData";
import Paginate from "../Paginate/Paginate";
import Modal from "../../UI/Modal/Modal";
import LaunchDetail from "../LaunchDetail/LaunchDetail";

import './LaunchList.css';
import LaunchStatus from "../LaunchStatus/LaunchStatus";

function LaunchList(props) {

    const noOfItemsInPage = 12;
    let [page , setPage] = useState(1);
    let [modalData , setModalData] = useState(null);

    let openModal = (launchData) => {
        console.log(launchData);
        setModalData(launchData);
    }

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
                                    
                                    return (<tr key = {index} onClick = {() => openModal(item)}>
                                                <td>{item.flight_number ? item.flight_number: notAvailable}</td>
                                                <td>{item.launch_date_utc ? item.launch_date_utc : notAvailable}</td>
                                                <td>{item.launch_site.site_name ? item.launch_site.site_name : notAvailable}</td>
                                                <td>{item.mission_name ? item.mission_name : notAvailable}</td>
                                                <td>{notAvailable}</td>
                                                <td><LaunchStatus statusAsBoolean = {item.launch_success} /></td>
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
            <Modal show = {modalData !== null} modalClosed = {() => setModalData(null)} >
                <LaunchDetail launchData = {modalData}/>
            </Modal>
        </div>
    );
}

export default LaunchList;