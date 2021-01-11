import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './home.css'
import chart1 from '../../component/assets/chart1.jpg'
import chart2 from '../../component/assets/chart2.jpg'
import img1 from '../../component/assets/img1.jpg'
import img2 from '../../component/assets/img2.jpg'
import img3 from '../../component/assets/img3.jpg'
import micro1 from '../../component/assets/micro1.jpg'
import micro2 from '../../component/assets/micro2.jpg'
import micro3 from '../../component/assets/micro3.jpg'
import micro4 from '../../component/assets/micro4.jpg'
import hate from '../../component/assets/hate.jpg'
import { Button } from '../../component'


const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <div className='tracking container-fluid'>
                    <div className='tr-is'>Tracking Islamophobia</div>
                    <div className='row m-4'>
                        <img className='col-lg-6 col-sm-12' src={chart1} />
                        <img className='col-lg-6 col-sm-12' src={chart2} />
                    </div>
                    <div className='container-fluid'><div className='white-box col-12 pl-1'></div></div>
                    
                </div>
                <div className='everyday'>
                    <div className='everyday-text'>Everyday Islamophobia</div>
                    <div className='container'>
                        <div className='row-fluid'>
                            <img className='col-3' src={img1} />
                            <img className='col-3' src={img2} />
                            <img className='col-3' src={img3} />
                            <img className='col-3' src={img1} />
                        </div>
                    </div>
                    <div className='seemore'><Button white>SEE MORE</Button></div>
                </div>
                <div className='library'>
                    <div className='column m-2'>
                        Islamophobia Library
                        <div className='row m-4'>
                            <div className='col-lg-6'>
                                <h5 className='ml-2'>Article</h5>
                                <img className='card-image' src={micro1} />
                            </div>
                            <div className='col-lg-6'>
                                <h5 className='ml-2'>Books</h5>
                                <img className='card-image' src={micro2} />
                            </div>

                        </div>
                        <div className='row m-4'>
                            <div className='col-lg-6'>
                                <h5 className='col-lg-6 col-sm-12'>Videos</h5>
                                <img className='card-image' src={micro3} />
                            </div>
                            <div className='col-lg-6'>
                                <h5 className='col-lg-12 col-sm-12 ml-2'>Podcast</h5>
                                <img className='card-image' src={micro4} />
                            </div>
                        </div>
                    </div>
                    <div className='card'></div>
                    <div className='column'>

                        <div className='container fluid'>
                            <h2 className='hate'>Hate Groups</h2>
                            <div className='row mb-3'>
                                <div className='col-6 text-left font-family-roboto font-weight-normal p'>
                                    Not-so-fun fact: 61% of women say they’d rather talk about their own death than have a conversation about money.
                                    That’s some societal money taboo BS, and we’re .
                                    So this is The Money Talk, a series in which we’ll be answering example questions
                                    about how to kick-start important money convos.
                                    <div className='seemore'><Button>SEE MORE</Button></div>
                                </div>
                                <img className='hate-img col-5' src={hate} />
                            </div>


                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Home;


