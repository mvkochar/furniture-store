import { Link } from 'react-router-dom'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb">
        <p className="footer-address">
          400 University Drive Suite 200 Coral <br /> Gables, <br />
          FL 33134 USA
        </p>
        <div>
          <h3 className="footer-bl-title">Links</h3>
          <ul className="footer-bl-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Help</h3>
          <ul className="footer-bl-list">
            <li><a href="">Payment Options</a></li>
            <li><a href="">Returns</a></li>
            <li><a href="">Privacy Policies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Newsletter</h3>
          <form action="" className='footer-bl-fm'>
            <input type="email" name="customerEmail" placeholder='Enter Your Email Address'/>
            <button type="button">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="footer-rights">2022 Meubel House. All rights reverved</p>
    </footer>
  )
}

export default Footer