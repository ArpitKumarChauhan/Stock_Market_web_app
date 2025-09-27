import React from 'react';
function Pricing() {
    return ( 
        <div className='container mb-5 mt-5'>
            <div className='row'>
                <div className='col-md-4 col-10'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"None"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-md-2 col-2'></div>
                <div className='col-md-6 col-12 mb-5 mt-5 m-md-0'>
                    <div className='row text-center'>
                        <div className='col-md-1 col-2'></div>
                        <div className='col-md-5 col-4 p-3 border'>
                            <h1 className='mb-3'>Rs.0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-md-5 col-4 p-3 border'>
                            <h1 className='mb-3'>Rs.20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                        <div className='col-md-1 col-2'></div>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default Pricing;