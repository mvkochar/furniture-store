import { Route, Routes } from "react-router-dom"
import { Home, MyAccount, Shop, SingleProduct } from "../pages"

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
    </Routes>
  )
}

export default Main