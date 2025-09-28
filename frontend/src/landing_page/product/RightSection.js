import React from 'react';

function RightSection({
    imageURL, 
    productName, 
    productDescription, 
    learnMore,
}){
    return <div className="container border-top mt-5">
    <div className="row">
        <div className="col-md-6 col-12 order-2 order-md-1 mt-md-5 mt-1 p-5">
            <h1 className='mt-md-5 pt-md-5'>{productName}</h1>
            <p>{productDescription}</p>
            <div>
                <a href={learnMore}> Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className="col-md-6 col-12 order-1 order-md-2 text-center p-0">
            <img src={imageURL} style={{width:"100%"}}/>
        </div>
    </div>
  </div>;
}

export default RightSection;