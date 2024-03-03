import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import BrandLogo from "./BrandLogo";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Store/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../Store/ActionCreators/BrandActionCreators";

export default function Shop() {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(10000);
  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  let [br, setBr] = useState("All");
  let [flag, setFlag] = useState(false);
  let params = useParams();
  var dispatch = useDispatch();
  var allProductStateData = useSelector((state) => state.ProductStateData);
  var allMaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  var allSubcategoryStateData = useSelector(
    (state) => state.SubcategoryStateData
  );
  var allBrandStateData = useSelector((state) => state.BrandStateData);

  function getInputSearch(e) {
    setSearch(e.target.value);
  }

  function postSearch(e) {
    e.preventDefault();
    let searchTerm = search.toLowerCase();
    setProducts(
      allProductStateData
        .slice(1)
        .reverse()
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.maincategory.toLowerCase() === searchTerm ||
            item.subcategory.toLowerCase() === searchTerm ||
            item.brand.toLowerCase() === searchTerm ||
            item.color.toLowerCase() === searchTerm ||
            item.description.toLowerCase().includes(searchTerm)
        )
    );
  }

  function getPriceInput(e) {
    var { name, value } = e.target;
    if (name === "min") {
      setMin(value);
    } else if (name === "max") {
      setMax(value);
    }
  }

  function postPriceFilter(e) {
    let p = [];
    e.preventDefault();
    if (mc === "All" && sc === "All" && br === "All") {
      p = allProductStateData.slice(1).reverse();
    } else if (mc !== "All" && sc === "All" && br === "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.maincategory === mc);
    } else if (mc === "All" && sc !== "All" && br === "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.subcategory === sc);
    } else if (mc === "All" && sc === "All" && br !== "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.brand === br);
    } else if (mc !== "All" && sc !== "All" && br === "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.maincategory === mc && item.subcategory === sc);
    } else if (mc !== "All" && sc === "All" && br !== "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.maincategory === mc && item.brand === br);
    } else if (mc === "All" && sc !== "All" && br !== "All") {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter((item) => item.brand === br && item.subcategory === sc);
    } else {
      p = allProductStateData
        .slice(1)
        .reverse()
        .filter(
          (item) =>
            item.maincategory === mc &&
            item.brand === br &&
            item.subcategory === sc
        );
    }
    setProducts(
      p.filter((item) => item.finalprice >= min && item.finalprice <= max)
    );
  }

  function selectCategory(mc, sc, br) {
    setMc(mc);
    setSc(sc);
    setBr(br);
    filterProducts(mc, sc, br);
  }

  function filterProducts(mc, sc, br) {
    if (mc === "All" && sc === "All" && br === "All") {
      setProducts(allProductStateData.slice(1).reverse());
    } else if (mc !== "All" && sc === "All" && br === "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.maincategory === mc)
      );
    } else if (mc === "All" && sc !== "All" && br === "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.subcategory === sc)
      );
    } else if (mc === "All" && sc === "All" && br !== "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.brand === br)
      );
    } else if (mc !== "All" && sc !== "All" && br === "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.maincategory === mc && item.subcategory === sc)
      );
    } else if (mc !== "All" && sc === "All" && br !== "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.maincategory === mc && item.brand === br)
      );
    } else if (mc === "All" && sc !== "All" && br !== "All") {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter((item) => item.brand === br && item.subcategory === sc)
      );
    } else {
      setProducts(
        allProductStateData
          .slice(1)
          .reverse()
          .filter(
            (item) =>
              item.maincategory === mc &&
              item.brand === br &&
              item.subcategory === sc
          )
      );
    }
  }

  function sortFilter(e) {
    let value = e.target.value;
    if (value === "1") {
      setProducts(allProductStateData.slice(1).reverse());
    } else if (value === "2") {
      setProducts(products.sort((x, y) => x.finalprice - y.finalprice));
    } else if (value === "3") {
      setProducts(products.sort((x, y) => y.finalprice - x.finalprice));
    }
    setFlag(!flag);
  }

  function getAPIData() {
    dispatch(getProduct());
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
    filterProducts(params.mc, params.sc, params.br);
  }
  useEffect(() => {
    getAPIData();
    setMc(params.mc);
    setSc(params.sc);
    setBr(params.br);
    getAPIData();
  }, [
    allProductStateData.length,
    allMaincategoryStateData.length,
    allSubcategoryStateData.length,
    allBrandStateData.length,
  ]);
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Latest Fashion</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      {/* <!-- products --> */}
      <div className="product-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="list-group mb-3">
                <a href="/" className="list-group-item  navbar-bg text-light">
                  Maincategory
                </a>
                <button
                  onClick={() => {
                    selectCategory("All", sc, br);
                  }}
                  className="list-group-item list-group-item-action"
                >
                  All
                </button>
                {allMaincategoryStateData &&
                  allMaincategoryStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            selectCategory(item.name, sc, br);
                          }}
                          className="list-group-item list-group-item-action"
                        >
                          {item.name}
                        </button>
                      );
                    })}
              </div>
              <div className="list-group mb-3">
                <a href="/" className="list-group-item  navbar-bg text-light">
                  Subcategory
                </a>
                <button
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    selectCategory(mc, "All", br);
                  }}
                >
                  All
                </button>
                {allSubcategoryStateData &&
                  allSubcategoryStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="list-group-item list-group-item-action"
                          onClick={() => {
                            selectCategory(mc, item.name, br);
                          }}
                        >
                          {item.name}
                        </button>
                      );
                    })}
              </div>
              <div className="list-group mb-3">
                <a href="/" className="list-group-item  navbar-bg text-light">
                  Brand
                </a>
                <button
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    selectCategory(mc, sc, "All");
                  }}
                >
                  All
                </button>
                {allBrandStateData &&
                  allBrandStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="list-group-item list-group-item-action"
                          onClick={() => {
                            selectCategory(mc, sc, item.name);
                          }}
                        >
                          {item.name}
                        </button>
                      );
                    })}

                <div className="my-3">
                  <form onSubmit={postPriceFilter} className="card p-4">
                    <div className=" mb-3">
                      <label>Min. Price</label>
                      <input
                        type="number"
                        name="min"
                        value={min}
                        className="form-control"
                        onChange={getPriceInput}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Max Price</label>
                      <input
                        type="number"
                        name="max"
                        value={max}
                        className="form-control"
                        onChange={getPriceInput}
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-success w-100 btn-sm">
                        Apply Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-3">
                <select
                  name="sortFilter"
                  onChange={sortFilter}
                  className="form-control"
                >
                  <option value="1">Newest</option>
                  <option value="2">Price : Low to High</option>
                  <option value="3">Price : High to Low</option>
                </select>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="btn-group my-3 w-100 ">
                <input
                  type="search"
                  name="search"
                  placeholder="Enter Product name, Brand, Color etc. to Search"
                  className="form-control"
                  onChange={getInputSearch}
                  value={search}
                />
                <button className="btn btn-success w-25" onClick={postSearch}>
                  Search
                </button>
              </div>
              <div className="row product-lists">
                {products.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 text-center" key={index}>
                      <div className="single-product-item">
                        <div className="product-image">
                          <Link to={"/single-product/" + item.id}>
                            <img
                              src={`/assets/images/${item.pic1}`}
                              alt=""
                              height="250px"
                            />
                          </Link>
                        </div>
                        <h3>{item.name}</h3>
                        <p className="product-price">
                          <span className="text-success">
                            {item.discount} %off
                          </span>{" "}
                          &#8377; {item.finalprice}{" "}
                          <del className="text-danger mx-2">
                            &#8377;{item.baseprice}
                          </del>
                        </p>
                        <Link
                          to={`/single-product/${item.id}`}
                          className="cart-btn"
                        >
                          <i className="fas fa-shopping-cart"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="pagination-wrap">
                    <ul>
                      <li>
                        <a href="/">Prev</a>
                      </li>
                      <li>
                        <a href="/">1</a>
                      </li>
                      <li>
                        <a className="bg-secondary text-light" href="/">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="/">3</a>
                      </li>
                      <li>
                        <a href="/">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end products --> */}

      <Testimonials />
      <BrandLogo />
    </>
  );
}
