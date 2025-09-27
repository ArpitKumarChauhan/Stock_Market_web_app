import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 p-5">
        <h1 className="mt-5 fs-2 text-center">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-md-5 mt-3 border-top fs-6 text-muted">
        <div className="col-12 col-md-6  mt-5 p-0 p-md-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-5 p-0 p-md-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <span className="text-primary">Rainmatter</span>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is <span className="text-primary">saying about
            us</span> or learn more about our business and product <span className="text-primary">philosophies.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
