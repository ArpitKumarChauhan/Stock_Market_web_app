import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid mt-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 mt-5'/>
                <div className='col-sm-12'>
                    <h1 className='mt-5'>Invest in Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"30%",margin:"0 auto"}}>Signup now</button>           
                </div>
            </div>
        </div>       
    );
}

export default Hero;