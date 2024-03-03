import { all } from "redux-saga/effects";
import maincategorySaga from "./MaincategorySaga";
import subcategorySaga from "./SubcategorySaga";
import brandSaga from "./BrandSaga";
import productSaga from "./ProductSaga";
import cartSaga from "./CartSaga";
import wishlistSaga from "./WishlistSaga";
import checkoutSaga from "./CheckoutSaga";
import newsletterSaga from "./NewsletterSaga";
import contactSaga from "./ContactSaga";

export default function* RootSaga() {
  yield all([
    maincategorySaga(),
    subcategorySaga(),
    brandSaga(),
    productSaga(),
    cartSaga(),
    wishlistSaga(),
    checkoutSaga(),
    newsletterSaga(),
    contactSaga(),
  ]);
}
