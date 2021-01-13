import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div className='row fluid'>
                    <div className='col-lg-4 col-sm-12'>
                        <h3 className='yellow text-align-left'>Get in Touch</h3>
                        <div className='b1'>Reprehenderit laboris ea est ad id irure eiusmod id voluptate culpa Lorem.
                    Minim magna tempor exercitation reprehenderit irure ad occaecat tempor laborum. </div>
                    </div>
                    <div className='col-lg-8 col-sm-12 py-1'>
                        <h6>Introduction</h6>
                        <input className='col-lg-6 mb-2 col-sm-12' placeholder='Name' />
                        <input className='col-lg-5 mb-2 col-sm-12' placeholder='Phone' />
                        <input className='col-lg-11 col-sm-12 pb-1' placeholder='Email*' />
                        <h6 className='mt-3'>Message</h6>
                        <textarea placeholder='Write in here*' rows='5' className='col-lg-11 col-sm-12 mb-3' />
                        <button className='add-btn py-2 px-2 mb-4'><div className='h8 text-align-center'>SEND MESSAGE</div></button>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}
export default Contact;