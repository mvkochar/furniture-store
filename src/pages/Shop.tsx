import { BasicBreadcrumbs, ProductsItem, ProductsList } from '../components'
import './css/Shop.css'

const Shop = () => {
    return (
        <>
            <main className='shop-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="shop-main-title">Shop</h1>
                <div className="shop-main-breadcrumbs">
                    <BasicBreadcrumbs />
                </div>
            </main>
            <section className="shop-control d-f jc-sb align-center">
                <div className="d-f align-center">
                    <h2 className="shop-control-title">Filter</h2>
                    <button className='btn-clear d-b'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6666 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1415C15.5354 20.4852 15.1666 19.5949 15.1666 18.6667C15.1666 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6666 15.1667C19.5949 15.1667 20.4851 15.5354 21.1415 16.1918C21.7979 16.8482 22.1666 17.7384 22.1666 18.6667C22.1666 19.5949 21.7979 20.4852 21.1415 21.1415C20.4851 21.7979 19.5949 22.1667 18.6666 22.1667ZM9.33331 22.1667C8.40506 22.1667 7.51482 21.7979 6.85844 21.1415C6.20206 20.4852 5.83331 19.5949 5.83331 18.6667C5.83331 17.7384 6.20206 16.8482 6.85844 16.1918C7.51482 15.5354 8.40506 15.1667 9.33331 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1415C11.1518 21.7979 10.2616 22.1667 9.33331 22.1667ZM18.6666 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1666 10.2616 15.1666 9.33333C15.1666 8.40508 15.5354 7.51484 16.1918 6.85846C16.8482 6.20208 17.7384 5.83333 18.6666 5.83333C19.5949 5.83333 20.4851 6.20208 21.1415 6.85846C21.7979 7.51484 22.1666 8.40508 22.1666 9.33333C22.1666 10.2616 21.7979 11.1518 21.1415 11.8082C20.4851 12.4646 19.5949 12.8333 18.6666 12.8333ZM9.33331 12.8333C8.40506 12.8333 7.51482 12.4646 6.85844 11.8082C6.20206 11.1518 5.83331 10.2616 5.83331 9.33333C5.83331 8.40508 6.20206 7.51484 6.85844 6.85846C7.51482 6.20208 8.40506 5.83333 9.33331 5.83333C10.2616 5.83333 11.1518 6.20208 11.8082 6.85846C12.4646 7.51484 12.8333 8.40508 12.8333 9.33333C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33331 12.8333Z" fill="black" />
                        </svg>
                    </button>
                    <button className='btn-clear d-b' style={{ marginLeft: "24px" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black" />
                        </svg>
                    </button>
                    <div className="shop-control-divider"></div>
                    <p className="shop-control-results">Showing 1–16 of 32 results</p>
                </div>
                <form action="" className="shop-control-fm d-f">
                    <div className="input-bl d-f align-center">
                        <label htmlFor="showCount">Show</label>
                        <input type="text" name='showCount' id='showCount' placeholder='16' />
                    </div>
                    <div className="input-bl d-f align-center">
                        <label htmlFor="sort">Sort by</label>
                        <select name="sort" id="sort">
                            <option value="default">Default</option>
                        </select>
                    </div>
                </form>
            </section>
            <div className="shop-box d-f jc-sb">
                {
                    ProductsList.map((product) => {
                        return (
                            <ProductsItem
                                key={product.id}
                                {...product}
                            />
                        )
                    })
                }
            </div>
            <div className="shop-pagination d-f">
                <button className='pagination-btn pagination-btn__active'>1</button>
                <button className='pagination-btn'>2</button>
                <button className='pagination-btn'>3</button>
                <button className='pagination-btn'>Next</button>
            </div>
            <section className='shop-features d-f jc-sb'>
                <dl>
                    <dt>Free Delivery</dt>
                    <dd>
                        For all oders over $50, consectetur adipim scing elit.
                    </dd>
                </dl>
                <dl>
                    <dt>90 Days Return</dt>
                    <dd>
                        If goods have problems, consectetur adipim scing elit.
                    </dd>
                </dl>
                <dl>
                    <dt>Secure Payment</dt>
                    <dd>
                        100% secure payment, consectetur adipim scing elit.
                    </dd>
                </dl>
            </section>
        </>
    )
}

export default Shop