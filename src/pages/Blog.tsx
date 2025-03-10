import { BasicBreadcrumbs, ShopFeatures } from '../components'
import './css/Blog.css'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="blog-main-title">Blog</h1>
                <div className="blog-main-breadcrumbs">
                    <BasicBreadcrumbs activePage='Blog' />
                </div>
            </main>
            <div className="blog-content d-f jc-sb">
                <div>
                    <div className="blog-box d-f">
                        <div className="blog-item">
                            <div><img src="/images/blog/1.png" alt="blog1" /></div>
                            <div className="blog-item-details d-f">
                                <div className="blog-item-author">Admin</div>
                                <div className="blog-item-date">14 Oct 2022</div>
                                <div className="blog-item-cat">Wood</div>
                            </div>
                            <h3 className="blog-item-title">Going all-in with millennial design</h3>
                            <p className="blog-item-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus 
                                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis 
                                molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
                                Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque 
                                ornare aenean euismod elementum.
                            </p>
                            <a href="" className="blog-item-more">Read More</a>
                        </div>                       
                        <div className="blog-item">
                            <div><img src="/images/blog/2.png" alt="blog2" /></div>
                            <div className="blog-item-details d-f">
                                <div className="blog-item-author">Admin</div>
                                <div className="blog-item-date">14 Oct 2022</div>
                                <div className="blog-item-cat">Handmade</div>
                            </div>
                            <h3 className="blog-item-title">Exploring new ways of decorating</h3>
                            <p className="blog-item-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus 
                                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis 
                                molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
                                Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque 
                                ornare aenean euismod elementum.
                            </p>
                            <a href="" className="blog-item-more">Read More</a>
                        </div>
                        <div className="blog-item">
                            <div><img src="/images/blog/3.png" alt="blog3" /></div>
                            <div className="blog-item-details d-f">
                                <div className="blog-item-author">Admin</div>
                                <div className="blog-item-date">14 Oct 2022</div>
                                <div className="blog-item-cat">Handmade</div>
                            </div>
                            <h3 className="blog-item-title">Handmade pieces that took time to make</h3>
                            <p className="blog-item-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus 
                                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis 
                                molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
                                Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque 
                                ornare aenean euismod elementum.
                            </p>
                            <a href="" className="blog-item-more">Read More</a>
                        </div>    
                    </div>
                    <div className="blog-pagination d-f">
                        <button className="pagination-btn pagination-btn__active">1</button>
                        <button className="pagination-btn">2</button>
                        <button className="pagination-btn">3</button>
                        <button className="pagination-btn pagination-btn-next">Next</button>
                    </div>
                </div>
                <div>
                    <form action="" className='blog-search d-f align-center'>
                        <input type="text" name='searchQuery'/>
                        <button className='btn-clear d-b'>
                            <img src="/images/search.png" alt="search" width={24} height={24} />
                        </button>
                    </form>
                    <div className="blog-categories">
                        <h3 className="blog-categories-title">Categories</h3>
                        <div className="blog-categories-box d-f">
                            <div className="d-f jc-sb">
                                <div>Crafts</div>
                                <div>2</div>
                            </div>
                            <div className="d-f jc-sb">
                                <div>Design</div>
                                <div>8</div>
                            </div>
                            <div className="d-f jc-sb">
                                <div>Handmade</div>
                                <div>7</div>
                            </div>
                            <div className="d-f jc-sb">
                                <div>Interior</div>
                                <div>1</div>
                            </div>
                            <div className="d-f jc-sb">
                                <div>Wood</div>
                                <div>6</div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-recent">
                        <h3 className="blog-recent-title">Recent Posts</h3>
                        <div className="blog-recent-box d-f">
                            <div className="blog-recent-item d-f align-center">
                                <div><img src="/images/blog-recent/1.png" alt="blog-recent1" /></div>
                                <div>
                                    <h4 className="recent-item-title">Going all-in with millennial design</h4>
                                    <p className="recent-item-date">03 Aug 2022</p>
                                </div>
                            </div>
                            <div className="blog-recent-item d-f align-center">
                                <div><img src="/images/blog-recent/2.png" alt="blog-recent2" /></div>
                                <div>
                                    <h4 className="recent-item-title">Exploring new ways of decorating</h4>
                                    <p className="recent-item-date">03 Aug 2022</p>
                                </div>
                            </div>
                            <div className="blog-recent-item d-f align-center">
                                <div><img src="/images/blog-recent/3.png" alt="blog-recent3" /></div>
                                <div>
                                    <h4 className="recent-item-title">Handmade pieces that took time to make</h4>
                                    <p className="recent-item-date">03 Aug 2022</p>
                                </div>
                            </div>
                            <div className="blog-recent-item d-f align-center">
                                <div><img src="/images/blog-recent/4.png" alt="blog-recent4" /></div>
                                <div>
                                    <h4 className="recent-item-title">Modern home in Milan</h4>
                                    <p className="recent-item-date">03 Aug 2022</p>
                                </div>
                            </div>
                            <div className="blog-recent-item d-f align-center">
                                <div><img src="/images/blog-recent/5.png" alt="blog-recent5" /></div>
                                <div>
                                    <h4 className="recent-item-title">Colorful office redesign</h4>
                                    <p className="recent-item-date">03 Aug 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShopFeatures/>
        </>
    )
}

export default Blog