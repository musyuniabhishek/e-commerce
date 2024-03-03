import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
} from "../../../Store/ActionCreators/ProductActionCreators";
export default function AdminProduct() {
  let [data, setData] = useState([]);
  let allStateData = useSelector((state) => state.ProductStateData);
  let dispatch = useDispatch();
  function getAPIData() {
    dispatch(getProduct());
    if (allStateData.length) {
      setData(allStateData.slice(1).reverse());
    }
  }

  function deleteItem(id) {
    if (window.confirm("are you sure to delete this Item :")) {
      dispatch(deleteProduct({ id: id }));
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
              Product{" "}
              <Link to="/admin-add-product">
                <i className="fa fa-plus text-light float-right"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Color / Size</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          {item.maincategory} / {item.subcategory} /{" "}
                          {item.brand}{" "}
                        </td>
                        <td>
                          {item.color} / {item.size}
                        </td>
                        <td>
                          {" "}
                          <del className="text-danger">
                            &#8377;{item.baseprice}
                          </del>{" "}
                          &#8377;{item.finalprice} {"   "}
                          <sup className="text-success">
                            {item.discount} % off
                          </sup>
                        </td>
                        <td>{item.stock}</td>
                        <td>
                          <a
                            href={`/assets/images/${item.pic1}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={`/assets/images/${item.pic1}`}
                              alt="pic1"
                              height="60px"
                              width="100%"
                              className="rounded"
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            href={`/assets/images/${item.pic2}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={`/assets/images/${item.pic2}`}
                              alt="pic2"
                              height="60px"
                              width="100%"
                              className="rounded"
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            href={`/assets/images/${item.pic3}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={`/assets/images/${item.pic3}`}
                              alt="pic3"
                              height="60px"
                              width="100%"
                              className="rounded"
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            href={`/assets/images/${item.pic4}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={`/assets/images/${item.pic4}`}
                              alt="pic4"
                              height="60px"
                              width="100%"
                              className="rounded"
                            />
                          </a>
                        </td>
                        <td>
                          <Link
                            to={"/admin-update-product/" + item.id}
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
