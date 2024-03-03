import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteWishlist,
  getWishlist,
} from "../Store/ActionCreators/WishlistActionCreators";

import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreators";

export default function Profile() {
  var [user, setUser] = useState({
    pic: "",
  });

  var [wishlist, setWishlist] = useState([]);
  var [checkout, setCheckout] = useState([]);
  var allWishlistStateData = useSelector((state) => state.WishlistStateData);
  var allCheckoutStateData = useSelector((state) => state.CheckoutStateData);
  var navigate = useNavigate();
  var dispatch = useDispatch();

  async function getAPIData() {
    var response = await fetch("/user", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    var item = response.find(
      (item) => item.username === localStorage.getItem("username")
    );
    if (item) {
      setUser(item);
    } else {
      navigate("/login");
    }
    dispatch(getWishlist());
    if (allWishlistStateData.length) {
      setWishlist(
        allWishlistStateData.filter(
          (x) => x.userid === localStorage.getItem("userid")
        )
      );
    }
    dispatch(getCheckout());
    if (allCheckoutStateData.length) {
      setCheckout(
        allCheckoutStateData.filter(
          (x) => x.userid === localStorage.getItem("userid")
        )
      );
    }
  }
  function deleteRecord(id) {
    dispatch(deleteWishlist({ id: id }));
    getAPIData();
  }
  useEffect(() => {
    getAPIData();
  }, [allWishlistStateData.length, allCheckoutStateData.length]);
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {user.pic ? (
              <img
                src={`/assets/images/${user.pic}`}
                alt=""
                height="450px"
                width="100%"
              />
            ) : (
              <img
                src="/assets/img/nouser.jpg"
                alt=""
                height="450px"
                width="100%"
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-bordered rounded">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>Username</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{user.address}</td>
                  </tr>
                  <tr>
                    <th>Pin</th>
                    <td>{user.pin}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{user.city}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{user.state}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Link
                        to="/update-profile"
                        className="btn navbar-bg text-light w-100"
                      >
                        Update Profile
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {wishlist.length ? (
        <>
          <div className="cart-table-wrap my-4">
            <h5 className="text-center">Wishlist Section</h5>
            <table className="cart-table">
              <thead className="cart-table-head">
                <tr className="table-head-row">
                  <th className="product-image">Product Image</th>
                  <th className="product-name">Name</th>
                  <th className="product-name">Brand/Color/Size</th>
                  <th className="product-price">Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, index) => {
                  return (
                    <tr className="table-body-row" key={index}>
                      <td className="product-image">
                        <img src={`/assets/images/${item.pic}`} alt="" />
                      </td>
                      <td className="product-name">{item.name}</td>
                      <td className="product-name">
                        {item.brand}/{item.color}/{item.size}
                      </td>
                      <td className="product-price">&#8377;{item.price}</td>
                      <td>
                        <Link
                          to={`/single-product/${item.productid}`}
                          className="btn"
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => deleteRecord(item.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="my-5 text-center">
          <h3 className="text-center">No Items In Cart</h3>
          <Link to="/shop/All/All/All" className="btn btn-primary p-2">
            Shop Now
          </Link>
        </div>
      )}

      {checkout.length ? (
        <>
          <div className="cart-table-wrap my-4">
            <h5 className="text-center">Order Section</h5>
            {checkout.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-4">
                    <table className="table table-bordered">
                      <thead className="cart-table-head">
                        <tr>
                          <th>Order Id</th>
                          <td>{item.id}</td>
                        </tr>
                        <tr>
                          <th>Order Status</th>
                          <td>{item.orderstatus}</td>
                        </tr>
                        <tr>
                          <th>Payment Status</th>
                          <td>{item.paymentstatus}</td>
                        </tr>
                        <tr>
                          <th>Payment Mode</th>
                          <td>{item.paymentmode}</td>
                        </tr>
                        <tr>
                          <th>Subtotal</th>
                          <td>&#8377;{item.subtotal}</td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>&#8377;{item.shipping}</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>&#8377;{item.total}</td>
                        </tr>
                        <tr>
                          <th>Date</th>
                          <td>{item.date}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="col-md-8">
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
                        {item.products.map((item, index) => {
                          return (
                            <tr className="table-body-row" key={index}>
                              <td className="product-image">
                                <img
                                  src={`/assets/images/${item.pic}`}
                                  alt=""
                                />
                              </td>
                              <td className="product-name">{item.name}</td>
                              <td className="product-name">
                                {item.brand}/{item.color}/{item.size}
                              </td>
                              <td className="product-price">
                                &#8377;{item.price}
                              </td>
                              <td>{item.qty}</td>
                              <td>&#8377;{item.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="my-5 text-center">
          <h3 className="text-center">No Order History</h3>
          <Link to="/shop/All/All/All" className="btn btn-primary p-2">
            Shop Now
          </Link>
        </div>
      )}
    </>
  );
}
