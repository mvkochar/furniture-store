import { BasicBreadcrumbs, ShopFeatures } from '../components'
import './css/Checkout.css'

const Checkout = () => {
    return (
        <>
            <main className='checkout-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="checkout-main-title">Checkout</h1>
                <div className="checkout-main-breadcrumbs">
                    <BasicBreadcrumbs activePage='Checkout' />
                </div>
            </main>
            <div className="checkout-content d-f">
                <div>
                    <h2 className="checkout-content-title">Billing details</h2>
                    <form action="" className="checkout-billing-fm">
                        <div className="input-bl d-f">
                            <div>
                                <label htmlFor="billingFName">First Name</label>
                                <input type="text" name='billingFName' id='billingFName' style={{ width: "211px" }} />
                            </div>
                            <div>
                                <label htmlFor="billingLName">Last Name</label>
                                <input type="text" name='billingLName' id='billingLName' style={{ width: "211px" }} />
                            </div>
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingCompany">Company Name (Optional)</label>
                            <input type="text" name='billingCompany' id='billingCompany' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingCountry">Country / Region</label>
                            <div className="select-wr">
                                <select name="billingCountry" id="billingCountry">
                                    <option value="0">Sri Lanka</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingStreet">Street address</label>
                            <input type="text" name='billingStreet' id='billingStreet' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingTown">Town / City</label>
                            <input type="text" name='billingTown' id='billingTown' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingProvince">Province</label>
                            <div className="select-wr">
                                <select name="billingProvince" id="billingProvince">
                                    <option value="0">Western Province</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingZip"> <span>Zip </span>code</label>
                            <input type="text" name='billingZip' id='billingZip' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="billingPhone">Phone</label>
                            <input type="tel" name='billingPhone' id='billingPhone' />
                        </div>
                        <div className="input-bl input-bl-last">
                            <label htmlFor="billingEmail">Email</label>
                            <input type="email" name='billingEmail' id='billingEmail' />
                        </div>
                        <textarea name="billingInfo" placeholder='Additional information'></textarea>
                    </form>
                </div>
                <div className='checkout-info'>
                    <table className='checkout-products'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className='product-name'>Asgaard sofa</span>
                                    <span className='product-sign'>x</span>
                                    <span className='product-quantity'>1</span>
                                </td>
                                <td className='product-price'>Rs. 250,000.00</td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Subtotal</td>
                                <td className='product-price'>Rs. 250,000.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className='products-total'>Rs. 250,000.00</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="checkout-transfer">
                        <h3 className="checkout-transfer-title">Direct Bank Transfer</h3>
                        <p className="checkout-transfer-desc">
                            Make your payment directly into our bank account. Please use your Order ID
                            as the payment reference. Your order will not be shipped until the funds
                            have cleared in our account.
                        </p>
                        <form action="" className="checkout-transfer-fm">
                            <div className="radio-bl d-f align-center">
                                <input type="radio" name="transfer" id="bank" />
                                <label htmlFor="bank">Direct Bank Transfer</label>
                            </div>
                            <div className="radio-bl d-f align-center">
                                <input type="radio" name="transfer" id="cash" />
                                <label htmlFor="cash">Cash On Delivery</label>
                            </div>
                        </form>
                    </div>
                    <p className="checkout-privacy">
                        Your personal data will be used to support your experience 
                        throughout this website, to manage access to your account, 
                        and for other purposes described in our <a href="">privacy policy</a>.
                    </p>
                    <a href="" className="checkout-order">Place Order</a>
                </div>
            </div>
            <ShopFeatures/>
        </>
    )
}

export default Checkout