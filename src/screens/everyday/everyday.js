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
            <div className='container'>
                <div className='row mt-3'>
                    <img className='col-4' src={img} alt='..' />
                    <img className='col-4' src={img} alt='..' />
                    <img className='col-4' src={img} alt='..' />
                </div>
                <div className='row mt-3 mb-3'>
                    <img className='col-4' src={img} alt='..' />
                    <img className='col-4' src={img} alt='..' />
                    <img className='col-4' src={img} alt='..' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Everyday;