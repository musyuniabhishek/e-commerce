import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getProduct,
} from "../../../Store/ActionCreators/ProductActionCreators";
import { useNavigate } from "react-router-dom";

import { getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreators";

export default function AdminAddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    baseprice: "",
    discount: "",
    finalprice: "",
    stock: "In stock",
    description: "This is a sample product",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
  });

  let allStateData = useSelector((state) => state.ProductStateData);
  let allMaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let allSubcategoryStateData = useSelector(
    (state) => state.SubcategoryStateData
  );
  let allBrandStateData = useSelector((state) => state.BrandStateData);

  function getInputData(e) {
    var { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  const getInputFile = (e) => {
    var { name, files } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  };

  const postData = (e) => {
    e.preventDefault();
    var fp = Math.round(
      data.baseprice - (data.baseprice * data.discount) / 100
    );
    var item = {
      name: data.name,
      maincategory: data.maincategory,
      subcategory: data.subcategory,
      brand: data.brand,
      color: data.color,
      size: data.size,
      baseprice: data.baseprice,
      discount: data.discount,
      finalprice: fp,
      stock: data.stock,
      description: data.description,
      pic1: data.pic1,
      pic2: data.pic2,
      pic3: data.pic3,
      pic4: data.pic4,
    };
    dispatch(createProduct(item));
    navigate("/admin-product");
  };

  function getAPIData() {
    dispatch(getProduct());
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
    if (
      allMaincategoryStateData.length &&
      allSubcategoryStateData.length &&
      allBrandStateData.length
    ) {
      setData((old) => {
        return {
          ...old,
          ["maincategory"]: allMaincategoryStateData.slice(1).reverse()[0].name,
          ["subcategory"]: allSubcategoryStateData.slice(1).reverse()[0].name,
          ["brand"]: allBrandStateData.slice(1).reverse()[0].name,
        };
      });
    }
  }

  useEffect(() => {
    getAPIData();
  }, [
    allStateData.length,
    allMaincategoryStateData.length,
    allSubcategoryStateData.length,
    allBrandStateData.length,
  ]);
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
              Product
            </h5>

            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Product</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product :"
                  className="form-control"
                  required
                  onChange={getInputData}
                />
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-md-6">
                  <label>Maincategory</label>
                  <select
                    name="maincategory"
                    required
                    onChange={getInputData}
                    id=""
                    className="form-control"
                  >
                    {allMaincategoryStateData &&
                      allMaincategoryStateData
                        .slice(1)
                        .reverse()
                        .map((item, index) => {
                          return (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })}
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label>Subcategory</label>
                  <select
                    name="subcategory"
                    required
                    onChange={getInputData}
                    id=""
                    className="form-control"
                  >
                    {allSubcategoryStateData &&
                      allSubcategoryStateData
                        .slice(1)
                        .reverse()
                        .map((item, index) => {
                          return (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })}
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label>Brand</label>
                  <select
                    name="brand"
                    required
                    onChange={getInputData}
                    id=""
                    className="form-control"
                  >
                    {allBrandStateData &&
                      allBrandStateData
                        .slice(1)
                        .reverse()
                        .map((item, index) => {
                          return (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })}
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label>Stock</label>
                  <select
                    name="stock"
                    required
                    onChange={getInputData}
                    id=""
                    className="form-control"
                  >
                    <option value="In stock">In Stock</option>
                    <option value="Out of stock">Out of Stock</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Color</label>
                  <input
                    type="text"
                    name="color"
                    placeholder="Enter Color : "
                    className="form-control"
                    required
                    onChange={getInputData}
                  />
                </div>
                <div className="col-md-6">
                  <label>Size</label>
                  <input
                    type="text"
                    name="size"
                    placeholder="Enter Size : "
                    className="form-control"
                    required
                    onChange={getInputData}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Base Price</label>
                  <input
                    type="number"
                    name="baseprice"
                    placeholder="Enter Base price : "
                    className="form-control w-100"
                    required
                    onChange={getInputData}
                  />
                </div>
                <div className="col-md-6">
                  <label>Discount</label>
                  <input
                    type="number"
                    name="discount"
                    placeholder="Enter Discount : "
                    className="form-control w-100"
                    required
                    onChange={getInputData}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label>Description</label>
                <textarea
                  name="description"
                  rows="5"
                  className="form-control"
                  placeholder="Product Description : "
                  required
                  onChange={getInputData}
                  value={data.description}
                ></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Pic 1</label>
                  <input
                    type="file"
                    name="pic1"
                    required
                    onChange={getInputFile}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Pic 2</label>
                  <input
                    type="file"
                    name="pic2"
                    onChange={getInputFile}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Pic 3</label>
                  <input
                    type="file"
                    name="pic3"
                    onChange={getInputFile}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Pic 4</label>
                  <input
                    type="file"
                    name="pic4"
                    onChange={getInputFile}
                    className="form-control"
                  />
                </div>
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
