import React from "react";
import '../Stylesheets/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFileExcel, faFilePdf, faFileWord, faHome, faMailBulk, faMailForward, faMailReply, faMessage, faQuestionCircle, faSearch, faShare, faShareAltSquare } from '@fortawesome/free-solid-svg-icons'


const header= ()=>{
return(
    <div class='header'>
        <div id="firstRow">
            <div id="dropdownLists">
                <button  class='btn btn-secondary dropdown-toggle' id="dropdownMenuButton" type="button" data-toggle='dropdown' aria-haspopup="false" aria-expanded="true"> Customer</button>
                <button  class='btn btn-secondary dropdown-toggle' id="dropdownMenuButton" type="button" data-toggle='dropdown' aria-haspopup="false" aria-expanded="true">User </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>

                </div>
            </div>
            <div id="searchbarAndLogos">
                <div class='searchbar'>
                    <input type="text" placeholder="search..." id='search-input'/>
                    <a href="##" class="icon">
                    <FontAwesomeIcon icon={faSearch}  />
                        </a>
                    </div>
                    
                    <div class='icons'>
                    <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faQuestionCircle}  />
                        </a>
                        <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faMessage}  />
                        </a>
                        <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faFileWord}  />
                        </a>
                        <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faFileExcel}  />
                        </a>
                        <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faFilePdf}  />
                        </a>
                        <a href="##" class="icons-div">
                    <FontAwesomeIcon icon={faShareAltSquare}  />
                        </a>
                        
                        </div>
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