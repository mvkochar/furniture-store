import { Route, Routes } from "react-router-dom"
import { Cart, Checkout, Contact, Home, MyAccount, Shop, SingleProduct } from "../pages"

const Main = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
          path="shop"
          element={<Shop/>}
        />
        <Route
          path="single-product"
          element={<SingleProduct/>}
        />
        <Route
          path="account"
          element={<MyAccount/>}
        />
        <Route
          path="checkout"
          element={<Checkout/>}
        />
        <Route
          path="cart"
          element={<Cart/>}
        />
        <Route
          path="contact"
          element={<Contact/>}
        />
    </Routes>
  )
}

export default Main