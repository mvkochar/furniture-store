import React from 'react'
import { BasicBreadcrumbs, ProductsItem, ProductsList } from '../components'
import './css/SingleProduct.css'

const SingleProduct = () => {
    const [quantity, setQuantity] = React.useState(1)
    const [moreRelated, setMoreRelated] = React.useState(false)

    const decrementQuantity = () => {
        setQuantity((prevState) => {
            return (
                prevState - 1
            )
        })
    }

    const incrementQuantity = () => {
        setQuantity((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const handleRelated = () => {
        setMoreRelated((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <>
            <div className="single-breadcrumbs d-f align-center">
                <BasicBreadcrumbs />
                <div style={{ marginTop: "4px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                    </svg>
                </div>
                <div className="single-breadcrumbs-divider"></div>
                <div className="single-breadcrumbs-current">Asgaard sofa</div>
            </div>
            <main className='single-main d-f'>
                <div className="single-main-images d-f">
                    <div className='images-min d-f'>
                        <div><img src="/images/asgaard-sofa-min1.png" alt="asgaard-sofa-min1" /></div>
                        <div><img src="/images/asgaard-sofa-min2.png" alt="asgaard-sofa-min2" /></div>
                        <div><img src="/images/asgaard-sofa-min3.png" alt="asgaard-sofa-min3" /></div>
                        <div><img src="/images/asgaard-sofa-min4.png" alt="asgaard-sofa-min4" /></div>
                    </div>
                    <div><img src="/images/asgaard-sofa-max.png" alt="asgaard-sofa-max" /></div>
                </div>
                <div>
                    <h1 className="single-main-title">Asgaard sofa</h1>
                    <h4 className="single-main-price">Rs. 250,000.00</h4>
                    <div className="single-main-about d-f align-center">
                        <div className="single-main-rating d-f">
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFDA5B" />
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFDA5B" />
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFDA5B" />
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFDA5B" />
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFDA5B" />
                                </svg>
                            </div>
                        </div>
                        <div className="about-divider"></div>
                        <div className="single-main-review">5 Customer Review</div>
                    </div>
                    <p className="single-main-desc">
                        Setting the bar as one of the loudest speakers in its class,
                        the Kilburn is a compact, stout-hearted hero with a well-balanced
                        audio which boasts a clear midrange and extended highs for a sound.
                    </p>
                    <div className="single-main-info d-f">
                        <div>
                            <h3 className="info-bl-title">Size</h3>
                            <div className="sizes d-f">
                                <div className="sizes-item .sizes-item__active">L</div>
                                <div className="sizes-item">XL</div>
                                <div className="sizes-item">XS</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="info-bl-title">Color</h3>
                            <div className="colors d-f">
                                {
                                    [1, 2, 3, 4].map(() => {
                                        return (
                                            <div className="colors-item"></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="single-main-actions d-f">
                        <div className="quantity-bl d-f align-center">
                            <button className='btn-clear d-b' onClick={decrementQuantity} disabled={quantity === 1} >
                                <svg width="8" height="9" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.312 0.52V1.752H0.928V0.52H7.312Z" fill="black" />
                                </svg>
                            </button>
                            <div className="quntity-num">{quantity}</div>
                            <button className="btn-clear d-b" onClick={incrementQuantity} disabled={quantity === 9}>
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.552 4.768H5.144V8.224H3.784V4.768H0.392V3.536H3.784V0.0639992H5.144V3.536H8.552V4.768Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                        <button className='single-main-cart'>Add To Cart</button>
                    </div>
                    <div className="single-main-line"></div>
                    <div className="single-main-details d-f">
                        <div className="d-f">
                            <div style={{ width: "75px", marginRight: "16px" }}>SKU</div>
                            <div>:</div>
                            <div style={{ marginLeft: "12px" }}>SS001</div>
                        </div>
                        <div className="d-f">
                            <div style={{ width: "75px", marginRight: "16px" }}>Category</div>
                            <div>:</div>
                            <div style={{ marginLeft: "12px" }}>Sofas</div>
                        </div>
                        <div className="d-f">
                            <div style={{ width: "75px", marginRight: "16px" }}>Tags</div>
                            <div>:</div>
                            <div style={{ marginLeft: "12px" }}>Sofa, Chair, Home, Shop</div>
                        </div>
                        <div className="d-f">
                            <div style={{ width: "75px", marginRight: "16px" }}>Share</div>
                            <div>:</div>
                            <div className='single-main-social d-f align-center' style={{ marginLeft: "12px" }}>
                                <a href="" className="d-b">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_39_178)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_39_178">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="" className="d-b">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_39_182)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 2.36501C0.833252 1.95879 0.994624 1.5692 1.28187 1.28196C1.56911 0.994717 1.9587 0.833346 2.36492 0.833346H17.6333C17.8346 0.833017 18.034 0.872398 18.22 0.949234C18.4061 1.02607 18.5752 1.13885 18.7176 1.28113C18.8601 1.4234 18.973 1.59237 19.0501 1.77835C19.1271 1.96434 19.1667 2.1637 19.1666 2.36501V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36501ZM8.08992 7.82335H10.5724V9.07001C10.9308 8.35335 11.8474 7.70835 13.2249 7.70835C15.8658 7.70835 16.4916 9.13585 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82335ZM3.50659 16.4925H6.17992V7.70835H3.50659V16.4917V16.4925ZM6.56242 4.84335C6.56746 5.07224 6.52673 5.29983 6.44262 5.51277C6.35851 5.72571 6.23271 5.91971 6.07261 6.08337C5.91251 6.24704 5.72133 6.37707 5.5103 6.46585C5.29926 6.55463 5.07262 6.60036 4.84367 6.60036C4.61472 6.60036 4.38808 6.55463 4.17704 6.46585C3.966 6.37707 3.77483 6.24704 3.61473 6.08337C3.45463 5.91971 3.32883 5.72571 3.24472 5.51277C3.16061 5.29983 3.11988 5.07224 3.12492 4.84335C3.13481 4.39406 3.32024 3.9665 3.64149 3.65225C3.96274 3.338 4.39427 3.16203 4.84367 3.16203C5.29307 3.16203 5.7246 3.338 6.04585 3.65225C6.3671 3.9665 6.55253 4.39406 6.56242 4.84335Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_39_182">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="" className="d-b">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                            <button className='btn-clear d-b' style={{ marginLeft: "159px", marginTop: "-20px" }}>
                                <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.3454 4.0199L22.3451 4.01948C21.6808 3.11213 20.9059 2.40248 20.068 1.91945L20.0672 1.91902C19.1994 1.41671 18.2785 1.16479 17.356 1.16775L17.3544 1.16776C16.0603 1.16775 14.7804 1.66041 13.65 2.62125L13.65 2.62126C13.3793 2.85137 13.1212 3.10484 12.8759 3.38207L12.5014 3.80527L12.127 3.38207C11.8817 3.10484 11.6236 2.85137 11.3529 2.62126L11.3529 2.62125C10.2225 1.66041 8.94259 1.16775 7.64844 1.16775C6.71383 1.16775 5.80421 1.41629 4.9356 1.91902L4.93498 1.91938C4.09406 2.40448 3.32529 3.10849 2.65762 4.01964L2.65708 4.02037C1.99329 4.92279 1.45757 6.00566 1.08544 7.21026L22.3454 4.0199ZM22.3454 4.0199C23.0086 4.9237 23.5443 6.00664 23.9176 7.21071L22.3454 4.0199ZM6.2519 24.8117L6.25195 24.8118C7.58046 26.5212 8.9036 27.9676 9.90881 28.9987C10.4112 29.514 10.8334 29.9249 11.1363 30.2122C11.2878 30.3559 11.4093 30.4686 11.4958 30.5479C11.5392 30.5875 11.5736 30.6187 11.5986 30.6412L11.6285 30.6678L11.6373 30.6756C11.639 30.6771 11.64 30.6779 11.6403 30.6782L11.6404 30.6783L11.6482 30.685L11.6481 30.6851L12.333 31.2971C12.3331 31.2972 12.3333 31.2973 12.3334 31.2974C12.4037 31.3598 12.4617 31.3734 12.5 31.3734C12.5382 31.3734 12.5963 31.3598 12.6666 31.2974C12.6667 31.2973 12.6668 31.2972 12.667 31.2971L13.3519 30.6851L13.3519 30.685C13.4542 30.5937 16.0859 28.2335 18.7481 24.8117C20.3514 22.7493 21.6362 20.7228 22.5672 18.789C23.155 17.5664 23.6151 16.3611 23.9301 15.2052L23.9303 15.2043C24.3103 13.82 24.5 12.4654 24.5 11.1714V11.1704C24.5028 9.79608 24.3044 8.4634 23.9176 7.21074L6.2519 24.8117ZM6.2519 24.8117C4.64859 22.7493 3.36376 20.7228 2.4328 18.789M6.2519 24.8117L2.4328 18.789M2.4328 18.789C1.84537 17.5671 1.38779 16.3616 1.06962 15.2043L2.4328 18.789ZM0.5 11.1714C0.5 9.79625 0.698502 8.46309 1.08543 7.21029L1.06956 15.2041C0.689659 13.8199 0.5 12.4654 0.5 11.1714Z" stroke="#FF0000" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="single-content">
                <div className="single-content-tabs d-f">
                    <button className="tabs-btn tabs-btn__active">Description</button>
                    <button className="tabs-btn">Additional Information</button>
                    <button className="tabs-btn">Reviews [5]</button>
                </div>
                <div className="single-content-text d-f">
                    <p>
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
                        speaker takes the unmistakable look and sound of Marshall, unplugs the chords,
                        and takes the show on the road.
                    </p>
                    <p>
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                        vintage styled engineering. Setting the bar as one of the loudest
                        speakers in its class, the Kilburn is a compact, stout-hearted hero
                        with a well-balanced audio which boasts a clear midrange and extended
                        highs for a sound that is both articulate and pronounced.
                        The analogue knobs allow you to fine tune the controls to your personal
                        preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                </div>
                <div className="single-content-images d-f">
                    <div><img src="/images/asgaard-sofa-pic1.png" alt="asgaard-sofa-pic1" /></div>
                    <div><img src="/images/asgaard-sofa-pic2.png" alt="asgaard-sofa-pic2" /></div>
                </div>
            </div>
            <div className="single-related">
                <h2 className="single-related-title">Related Products</h2>
                <div className="single-related-box d-f jc-sb">
                    {
                        ProductsList.filter((elem) => elem.id < (moreRelated ?  9 : 5)).map((product) => {
                            return (
                                <ProductsItem
                                    key={product.id}
                                    {...product}
                                />
                            )
                        })
                    }
                </div>
                <button className='single-related-more' onClick={handleRelated}>
                   {moreRelated ? 'View Less' : 'View More'}    
                </button>
            </div>
        </>
    )
}

export default SingleProduct