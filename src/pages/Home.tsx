import { Link } from 'react-router-dom'
import { BlogsItem, BlogsList, ProductsItem, ProductsList } from '../components'
import './css/Home.css'
import React from 'react'

const Home = () => {
  const [morePicks, setMorePicks] = React.useState(false)

  const handlePicks = () => {
    setMorePicks((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <>
      <main className='home-main'>
        <h1 className="home-main-title">Rocket single seater</h1>
        <Link to="/shop" className="home-main-shop">Shop Now</Link>
      </main>
      <section className='home-categories d-f'>
        <div className="home-categories-item">
          <h3 className="categories-item-title">Side table</h3>
          <a href="" className="categories-item-more">View More</a>
        </div>
        <div className="home-categories-item">
          <h3 className="categories-item-title">Cloud sofa</h3>
          <a href="" className="categories-item-more">View More</a>
        </div>
      </section>
      <section className='home-picks'>
        <h2 className="home-bl-title text-center">Top Picks For You</h2>
        <p className="home-picks-desc">
          Find a bright ideal to suit your taste with our great
          selection of suspension, floor and table lights.
        </p>
        <div className="home-picks-box d-f jc-sb">
          {
            ProductsList.filter((elem) => elem.id < (morePicks ? 9 : 5)).map((product) => {
              return (
                <ProductsItem
                  key={product.id}
                  {...product}
                />
              )
            })
          }
        </div>
        <button className='home-picks-more' onClick={handlePicks}>{morePicks ? 'View Less' : 'View More'}</button>
      </section>
      <section className='home-arrivals d-f align-center'>
        <div><img src="/images/asgaard-sofa.png" alt="asgaard-sofa" /></div>
        <div>
          <h4 className="home-arrivals-above">New Arrivals</h4>
          <h2 className="home-arrivals-title">Asgaard sofa</h2>
          <Link to="/single-product" className="home-arrivals-order">Order Now</Link>
        </div>
      </section>
      <section className='home-blogs'>
        <h2 className="home-bl-title text-center">Our Blogs</h2>
        <p className="home-blogs-desc">Find a bright ideal to suit your taste with our great selection</p>
        <div className="home-blogs-box d-f jc-sb">
          {
            BlogsList.map((post) => {
              return (
                <BlogsItem
                  key={post.id}
                  {...post}
                />
              )
            })
          }
        </div>
        <Link to='/blog' className='home-blogs-all'>View All Post</Link>
      </section>
      <section className='home-instagram'>
        <h2 className="home-instagram-title">Our Instagram</h2>
        <p className="home-instagram-desc">Follow our store on Instagram</p>
        <a href="" className="home-instagram-follow">Follow Us</a>
      </section>
    </>
  )
}

export default Home