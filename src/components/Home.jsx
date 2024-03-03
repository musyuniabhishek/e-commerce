import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Testimonials from "./Testimonials";
import BrandLogo from "./BrandLogo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Store/ActionCreators/ProductActionCreators";
export default function Home() {
  let [products, setProducts] = useState([]);
  var dispatch = useDispatch();
  var allProductStateData = useSelector((state) => state.ProductStateData);
  function getAPIData() {
    dispatch(getProduct());
    if (allProductStateData.length) {
      setProducts(allProductStateData.slice(1).reverse().slice(0, 6));
    }
  }

  useEffect(() => {
    getAPIData();
  }, [allProductStateData.length]);
  return (
    <>
      {/* <!-- home page slider --> */}
      <OwlCarousel className="owl-theme" loop margin={1} items={1} nav>
        {/* <!-- single home slider --> */}
        <div
          className="single-homepage-slider  homepage-bg-1"
          style={{ height: "600px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                <div className="hero-text" style={{ marginTop: "150px" }}>
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Female Fashion</p>
                    <h1>Get 50% off on Traditional wears</h1>
                    <div className="hero-btns">
                      <Link to="/shop/Female/All/All" className="boxed-btn">
                        Shop now
                      </Link>
                      <Link to="/contact" className="bordered-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- single home slider --> */}
        <div
          className="single-homepage-slider homepage-bg-2"
          style={{ height: "600px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="hero-text" style={{ marginTop: "150px" }}>
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Men`s Fashion</p>
                    <h1>40% off on daily wears</h1>
                    <div className="hero-btns">
                      <Link to="/shop/Male/All/All" className="boxed-btn">
                        Shop now
                      </Link>
                      <Link to="/contact" className="bordered-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- single home slider --> */}
        <div
          className="single-homepage-slider homepage-bg-3"
          style={{ height: "600px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-right">
                <div className="hero-text" style={{ marginTop: "150px" }}>
                  <div className="hero-text-tablecell text-center">
                    <p className="subtitle">Mega Sale Going On!</p>
                    <h1>Get 50% off on kids fashion</h1>
                    <div className="hero-btns">
                      <Link to="/shop/Kids/All/All" className="boxed-btn">
                        Shop now
                      </Link>
                      <Link to="/contact" className="bordered-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/* <!-- end home page slider --> */}

      {/* <!-- features list section --> */}
      <div className="list-section p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="content">
                  <h3>Free Shipping</h3>
                  <p>When order over $75</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync"></i>
                </div>
                <div className="content">
                  <h3>Refund</h3>
                  <p>Get refund within 3 days!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end features list section --> */}

      {/* <!-- product section --> */}
      <div className="product-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Latest</span> Products
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p> */}
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 text-center" key={index}>
                  <div className="single-product-item">
                    <div className="product-image">
                      <Link to={"/single-product/" + item.id}>
                        <img
                          src={`/assets/images/${item.pic1}`}
                          alt=""
                          height="250px"
                        />
                      </Link>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="product-price">
                      <span className="text-success">{item.discount} %off</span>{" "}
                      &#8377; {item.finalprice}{" "}
                      <del className="text-danger mx-2">
                        &#8377;{item.baseprice}
                      </del>
                    </p>
                    <Link
                      to={`/single-product/${item.id}`}
                      className="cart-btn"
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-25 m-auto">
            <Link to="/shop/All/All/All" className="cart-btn w-100 text-center">
              More
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- end product section --> */}

      <Testimonials />

      {/* <!-- shop banner --> */}
      <section className="shop-banner p-5 my-5">
        <div className="container">
          <h3>
            December sale is on! <br /> with big{" "}
            <span className="orange-text">Discount...</span>
          </h3>
          <div className="sale-percent">
            <span>
              Sale! <br /> Upto
            </span>
            50% <span>off</span>
          </div>
          <Link to="/shop/All/All/All" className="cart-btn btn-lg">
            Shop Now
          </Link>
        </div>
      </section>
      {/* <!-- end shop banner --> */}

      <BrandLogo />
    </>
  );
}
