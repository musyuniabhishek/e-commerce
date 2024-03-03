import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubcategory,
  updateSubcategory,
} from "../../../Store/ActionCreators/SubcategoryActionCreators";
import { useNavigate, useParams } from "react-router-dom";
export default function AdminUpdateSubcategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  let [name, setName] = useState("");
  let allStateData = useSelector((state) => state.SubcategoryStateData);

  const postData = (e) => {
    e.preventDefault();
    if (allStateData.slice(1).find((item) => item.name === name)) {
      alert("Subcategory name already added");
    } else {
      dispatch(updateSubcategory({ id, id, name: name }));
      navigate("/admin-subcategory");
    }
  };

  function getAPIData() {
    dispatch(getSubcategory());
    if (allStateData) {
      var item = allStateData.find((item) => item.id === id);
      if (item) {
        setName(item.name);
      }
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
              Subcategory
            </h5>

            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Subcategory</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Subcategory :"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-3 btn-group w-100">
                <button
                  type="reset"
                  className="btn btn-secondary p-2 btn-sm w-50"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-primary p-2 btn-sm w-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
