import React from 'react';
function Brokerage() {
    return (  
        <div className='container mt-3  border-top'>
            <div className='row mt-5'>
                <div className='col-8 mt-5'>
                    <h3 className='fs-5 text-primary'>Brokerage Calculator</h3>
                    <ul className='text-left text-muted' style={{lineHeight:"2.5"}}>
                        <li>Call & Trade and RMS auot-squareoff: Additional charges Rs.50 + GST per order. </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged Rs.20 per contract note. Courier charges apply.</li>
                        <li>For NRI account[non-PIS], 0.5% or Rs.100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or Rs.200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged Rs.40 per executed order insted of Rs.20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 mt-5 text-center'>
                    <h3 className='fs-5 text-primary'>List of charges</h3>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;