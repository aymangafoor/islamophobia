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
                    <div className='col-4'>
                        <h4>Get in Touch</h4>
                        <p>Reprehenderit laboris ea est ad id irure eiusmod id voluptate culpa Lorem.
                    Minim magna tempor exercitation reprehenderit irure ad occaecat tempor laborum. </p>
                    </div>
                    <div className='col-8 py-1'>
                        <h6>Introduction</h6>
                        <div className='row px-3 pb-1'>
                            <input className='col-5 mr-1' />
                            <input className='col-6' />
                        </div>
                        <input className='col-12 pb-1' />
                        <h6>Message</h6>
                        <textarea rows='5' className='col-12' />
                        <button className='button-message'>SEND MESSAGE</button>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}
export default Contact;