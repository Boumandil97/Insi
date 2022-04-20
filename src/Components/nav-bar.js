import React from 'react'
import '../Stylesheets/nav-bar.css'

const navbar=()=>{
    return(
        <div id='navbar'>
          <div id='navbar-container'>
                <div id='logofield'>
                    <div id='logo'>
                            <h1>INSI</h1>
                    </div>
                </div>
                
                <div id='navbar-items'>
                  <h4 class='headings'>
                    Settings
                      </h4> 
                      <div class='buttons'>
                          <input type='button' value='My Account' class='button'/>
                          <input type='button' value='Dashboard'class='button'/>
                          <input type='button' value='Add New +'class='button'/>
                          </div> 
                    <h4 class='headings'>
                    Inputs
                      </h4>   
                      <div class='buttons'>
                          <input type='button' value='Trial Balance' class='button'/>
                          <input type='button' value='Form'class='button'/>
                          <input type='button' value='Captions'class='button'/>
                        </div> 

                        <h4 class='headings'>
                    Reports
                      </h4>   
                      <div class='buttons'>
                          <input type='button' value='Title' class='button'/>
                          <input type='button' value='Table Of Contents'class='button'/>
                          <input type='button' value='Audit Report'class='button'/>
                          <input type='button' value='Balance Sheet' class='button'/>
                          <input type='button' value='Income Statement'class='button'/>
                          <input type='button' value="Equity Holder's Statement"class='button'/>
                          <input type='button' value='Cashflow Statement' class='button'/>
                          <input type='button' value='Significant Accounting Policies'class='button'/>
                          <input type='button' value='Notes'class='button'/>
                          <input type='button' value='Schedules' class='button'/>
                          <input type='button' value='Checks'class='button'/>
                          <input type='button' value="KPI's"class='button'/>
                        </div> 
                </div>
                </div>
        </div>
    );
}
export default navbar;