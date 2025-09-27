import React from 'react';

function Team() {
    return (  
    <div className="container mt-5">
      <div className="row mt-5 p-5 mb-5 border-top">
        <h1 className="text-center">
          People
        </h1>
      </div>
      <div className="row p-md-5 mt-3 fs-6 text-muted">
        <div className="col-12 col-md-6  p-0 p-md-5 text-center">
          <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%", width:'50%'}}/>
            <h6 className='mt-3'>Nithin Kamath<br/>
            Founder, CEO
            </h6>
        </div>
        <div className="col-12 col-md-6 mt-2 p-0 p-md-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
           </p>
        </div>
      </div>
    </div>
    );
}

export default Team;