import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  let [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

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

  async function postData(e) {
    e.preventDefault();
    if (data.password === data.cpassword) {
      var response = await fetch("/user", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      response = await response.json();
      if (response.find((item) => item.username === data.username)) {
        alert("Username Already Taken");
      } else {
        let item = {
          name: data.name,
          email: data.email,
          username: data.username,
          phone: data.phone,
          password: data.password,
          role: "Buyer",
        };
        response = await fetch("/user", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(item),
        });
        response = await response.json();
        navigate("/login");
      }
    } else {
      alert("Password and Confirm Password doesn`t match");
    }
  }

  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Signup</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}
      <div className="container w-100 my-5">
        <div className="w-75 m-auto">
          <h3 className="  navbar-bg text-light p-2 text-center rounded ">
            <span className="text-warning">Create</span> a free Account
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
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={getInputData}
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
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6 mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={getInputData}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={getInputData}
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
