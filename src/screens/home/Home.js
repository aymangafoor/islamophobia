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
import bag from '../../component/assets/bag.png'
import { Button } from '../../component'


const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <div className='tracking container-fluid'>
                    <div className='tr-is'>Tracking Islamophobia</div>
                    <div className='row mt-4 mx-5'>
                        <img className='col-lg-6 col-sm-12' src={chart1} />
                        <img className='col-lg-6 col-sm-12' src={chart2} />
                        <div className='white-box mx-3 mt-2 mb-6 col'></div>
                    </div>

                </div>
                <div className='latest container-fluid'>
                    <h4 className='mb-4'>Latest Incidents</h4>
                    <div className='mb-4'>
                        <h5>Sed ut perspiciatis</h5>
                        <div className='b3 mb-3'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. consequuntur.
                        </div>
                        <Button>LEARN MORE</Button>
                    </div>
                    <div className='mb-4'>
                        <h5>Sed ut perspiciatis</h5>
                        <div className='b3 mb-3'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. consequuntur.
                        </div>
                        <Button>LEARN MORE</Button>
                    </div>
                    <div className='mb-4'>
                        <h5>Sed ut perspiciatis</h5>
                        <div className='b3 mb-3'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. consequuntur.
                        </div>
                        <Button>LEARN MORE</Button>
                    </div>
                    <div className='mb-4'>
                        <h5>Sed ut perspiciatis</h5>
                        <div className='b3 mb-3'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. consequuntur.
                        </div>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
                <div className='everyday-home'>
                    <div className='everyday-text my-5'>Everyday Islamophobia</div>
                    <div className='container-fluid'>
                        <div className='row-fluid mx-5'>
                            <img className='col-lg-3 col-sm-4 mb-3' src={img1} />
                            <img className='col-lg-3 col-sm-4 mb-3' src={img2} />
                            <img className='col-lg-3 col-sm-4 mb-3' src={img3} />
                            <img className='col-lg-3 col-sm-4 mb-4' src={img1} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'><Button className='my-5' white>SEE MORE</Button></div>

                </div>

                <div className='quick'>
                    <h4 className='ml-5 mb-4 mt-4'>Quick Sections</h4>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img className='col-2 py-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Islamophobia Library</div>
                        </div>
                    </div>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img className='col-2 py-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Hate Groups</div>
                        </div>
                    </div>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img className='col-2 py-3 px-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Everyday Islamophobia</div>
                        </div>
                    </div>
                </div>
                <div className='library'>
                    <div className='column m-2'>
                        <h4 className='d-flex justify-content-center'>Islamophobia Library</h4>
                        <div className='container-fluid'>
                            <div className='row mx-5'>
                                <div className='col-lg-6'>
                                    <h5>Article</h5>
                                    <img className='card-image col' src={micro1} />
                                </div>
                                <div className='col-lg-6'>
                                    <h5>Books</h5>
                                    <img className='card-image col' src={micro2} />
                                </div>

                            </div>

                            <div className='row mx-5'>
                                <div className='col-lg-6'>
                                    <h5>Videos</h5>
                                    <img className='card-image col' src={micro3} />
                                </div>
                                <div className='col-lg-6'>
                                    <h5>Podcast</h5>
                                    <img className='card-image col' src={micro4} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='hln col-11 mt-5 mx-auto' />
                    <div className='column'>
                        <div className='container-fluid'>
                            <div className='row mb-3 mx-5'>
                                <div className='col-6  align-self-center'>
                                    <h2 className='hate'>Hate Groups</h2>
                                    <div className='b1'>
                                        Not-so-fun fact: 61% of women say they’d rather talk about their own death than have a conversation about money.
                                        That’s some societal money taboo BS, and we’re .
                                        So this is The Money Talk, a series in which we’ll be answering example questions
                                        about how to kick-start important money convos.
                                </div>
                                    <div className='mt-2'><Button>SEE MORE</Button></div>
                                </div>
                                <img className='col-6 my-5' src={hate} />
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


