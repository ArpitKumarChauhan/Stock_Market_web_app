import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5">Technology</h1>
        <h5 className="text-muted mt-3 fs-4">Sleek, modern and intuitive trading platforms</h5>
        <p className="text-muted">
          Check out our{" "}
          <Link to="/" style={{ textDecoration: "None" }}>
            inverstment offerings
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
