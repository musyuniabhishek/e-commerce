import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import SingleProduct from "./components/SingleProduct";

import AdminHome from "./components/Admin/AdminHome";

import AdminMaincategory from "./components/Admin/Maincategory/AdminMaincategory";
import AdminAddMaincategory from "./components/Admin/Maincategory/AdminAddMaincategory";
import AdminUpdateMaincategory from "./components/Admin/Maincategory/AdminUpdateMaincategory";

import AdminSubcategory from "./components/Admin/Subcategory/AdminSubcategory";
import AdminUpdateSubcategory from "./components/Admin/Subcategory/AdminUpdateSubcategory";
import AdminAddSubcategory from "./components/Admin/Subcategory/AdminAddSubcategory";

import AdminBrand from "./components/Admin/Brand/AdminBrand";
import AdminUpdateBrand from "./components/Admin/Brand/AdminUpdateBrand";
import AdminAddBrand from "./components/Admin/Brand/AdminAddBrand";

import AdminProduct from "./components/Admin/Product/AdminProduct";
import AdminUpdateProduct from "./components/Admin/Product/AdminUpdateProduct";
import AdminAddProduct from "./components/Admin/Product/AdminAddProduct";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";
import Confirmation from "./components/Confirmation";
import AdminNewsletter from "./components/Admin/Newsletter/AdminNewsletter";
import AdminContact from "./components/Admin/Contact/AdminContact";
import AdminSingleContact from "./components/Admin/Contact/AdminSingleContact";
import AdminCheckout from "./components/Admin/Checkout/AdminCheckout";
import AdminSingleCheckout from "./components/Admin/Checkout/AdminSingleCheckout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:mc/:sc/:br" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={localStorage.getItem("login") ? <Profile /> : <Login />}
          />
          <Route
            path="/cart"
            element={localStorage.getItem("login") ? <Cart /> : <Login />}
          />
          <Route
            path="/checkout"
            element={localStorage.getItem("login") ? <Checkout /> : <Login />}
          />
          <Route
            path="/update-profile"
            element={
              localStorage.getItem("login") ? <UpdateProfile /> : <Login />
            }
          />
          <Route
            path="/confirmation"
            element={
              localStorage.getItem("login") ? <Confirmation /> : <Login />
            }
          />
          <Route
            path="/admin"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminHome />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* maincategory */}
          <Route
            path="/admin-maincategory"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminMaincategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-add-maincategory"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminAddMaincategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-update-maincategory/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminUpdateMaincategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* subcategory */}
          <Route
            path="/admin-subcategory"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminSubcategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-add-subcategory"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminAddSubcategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-update-subcategory/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminUpdateSubcategory />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* Brand */}
          <Route
            path="/admin-brand"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminBrand />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-add-brand"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminAddBrand />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-update-brand/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminUpdateBrand />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* Product */}
          <Route
            path="/admin-product"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminProduct />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-add-product"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminAddProduct />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-update-product/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminUpdateProduct />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* Newsletter */}
          <Route
            path="/admin-newsletter"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminNewsletter />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* contact */}
          <Route
            path="/admin-contact"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminContact />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-single-contact/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminSingleContact />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          {/* checkout */}
          <Route
            path="/admin-checkout"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminCheckout />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin-single-checkout/:id"
            element={
              localStorage.getItem("login") ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminSingleCheckout />
                ) : (
                  <Profile />
                )
              ) : (
                <Login />
              )
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
