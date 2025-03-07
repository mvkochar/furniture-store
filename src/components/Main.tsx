import { Route, Routes } from "react-router-dom"
import { Checkout, Home, MyAccount, Shop, SingleProduct } from "../pages"

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
    </Routes>
  )
}

export default Main