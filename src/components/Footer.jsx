import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createNewsletter,
  getNewsletter,
} from "../Store/ActionCreators/NewsletterActionCreators";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  let [email, setEmail] = useState();
  let dispatch = useDispatch();
  var allNewsletterStateData = useSelector(
    (state) => state.NewsletterStateData
  );

  function postData(e) {
    e.preventDefault();
    var item = allNewsletterStateData
      .slice(1)
      .find((item) => item.email === email);
    if (item) {
      alert("Your Email Id is already subscribed");
    } else {
      dispatch(createNewsletter({ email: email }));
      alert("Thanks to subscribe our Newsletter Service");
    }
  }

  function getAPIData() {
    dispatch(getNewsletter());
  }

  useEffect(() => {
    getAPIData();
  }, [allNewsletterStateData.length]);
  return (
    <>
      {/* <!-- footer --> */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>E-266, Sector-22 Noida U.P</li>
                  <li>support@bestdeals.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Menu</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form onSubmit={postData}>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}
    </>
  );
}
