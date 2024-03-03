import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContact,
} from "../../../Store/ActionCreators/ContactActionCreators";
import { Link } from "react-router-dom";
export default function AdminContact() {
  let [data, setData] = useState([]);
  let allStateData = useSelector((state) => state.ContactStateData);
  let dispatch = useDispatch();
  function getAPIData() {
    dispatch(getContact());
    if (allStateData.length) {
      setData(allStateData.slice(1).reverse());
    }
  }

  function deleteItem(id) {
    if (window.confirm("are you sure to delete this Item :")) {
      dispatch(deleteContact({ id: id }));
      getAPIData();
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
              Contact{" "}
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.subject.slice(0, 50) + "..."}</td>
                        <td>{item.status}</td>
                        <td>{item.date}</td>
                        <td>
                          <Link
                            to={`/admin-single-contact/${item.id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                        </td>
                        <td>
                          {item.status !== "Active" && (
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          )}
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
