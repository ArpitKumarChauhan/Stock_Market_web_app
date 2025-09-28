import React from 'react';
import {Link} from'react-router-dom';
function Footer() {
    return (  
        <div className='container-fluid mt-5 border-top bg-light'>
            
            <div className='row mt-5'>
                <div className='col-md-3 col-4 mb-5'>
                    <img src="media/images/logo.svg" alt="Logo" className="logo-img mb-2"/> 
                    <p> &copy; 2010 - 2026, Zerodha Broking Ltd. <br/>All rights reserved.</p>   
                    <p className='border-bottom'></p>
                </div>
                
                <div className='col-12 col-md-3 mb-5'>
                    <h5>Company</h5>
                    <div>
                        <Link className='text-decoration-none  text-body text-muted' to="/about">About</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/product">Products</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/pricing">Pricing</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/referral-programme">Referral programme</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/career">Careers</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/zerodha-tech">Zerodha.tech</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/press&media">Press & media</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/zerodha-care">Zerodha cares (CSR)</Link><br/>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-5'>
                    <h5>Support</h5>
                    <div>
                        <Link className='text-decoration-none  text-body text-muted' to="/contact">Contact</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/support-portal">Support portal</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/z-connect-blog">Z-Connect blog</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/list-of-charge">List of charges</Link><br/>
                        <Link className='text-decoration-none  text-body text-muted' to="/download-resource">Downloads & resources</Link><br/>
                    </div>
                    
                </div>
                <div className='col-12 col-md-3 mb-5'>
                    <h5>Account</h5>
                    <div>
                        <Link className='text-decoration-none text-body text-muted' to="/open-account">Open an Account</Link><br/>
                        <Link className='text-decoration-none text-body text-muted' to="/fund-transfer">Fund transfer</Link><br/>
                        <Link className='text-decoration-none text-body text-muted' to="/60-day-challenge">60 day challenge</Link><br/>
                    </div>
                </div>
            </div>
            <div className='text-muted small-text mt-5'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on <sapan className='text-primary'>SEBI SCORES:</sapan> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p className='text-primary'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            </div>
        </div>
    );
}

export default Footer;