import React from 'react';
import { Link } from'react-router-dom';
function CreateTicket() {
    return (  
        <div className='container-fluid'>
            <div className='row p-5 mt-3'>
                <div className="fs-2">
                    <h2>To create a ticket, select a relevent topic</h2>
                </div>
                <div className='col-12 col-md-4 p-5 mt-3'>
                    <h5 className='fs-4'><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h5>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Online Account</Link>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Offline Account Opening</Link> <br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership and HUF Account Opening</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>NRI Account Opening</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Charges at Zerodha</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Getting Started</Link><br/>
                </div>
                <div className='col-12 col-md-4 p-5 mt-3'>
                    <h5 className='fs-4'>Your Zerodha Account</h5>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Login Credentials</Link> <br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Account Modification and Segment Addition</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>DP ID and bank details</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of shares</Link><br/>
                </div>
                <div className='col-12 col-md-4 p-5 mt-3'>
                    <h5 className='fs-4'>Your Zerodha Account</h5>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Margin/leverage, Product and Order types</Link> <br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Kite Web and Mobile</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate Actions</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Sentinel</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Kite API</Link> <br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Pi and other platforms</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>Stockreports+</Link><br/>
                    <Link to="/" style={{textDecoration:"none",lineHeight:"2.5"}}>GTT</Link><br/>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;