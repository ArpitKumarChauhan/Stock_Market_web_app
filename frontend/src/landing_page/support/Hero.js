import React from 'react';
import { Link } from'react-router-dom';

function Hero() {
    return (  
        <div className="container-fluid" id="supportColor">
            <div class="container">
                <div className="row mt-5 mb-5 text-white m-md-5">
                    <div className='col-12 mt-5' id="supportWrapper">
                        <h4>Support Portal</h4>
                        <Link to="/" className='text-white text-end' >Track Tickets</Link>
                    </div>
                </div>
                <div className='row mt-5 mx-5 p-md-3'>
                    <div className='col-md-6 col-12 mb-5 text-white'>
                        <h2>Search for an answer or browser help topics to create a ticket</h2>
                        <input placeholder="Eg. how do I activate F&O" className='mt-5 mb-4'/><br/>
                        <Link to="/" className='text-white fs-6'>Track account opening</Link>
                        <Link to="/" className='text-white ms-3 fs-6'>Track segment activation</Link>
                        <Link to="/" className='text-white ms-3 fs-6'>Intraday margins</Link>
                        <Link to="/" className='text-white ms-3 fs-6'>Kite user manual</Link>
                    </div>
                    <div className='col-md-6 mb-5 col-12 text-white'>
                        <h1 className='ms-md-5'>Featured</h1>
                        <ol className='ms-md-5'>
                            <li>
                                <Link to="/" className='text-white'>Current Takeovers and Delisting - January 2025</Link>
                            </li>
                            <li>
                                <Link to="/" className='text-white'>Track segment activation</Link>
                            </li>
                        </ol>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;