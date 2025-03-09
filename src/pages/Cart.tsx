import { Link } from 'react-router-dom'
import { BasicBreadcrumbs, ShopFeatures } from '../components'
import './css/Cart.css'

const Cart = () => {
    return (
        <>
            <main className='cart-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="cart-main-title">Cart</h1>
                <div className="cart-main-breadcrumbs">
                    <BasicBreadcrumbs activePage='Cart' />
                </div>
            </main>
            <div className="cart-content d-f jc-sb">
                <table className='cart-products-tb'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='d-f align-center'>
                                <img src="/images/asgaard-sofa-max.png" alt="asgaard-sofa-max" width={106} height={106} />
                                <span className='product-name'>Asgaard sofa</span>
                            </td>
                            <td>Rs. 250,000.00</td>
                            <td><span className='product-quantity'>1</span></td>
                            <td>Rs. 250,000.00</td>
                        </tr>
                    </tbody>
                </table>
                <div className="cart-totals">
                    <h3 className="cart-totals-title">Cart Totals</h3>
                    <div className="cart-totals-box d-f">
                        <div className="cart-totals-item d-f jc-sb align-center">
                            <div className="totals-item-title">Subtotals</div>
                            <div className="totals-item-value">Rs. 250,000.00</div> 
                        </div>
                        <div className="cart-totals-item totals-item-last d-f jc-sb align-center">
                            <div className="totals-item-title">Totals</div>
                            <div className="totals-item-value">Rs. 250,000.00</div> 
                        </div>
                    </div>
                    <Link to="/checkout" className="cart-totals-link">Checkout</Link>
                </div>
            </div>
            <ShopFeatures/>
        </>
    )
}

export default Cart