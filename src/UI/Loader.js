import React from "react";
import loaderIcon from "../assets/Loader.png";

import  "./Loader.css";

function Loader(props) {
    return (
        <>
            <img className="loader" src={loaderIcon} alt = "Loading" />
        </>
    )
}

export default Loader;