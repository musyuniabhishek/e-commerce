import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getBrand,
} from "../../../Store/ActionCreators/BrandActionCreators";
export default function AdminBrand() {
  let [data, setData] = useState([]);
  let allStateData = useSelector((state) => state.BrandStateData);
  let dispatch = useDispatch();
  function getAPIData() {
    dispatch(getBrand());
    if (allStateData.length) {
      setData(allStateData.slice(1).reverse());
    }
  }

  function deleteItem(id) {
    if (window.confirm("are you sure to delete this Item :")) {
      dispatch(deleteBrand({ id: id }));
      getAPIData();
    }
  }

  useEffect(() => {
    getAPIData();
  }, [allStateData]);
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
              Brand{" "}
              <Link to="/admin-add-brand">
                <i className="fa fa-plus text-light float-right"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Logo</th>
                    <th></th>
                    <th></th>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={`/assets/brands/${item.pic}`}
                            alt=""
                            height="80px"
                          />
                        </td>
                        <td>
                          <Link
                            to={"/admin-update-brand/" + item.id}
                            className="btn btn-success"
                          >
                            <i className="fa fa-edit text-light">Edit</i>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteItem(item.id)}
                          >
                            Delete
                          </button>
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
