import { BasicBreadcrumbs, ShopFeatures } from '../components'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="contact-main-title">Contact</h1>
                <div className="contact-main-breadcrumbs">
                    <BasicBreadcrumbs activePage='Contact' />
                </div>
            </main>
            <section className='contact-touch'>
                <h2 className="contact-touch-title">Get In Touch With Us</h2>
                <p className="contact-touch-desc">
                    For More Information About Our Product & Services.
                    Please Feel Free To Drop Us An Email. Our Staff Always
                    Be There To Help You Out. Do Not Hesitate!
                </p>
            </section>
            <div className="contact-content d-f">
                <div className="contact-info d-f">
                    <div className="contact-info-item d-f">
                        <div><img src="/images/address.png" alt="address" /></div>
                        <dl>
                            <dt>Address</dt>
                            <dd>
                                236 5th SE Avenue, New York NY10000, United States
                            </dd>
                        </dl>
                    </div>
                    <div className="contact-info-item d-f">
                        <div><img src="/images/phone.png" alt="phone" /></div>
                        <dl>
                            <dt>Phone</dt>
                            <dd>
                                Mobile: +(84) 546-6789
                                Hotline: +(84) 456-6789
                            </dd>
                        </dl>
                    </div>
                    <div className="contact-info-item d-f">
                        <div><img src="/images/clock-fill.png" alt="clock-fill" /></div>
                        <dl>
                            <dt>Working Time</dt>
                            <dd>
                                Monday-Friday: 9:00 - 22:00
                                Saturday-Sunday: 9:00 - 21:00
                            </dd>
                        </dl>
                    </div>
                </div>
                <form action="" className="contact-fm">
                    <div className="input-bl">
                        <label htmlFor="contactName">Your name</label>
                        <input type="text" name='contactName' id='contactName' placeholder='Jake Smith'/>
                    </div>
                    <div className="input-bl">
                        <label htmlFor="contactEmail">Email address</label>
                        <input type="email" name='contactEmail' id='contactEmail' placeholder='Abc@def.com'/>
                    </div>
                    <div className="input-bl">
                        <label htmlFor="">Subject</label>
                        <input type="text" name='contactSubject' id='contactSubject' placeholder='This is an optional' />
                    </div>
                    <div className="input-bl input-bl-last">
                        <label htmlFor="contactMsg">Message</label>
                        <textarea name="contactMsg" id="contactMsg" placeholder='Hi! i’d like to ask about'></textarea>
                    </div>
                     <button type="button">Submit</button>   
                </form>
            </div>
            <ShopFeatures/>
        </>
    )
}

export default Contact