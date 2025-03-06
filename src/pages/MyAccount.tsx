import React from 'react'
import { BasicBreadcrumbs, ShopFeatures } from '../components'
import './css/MyAccount.css'

const MyAccount = () => {
    const [signType, setSignType] = React.useState(1)
    return (
        <>
            <main className='account-main'>
                <div><img src="/images/house-logo.png" alt="house-logo" /></div>
                <h1 className="account-main-title">My account</h1>
                <div className="account-main-breadcrumbs">
                    <BasicBreadcrumbs activePage='My account' />
                </div>
            </main>
            <section className='account-sign'>
                <h2 className="account-sign-title">{signType === 1 ? 'Log In' : 'Register'}</h2>
                <form action="" className="account-sign-fm">
                    <div className={signType === 1 ? "login-bl" : 'd-n'}>
                        <div className="input-bl">
                            <label htmlFor="userName">Username or email address</label>
                            <input type="text" name="userName" id="userName" />
                        </div>
                        <div className="input-bl input-bl-last">
                            <label htmlFor="userPwd">Password</label>
                            <input type="password" name="userPwd" id="userPwd" />
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name="userRemember" id="userRemember" />
                            <label htmlFor="userRemember">Remember me</label>
                        </div>
                    </div>
                    <div className={signType === 2 ? "register-bl" : "d-n"}>
                        <label htmlFor="userEmail">Email address</label>
                        <input type="email" name='userEmail' id='userEmail' />
                        <div className="register-note d-f">
                            <p>
                                A link to set a new password will be sent to your email address.
                            </p>
                            <p>
                                Your personal data will be used to support your experience
                                throughout this website, to manage access to your account,
                                and for other purposes described in our <a href="">privacy policy</a>.
                            </p>
                        </div>
                    </div>
                    <div className="control-bl d-f align-center">
                        <button type="button" onClick={() => setSignType(1)}>
                            {signType === 1 ? 'Log In' : 'Register'}
                        </button>
                        {
                            signType === 1 ?
                                <button type='button' onClick={() => setSignType(2)}>
                                    Lost Your Password?
                                </button>
                                : null
                        }
                    </div>
                </form>
            </section>
            <ShopFeatures/>
        </>
    )
}

export default MyAccount