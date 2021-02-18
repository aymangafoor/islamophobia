import React, { useEffect, useRef } from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './home.css'
import chart1 from '../../component/assets/chart1.jpg'
import chart2 from '../../component/assets/chart1.jpg'
import img1 from '../../component/assets/img1.jpg'
import img2 from '../../component/assets/img2.jpg'
import img3 from '../../component/assets/img3.jpg'
import hate from '../../component/assets/hate.jpg'
import bag from '../../component/assets/bag.png'
import news1 from '../../component/assets/news1.png'
import news2 from '../../component/assets/library1.jpg'
import news3 from '../../component/assets/news3.jpg'
import lib1 from '../../component/assets/lib1.png'
import lib2 from '../../component/assets/lib2.png'
import lib3 from '../../component/assets/lib3.png'
import list_img from '../../component/assets/list_card.jpg'

import { Button } from '../../component'
import Tableau from '../../component/tableau'
import ReactHtmlParser from 'react-html-parser';

const home1 = 'https://public.tableau.com/views/Islamophobia_Final/Home1?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
const home2 = 'https://public.tableau.com/views/Islamophobia_Final/Home2?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
const home3 = 'https://public.tableau.com/views/Islamophobia_Final/Home3?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <div className='tracking container-fluid'>
                    <div className='tr-is'>Tracking Islamophobia</div>
                    <div className='row mt-4 mx-5'>
                        {/* <img className='col-lg-6 col-sm-12' src={chart1} />
                        <img className='col-lg-6 col-sm-12' src={chart2} />
                        <div className='white-box mx-3 mt-2 mb-6 col'></div> */}
                        <div className='col-6  my-2'>
                            <Tableau url={home1}/> 
                        </div>
                        <div className='col-6 my-2'>
                            <Tableau url={home2}/> 
                        </div>
                        <div className='col-12 my-2'>
                            <Tableau url={home3}/> 
                        </div>
                        
                    </div>
                    <div className='incidents col-11 mx-auto  mt-4 mb-4'>
                        <h4 className='mx-auto text-align-center col-6 pt-4 mb-4'>Islamophobia Incidents</h4>
                        <div className='container-fluid'>
                            <div className='row px-5 pt-2 pb-5'>
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />

                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />

                                <img className='col-3 pb-4' src={list_img} alt='..' />
                                <img className='col-3 pb-4' src={list_img} alt='..' />
                            </div>
                        </div>
                    </div>
                    <div className='yellow-box mx-3 mt-2 mb-6 col'></div>
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
                            <img alt='..' className='col-lg-3 col-sm-4 mb-3' src={img1} />
                            <img alt='..' className='col-lg-3 col-sm-4 mb-3' src={img2} />
                            <img alt='..' className='col-lg-3 col-sm-4 mb-3' src={img3} />
                            <img alt='..' className='col-lg-3 col-sm-4 mb-4' src={img1} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'><Button className='my-5' white>SEE MORE</Button></div>

                </div>

                <div className='quick'>
                    <h4 className='ml-5 mb-4 mt-4'>Quick Sections</h4>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img alt='..' className='col-2 py-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Islamophobia Library</div>
                        </div>
                    </div>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img alt='..' className='col-2 py-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Hate Groups</div>
                        </div>
                    </div>
                    <div className='col-sm-12  d-flex justify-content-center'>
                        <div className='datas row'>
                            <img alt='..' className='col-2 py-3 px-3' alt='..' src={bag} />
                            <div className='h7 col-10 d-flex align-items-center'>Everyday Islamophobia</div>
                        </div>
                    </div>
                </div>
                <div className='library'>
                    <div className='column m-2'>
                        <h4 className='d-flex justify-content-center my-5'>Islamophobia Library</h4>
                        <div className='container-fluid'>
                            <div className='row mx-5'>
                                <div className='col-lg-6'>
                                    <h5>Article</h5>
                                    <div className='card mt-2 mb-3'>
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img src={lib1} class="card-img" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <p class="card-text col-6">ARTICLES</p>
                                                        <p class="card-text col-6 text-align-right">3 DAYS TO GO</p>
                                                    </div>
                                                    <h5 class="card-title">7 Skills of Highly Effective Programmers</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <h5>Books</h5>
                                    <div className='card mt-2 mb-3'>
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img src={lib2} class="card-img" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <p class="card-text col-6">BOOKS</p>
                                                        <p class="card-text col-6 text-align-right">3 DAYS TO GO</p>
                                                    </div>
                                                    <h5 class="card-title">7 Skills of Highly Effective Programmers</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className='row mx-5'>
                                <div className='col-lg-6'>
                                    <h5>Videos</h5>
                                    <div className='card mt-2 mb-3'>
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img src={lib3} class="card-img" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <p class="card-text col-6">VIDEOS</p>
                                                        <p class="card-text col-6 text-align-right">3 DAYS TO GO</p>
                                                    </div>
                                                    <h5 class="card-title">7 Skills of Highly Effective Programmers</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <h5>Podcast</h5>
                                    <div className='card mt-2 mb-3'>
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img src={lib1} class="card-img" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <p class="card-text col-6">PODCAST</p>
                                                        <p class="card-text col-6 text-align-right">3 DAYS TO GO</p>
                                                    </div>
                                                    <h5 class="card-title">7 Skills of Highly Effective Programmers</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='container-fluid px-5 news'>
                    <h4 className='d-flex justify-content-center my-5'>Islamophobia News</h4>
                    <div className='row px-5'>
                        <img src={news1} alt='..' className='col-8' />
                        <div className='news1 col-4'>
                            <div className='row toggles'>
                                <div className='h7 col-6 text-align-center news-btn-toggle'>FEATURED</div>
                                <div className='h7 col-6 news-btn-toggle'>LATEST NEWS</div>
                            </div>
                            <div className='card mt-4 mb-3'>
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={news2} class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <div class="b4 ml-4 card-title">7 Skills of Highly Effective Programmers 7 Skills.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mt-2 mb-3'>
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={news2} class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <div class="b4 ml-4 card-title">7 Skills of Highly Effective Programmers 7 Skills.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mt-2 mb-3'>
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={news2} class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <div class="b4 ml-4 card-title">7 Skills of Highly Effective Programmers 7 Skills.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='container-fluid'>
                        <div className='row my-5 mx-5'>
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
            <Footer />
        </div>
    )
}
export default Home;


