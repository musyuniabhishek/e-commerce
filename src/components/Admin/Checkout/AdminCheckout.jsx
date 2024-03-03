import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCheckout } from "../../../Store/ActionCreators/CheckoutActionCreators";
import { Link } from "react-router-dom";
export default function AdminCheckout() {
  let [data, setData] = useState([]);
  let allStateData = useSelector((state) => state.CheckoutStateData);
  let dispatch = useDispatch();
  function getAPIData() {
    dispatch(getCheckout());
    if (allStateData.length) {
      setData(allStateData.slice(1).reverse());
    }
  }

  useEffect(() => {
    getAPIData();
  }, [allStateData.length]);
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Admin Section</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <h5 className="bg-primary p-3 text-light text-center rounded">
              Checkout{" "}
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th> User Id</th>
                    <th>Payment Mode</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                    <th>Subtotal</th>
                    <th>Shipping</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.userid}</td>
                        <td>{item.paymentmode}</td>
                        <td>{item.paymentstatus}</td>
                        <td>{item.orderstatus}</td>
                        <td>{item.subtotal}</td>
                        <td>{item.shipping}</td>
                        <td>{item.total}</td>
                        <td>{item.date}</td>
                        <td>
                          <Link
                            to={`/admin-single-checkout/${item.id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
