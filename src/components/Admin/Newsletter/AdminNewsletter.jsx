import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNewsletter,
  getNewsletter,
} from "../../../Store/ActionCreators/NewsletterActionCreators";
export default function AdminNewsletter() {
  let [data, setData] = useState([]);
  let allStateData = useSelector((state) => state.NewsletterStateData);
  let dispatch = useDispatch();
  function getAPIData() {
    dispatch(getNewsletter());
    if (allStateData.length) {
      setData(allStateData.slice(1).reverse());
    }
  }

  function deleteItem(id) {
    if (window.confirm("are you sure to delete this Item :")) {
      dispatch(deleteNewsletter({ id: id }));
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
              Newsletter{" "}
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
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
