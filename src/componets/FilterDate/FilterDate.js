import React , {useState} from 'react';
import DatePicker from 'react-datepicker';
import { useHistory } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';

function FilterDate(props){
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    let [message, setMessage] = useState({
        show : false,
        message : null
    });

    let history = useHistory();

    let formatDate = (dateObj) =>{
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth();
        if(month < 10){
            month = "0" + month;
        }
        let date = dateObj.getDate();
        if(date < 10){
            date = "0" + date;
        }
        return year + "-" + month + '-' + date;
    }
    
    let applyFilter = () => {
        if(startDate === null || endDate === null){
            setMessage({
                show : true,
                message : 'All fields are required!'
            });
        }
        else{
            props.setDate(prevDate => {
                let newDate = {...prevDate};
    
                newDate.startDate = startDate;
                newDate.endDate = endDate;
                newDate.show = false;
                if(startDate !== null && endDate !== null){
                    history.push("/" + (startDate ? "start=" + formatDate(startDate) : "") 
                                + "/"
                                + (endDate ? "end=" + formatDate(endDate) : ""));
                }
                return newDate;
            });
        }
    }

    return (
        <>
            <div style = {{display : 'flex' , justifyContent : 'space-around', paddingBottom : '10px' , paddingTop : '10px'}}>
                <div>
                    <p> Start Date (YYYY-MM-DD) : </p>
                        <DatePicker selected = {startDate} 
                                onChange={date => setStartDate(date)}
                                dateFormat = "yyyy-MM-dd"
                                maxDate = {endDate}
                                />
                </div>
                <div>
                    <p> End Date (YYYY-MM-DD) :</p>
                        <DatePicker selected = {endDate} 
                                onChange={date => setEndDate(date)}
                                dateFormat = "yyyy-MM-dd"
                                minDate = {startDate}
                                />
                </div>
            </div>
            <button onClick = {applyFilter} >Apply Filter</button>
            <p style = {message.show ? {} : {display : 'none'}}>{message.message}</p>
        </>
    )
}

export default FilterDate;