import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
export default function UpdateProfile() {
  let [data, setData] = useState({});

  var navigate = useNavigate();

  function getInputData(e) {
    var { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function getInputFile(e) {
    var { name, files } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }

  async function postData(e) {
    e.preventDefault();
    var response = await fetch("/user/" + localStorage.getItem("userid"), {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    response = await response.json();
    if (data.role === "Buyer") {
      navigate("/profile");
    } else {
      navigate("/admin");
    }
  }

  async function getAPIData() {
    var response = await fetch("/user/" + localStorage.getItem("userid"), {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    setData(response);
  }

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Update Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}
      <div className="container w-100 my-5">
        <div className="w-75 m-auto">
          <h3 className="  navbar-bg text-light p-2 text-center rounded ">
            <span className="text-warning">Update</span> Profile
          </h3>
          <form onSubmit={postData}>
            <div className="row">
              <div className=" col-md-6 mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={getInputData}
                  value={data.name}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>Pic</label>
                <input
                  type="file"
                  name="pic"
                  className="form-control"
                  onChange={getInputFile}
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6 mb-3">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={getInputData}
                  value={data.email}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                  onChange={getInputData}
                  value={data.phone}
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6 mb-3">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="address"
                  onChange={getInputData}
                  value={data.address}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>Pin</label>
                <input
                  type="text"
                  name="pin"
                  className="form-control"
                  placeholder="Pin"
                  onChange={getInputData}
                  value={data.pin}
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6 mb-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="city"
                  onChange={getInputData}
                  value={data.city}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  placeholder="State"
                  onChange={getInputData}
                  value={data.state}
                />
              </div>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="btn w-100 navbar-bg text-light p-2"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="pb-3">
            <Link className="float-right " to="/login">
              already user? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
