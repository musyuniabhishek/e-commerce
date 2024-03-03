import React from "react";

export default function Confirmation() {
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Order Confirmation</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      <div className="container my-5 text-center">
        <h3 className="text-success">Thank You !!!</h3>
        <h4>Your Order Has Been Placed</h4>
        <h4>Now You Can Track Your Order in Profile Section</h4>
      </div>
    </>
  );
}
