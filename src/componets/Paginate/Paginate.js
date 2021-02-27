import React from 'react';
import './Paginate.css';

let Page = ({pageClicked = () =>{} , number = '---'}) => {

    let pageStyle = {
        width : '40px',
        height : '40px',
        border: '1px solid #E4E4E7'
    }

    return (
        <div onClick = {() => pageClicked(number)} style = {pageStyle}>
            <p>{number}</p>
        </div>
    )
}
 
let Paginate = ({totalItems = 0 , itemPerPage = 10 , pageClicked, currentPage}) => {
    const maxTabToDisplay = 7;
    let noOfPages = Math.ceil(totalItems/itemPerPage);
    
    let page = [];

    let navPage = (direction) => {
        switch(direction){
            case "<":
                pageClicked(number => {
                    if(number > 1){
                        return number - 1;
                    }
                    return number;
                })
                break;
            case ">":
                pageClicked(number => {
                    if(number < noOfPages){
                        return number + 1;
                    }
                    return number;
                })
                break;
            default:
                //do nothing
                break;
        }
    }

    //previous page
    page.push(<Page number = "<" pageClicked = {navPage} />);

    if(noOfPages <= maxTabToDisplay || currentPage <= maxTabToDisplay){
        for(let itr = 0; itr < maxTabToDisplay && itr < noOfPages; itr++){
            page.push(<Page number = {itr+1} pageClicked = {pageClicked} key = {itr}/>);
        }
    }
    else{
        if(currentPage > maxTabToDisplay){
            for(let itr = 0; itr < maxTabToDisplay && itr < noOfPages; itr++){
                page.push(<Page number = {currentPage - maxTabToDisplay + itr + 1} pageClicked = {pageClicked} key = {itr}/>);
            }
        }
        
    }
    
    //next page
    page.push(<Page number = ">" pageClicked = {navPage} />);

    return (
        <div className = "paginate">
            {page}
        </div>
    );
}

export default Paginate;