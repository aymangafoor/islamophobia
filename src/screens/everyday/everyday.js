import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './everyday.css'
import img from '../../component/assets/img2.jpg'


const Everyday = () => {
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Everyday Islamophobia</h3>
            </div>
            <div className='everyday'>
                <div className='container'>
                    <div className='row mt-5 mb-3'>
                        <img className='col-lg-4 col-sm-6 mb-5' src={img} alt='..' />
                        <img className='col-lg-4 mb-5 col-sm-6' src={img} alt='..' />
                        <img className='col-lg-4 mb-5 col-sm-6' src={img} alt='..' />
                        <img className='col-lg-4 mb-5 col-sm-6' src={img} alt='..' />
                        <img className='col-lg-4 mb-5 col-sm-6' src={img} alt='..' />
                        <img className='col-lg-4 mb-5 col-sm-6' src={img} alt='..' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Everyday;