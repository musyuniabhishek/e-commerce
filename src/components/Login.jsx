import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  let [data, setData] = useState({
    username: "",
    password: "",
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
    var response = await fetch("/user", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    var item = response.find(
      (item) =>
        item.username === data.username && item.password === data.password
    );

    if (item) {
      localStorage.setItem("login", true);
      localStorage.setItem("name", item.name);
      localStorage.setItem("username", item.username);
      localStorage.setItem("userid", item.id);
      localStorage.setItem("role", item.role);

      if (item.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } else {
      alert("Invalid Username or Password");
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
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}
      <div className="container my-5 w-100">
        <div className="w-75 m-auto">
          <h3 className="  navbar-bg text-light p-2 text-center rounded ">
            <span className="text-warning">Login</span> to Your Account
          </h3>
          <form onSubmit={postData}>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                onChange={getInputData}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={getInputData}
              />
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
          <div>
            <Link className="" to="#">
              forget password?
            </Link>
            <Link className="float-right" to="/signup">
              new user? Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
