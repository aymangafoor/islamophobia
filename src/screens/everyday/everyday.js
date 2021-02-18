import React, { useEffect, useState } from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './everyday.css'
import img from '../../component/assets/img2.jpg'
import axios from 'axios'
import { BASE } from '../../api/api'


const Everyday = () => {
    const [everyday, editEvery] = useState([])
    useEffect(()=>{
        axios.get(BASE + 'jsonapi/node/everyday_islamophobia?include=field_image,field_story_page')
        .then((data) =>{
            editEvery(data.data)
        })
    },[])
    const everyday_img = everyday.included 
    console.log('everyday image',everyday_img)
    console.log('everyday',everyday)

    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Everyday Islamophobia</h3>
            </div>
            <div className='everyday'>
                <div className='container'>
                    <div className='row image-every mt-5 mb-3'>
                        {everyday_img?everyday_img.map((data) =>(
                                  data.attributes.uri?  <img className='col-lg-4 col-sm-6 mb-5' src={BASE + `${data.attributes.uri.url}`} alt='..' />:""
                        )  
                        ):''}
                        
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