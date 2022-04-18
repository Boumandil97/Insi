import React from "react";
import '../Stylesheets/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const header= ()=>{
return(
    <div class='header'>
        <div id="firstRow">
            <div id="dropdownLists">
                <button  class='btn btn-secondary dropdown-toggle' id="dropdownMenuButton" type="button" data-toggle='dropdown' aria-haspopup="false" aria-expanded="true">Customer
                <i class='fa fa-caret'></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>

                </div>
            </div>
            <div id="searchbarAndLogos">

            </div>
        </div>
        <div id="secondRow">

        </div>
        <div id="thirdRow">

        </div>
    </div>
);
}
export default header;