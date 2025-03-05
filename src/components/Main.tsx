import { Route, Routes } from "react-router-dom"
import { Home, Shop, SingleProduct } from "../pages"

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
    </Routes>
  )
}

export default Main