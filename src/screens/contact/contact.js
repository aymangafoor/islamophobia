import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='container mt-2'>
                <div className='row fluid'>
                    <div className='col-lg-4 col-sm-12'>
                        <h4>Get in Touch</h4>
                        <p>Reprehenderit laboris ea est ad id irure eiusmod id voluptate culpa Lorem.
                    Minim magna tempor exercitation reprehenderit irure ad occaecat tempor laborum. </p>
                    </div>
                    <div className='col-lg-8 col-sm-12 py-1'>
                        <h6>Introduction</h6>
                        <div className='row pb-1'>
                            <input className='col-lg-6 ml-3 mr-4 col-sm-12' placeholder='Name' />
                            <input className='col-lg-5 col-sm-12' placeholder='Phone'/>
                        </div>
                        <input className='col-12 pb-1' placeholder='Email*'/>
                        <h6>Message</h6>
                        <textarea placeholder='Write in here*' rows='5' className='col-12' />
                        <button className='button-message'>SEND MESSAGE</button>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}
export default Contact;