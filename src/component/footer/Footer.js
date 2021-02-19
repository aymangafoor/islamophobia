import React from 'react'
import { Link } from 'react-router-dom'
import SprtFooter from './sprtfooter'
import follow from '../assets/follows.png'
import sm1 from '../assets/sm1.png'
import sm2 from '../assets/sm2.png'
import sm3 from '../assets/sm3.png'
import sm4 from '../assets/sm4.png'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <SprtFooter />
                <div className='downfooter'>
                    <div className='footerlogo pl-5'>
                        <div className='footermainlogo'>Islamophobia</div>
                        <div className='footersublogo'>India</div>
                    </div>
                    <div className='tags pr-5'>
                        <div className='singletag'>
                            <Link className='pb-3' to='/'>Mobile app</Link>
                            <div className='subtag pt-2'>
                                <Link to='/'>Features</Link>
                                <Link to='/'>Live Share</Link>
                                <Link to='/'>Video record</Link>
                            </div>
                        </div>
                        <div className='singletag'>
                            <Link className='pb-3' to='/'>Community</Link>
                            <div className='subtag pt-2'>
                                <Link to='/'>Featured artist</Link>
                                <Link to='/'>The Portal</Link>
                                <Link to='/'>Live events</Link>
                            </div>
                        </div>
                        <div className='singletag'>
                            <Link className='pb-3' to='/'>Company</Link>
                            <div className='subtag pt-2'>
                                <Link to='/'>About us</Link>
                                <Link to='/'>Contact us</Link>
                                <Link to='/'>History</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 mb-4 border-top'>
                        <div className='copy mt-2 pl-5'>© Copyright 2021. </div>
                        <div className='follow mt-2 pr-5'>Follow us:{' '}
                            <img className='social ml-2' src={follow} />
                            <img className='social' src={follow} />
                            <img className='social' src={follow} />
                            <img className='social' src={follow} />
                        </div>
                    </div>
                </div>
                <div className='down-mob-footer d-flex flex-column justify-content-center'>
                    <div className='footerlogo justify-content-center col-sm-12 text-align-center'>
                        <div className='footermainlogo'>Islamophobia</div>
                        <div className='footersublogo'>India</div>
                    </div>
                    <div className='social-mob col-sm-12'>
                        <div className='row justify-content-center mr-4 mt-2 pb-2'>
                            <img className='social' src={sm1} />
                            <img className='social' src={sm2} />
                            <img className='social' src={sm3} />
                            <img className='social' src={sm4} />
                        </div>
                        <div className='hln'></div>
                        <div className='copy col d-flex justify-content-center mt-2 mb-2 mx-auto'>© Copyright 2021. </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;