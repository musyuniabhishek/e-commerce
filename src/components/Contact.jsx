import React, { useState } from "react";
import { createContact } from "../Store/ActionCreators/ContactActionCreators";
import { useDispatch } from "react-redux";
export default function Contact() {
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    status: "Active",
  });

  let dispatch = useDispatch();

  function getInputData(e) {
    var { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();
    var date = new Date();
    dispatch(createContact({ ...data, date: date.toLocaleDateString() }));
    alert(
      "Thanks For sharing your Query with us !! Our Team will Contact you soon"
    );
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      {/* <!-- contact form --> */}
      <div className="contact-from-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have any Query?</h2>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form onSubmit={postData}>
                  <p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      onChange={getInputData}
                      value={data.name}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      onChange={getInputData}
                      value={data.email}
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      onChange={getInputData}
                      value={data.phone}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                      onChange={getInputData}
                      value={data.subject}
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      onChange={getInputData}
                      value={data.message}
                    ></textarea>
                  </p>
                  <p>
                    <button
                      type="submit"
                      className="btn navbar-bg text-light w-50"
                    >
                      submit
                    </button>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Shop Address
                  </h4>
                  <p>
                    E-266 <br /> Sector-22 , Noida <br /> UP, India
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock"></i> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone : <a href="tel:9149109082">9149109082</a> <br /> Email
                    :{" "}
                    <a href="mailto:musyunia42@gmail.com">
                      musyunia42@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact form --> */}

      {/* <!-- find our location --> */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end find our location --> */}

      {/* <!-- google map section --> */}
      <div className="embed-responsive embed-responsive-21by9">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=e-266+sector-22+noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- end google map section --></div> */}
    </>
  );
}
