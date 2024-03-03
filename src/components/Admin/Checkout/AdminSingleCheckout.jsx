import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckout,
  updateCheckout,
} from "../../../Store/ActionCreators/CheckoutActionCreators";
import { useParams } from "react-router-dom";

export default function AdminSingleCheckout() {
  let [orderstatus, setOrderStatus] = useState("");
  let [paymentstatus, setPaymentStatus] = useState("");
  let [data, setData] = useState({
    products: [],
  });
  let allStateData = useSelector((state) => state.CheckoutStateData);
  let dispatch = useDispatch();
  var { id } = useParams();
  function getAPIData() {
    dispatch(getCheckout());
    if (allStateData.length) {
      var item = allStateData.find((x) => x.id === id);
      setData(item);
      setOrderStatus(item.orderstatus);
      setPaymentStatus(item.paymentstatus);
    }
  }

  function updateItem() {
    dispatch(
      updateCheckout({
        ...data,
        orderstatus: orderstatus,
        paymentstatus: paymentstatus,
      })
    );
    setData({
      ...data,
      orderstatus: orderstatus,
      paymentstatus: paymentstatus,
    });
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
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <th>Payment Mode</th>
                    <td>{data.paymentmode}</td>
                  </tr>
                  <tr>
                    <th>Payment Status</th>
                    <td>
                      {data.paymentstatus}
                      {data.paymentmode === "COD" &&
                      data.paymentstatus === "Pending" ? (
                        <select
                          name="paymentstatus"
                          value={paymentstatus}
                          onChange={(e) => {
                            setPaymentStatus(e.target.value);
                          }}
                          className="form-control"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Done">Done</option>
                        </select>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>Order Status</th>
                    <td>
                      {data.orderstatus}
                      {data.orderstatus !== "Delivered" ? (
                        <select
                          name="orderstatus"
                          value={orderstatus}
                          onChange={(e) => {
                            setOrderStatus(e.target.value);
                          }}
                          className="form-control"
                        >
                          <option value="Order Placed">Order Placed</option>
                          <option value="Order is Packed">
                            Order is Packed
                          </option>
                          <option value="Ready to Ship">Ready to Ship</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Out for Delivery">
                            Out for Delivery
                          </option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>Subtotal</th>
                    <td>&#8377; {data.subtotal}</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>&#8377; {data.shipping}</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>&#8377; {data.total}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{data.date}</td>
                  </tr>
                  {data.rppid ? (
                    <tr>
                      <th>RPPID</th>
                      <td>data.rppid</td>
                    </tr>
                  ) : (
                    ""
                  )}
                  <tr>
                    <th colSpan={2}>
                      {data.paymentstatus === "Pending" ||
                      data.orderstatus !== "Delivered" ? (
                        <button
                          className="btn navbar-bg text-light"
                          onClick={updateItem}
                        >
                          Update Status
                        </button>
                      ) : (
                        ""
                      )}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-center my-3">Checkout Products</h3>
            <table className="cart-table">
              <thead className="cart-table-head">
                <tr className="table-head-row">
                  <th className="product-image">Product Image</th>
                  <th className="product-name">Name</th>
                  <th className="product-name">Brand/Color/Size</th>
                  <th className="product-price">Price</th>
                  <th className="product-price">Qty</th>
                  <th className="product-price">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((item, index) => {
                  return (
                    <tr className="table-body-row" key={index}>
                      <td className="product-image text-center">
                        <img src={`/assets/images/${item.pic}`} alt="" />
                      </td>
                      <td className="product-name text-center">{item.name}</td>
                      <td className="product-name text-center">
                        {item.brand}/{item.color}/{item.size}
                      </td>
                      <td className="product-price text-center">
                        &#8377;{item.price}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-center">&#8377;{item.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
