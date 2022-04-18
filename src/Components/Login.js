import React from "react";
import "../Stylesheets/Login.css"

const login=()=>{
return(
<div id='container'>
        <div id='subContainer'>
                <div id='logo'>
                    <h1>INSI</h1>
                </div>
            <div id='textFields'>
                <input type='text' class='input' placeholder="Username"/>
                <input type='password'class='input' placeholder="Password"/>
            </div>
            <div id='loginButton_fgtpwd'>
                <input type='submit' value='Login' id='loginButton'/>   
                <a href="#">Forgot password?</a> 
            </div>     
        </div>
</div>

);




}
export default login;