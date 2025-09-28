import React from 'react';

function Universe() {
    return <div className="container mt-5">
    <div className="row text-center mt-5">
        <h1 className='fs-2 mt-3'>The Zerodha Universe</h1>
        <p className='text-muted mt-2 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/streakLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/dittoLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Insurance</p>
        </div>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
        <div className="col-md-4 col-6 text-center p-3">
            <img src="media/images/smallcaseLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <button className='p-1 btn btn-primary fs-5 mt-5' style={{width:"30%",margin:"0 auto"}}>Signup now</button>           
    </div>
  </div>;
}

export default Universe;