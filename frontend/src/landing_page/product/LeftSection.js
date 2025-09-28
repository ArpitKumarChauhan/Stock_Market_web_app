import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container border-top mt-5">
    <div className="row mt-5">
        <div className="col-md-6 col-12 text-center">
            <img src={imageURL}/>
        </div>
        <div className="col-md-6 col-12 p-5 mt-2">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
                <a href={tryDemo}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} className="ms-5"> Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="mt-4">
                <a href={googlePlay} style={{textDecoration:"None"}}> <img src="media/images/googlePlayBadge.svg"/></a>
                <a href={appStore} className="ms-3" style={{textDecoration:"None"}}> <img src="media/images/appstoreBadge.svg"/></a>
        
            </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
