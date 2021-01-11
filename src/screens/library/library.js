import React, { useState } from 'react'
import { Toggle } from '../../component'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import list_img from '../../component/assets/list_card.jpg'


const Library = () => {
    const [videos, changeVideo] = useState(false)
    const [article, changeArticle] = useState(true)
    const showArticle = () => {
        changeArticle(true)
        changeVideo(false)
    }
    const showVideo = () => {
        changeArticle(false)
        changeVideo(true)
    }
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Library</h3>
            </div>
            <div className='container mt-2 mb-2'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row mb-3'>
                            <Toggle clicked={article} onClick={() => showArticle(true)}>ARTICLES</Toggle>
                            <Toggle clicked={videos} onClick={() => showVideo(true)}>VIDEOS</Toggle>
                            <Toggle>BOOKS</Toggle>
                            <Toggle>PODCAST</Toggle>
                        </div>
                        <div style={{ display: !article ? 'none' : '' }}>
                            <div className='column'>
                                <h6>Sed ut perspiciatis</h6>
                                <div className='b2'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Neque porro quisquam est.
                            </div>
                            </div>
                            <div className='column'>
                                <h6>Sed ut perspiciatis</h6>
                                <div className='b2'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Neque porro quisquam est.
                            </div>
                            </div>
                            <div className='column'>
                                <h6>Sed ut perspiciatis</h6>
                                <div className='b2'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Neque porro quisquam est.
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6' style={{ display: !article ? 'none' : '' }}>
                        <div className='row'>
                            <Toggle clicked>LIST</Toggle>
                            <Toggle>GRID</Toggle>
                            <div className='column'>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.jsahdjashd
                                </div>
                            </div>
                            <div className='column'>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.sadsadsadsa
                                </div>
                            </div>
                            <div className='column'>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.dsadasfdsa
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='col-lg-12' style={{ display: !videos ? 'none' : '' }}>
                            <div className='row mb-3 justify-content-center'>
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                            </div>
                            <div className='row mb-3 d-flex justify-content-center'>
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                            </div>
                            <div className='row mb-3 d-flex justify-content-center'>
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                                <img className='col-2' src={list_img} alt='..' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default Library;