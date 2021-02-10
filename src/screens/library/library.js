import React, { useState } from 'react'
import { Toggle } from '../../component'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './library.css'
import list_img from '../../component/assets/list_card.jpg'
import book1 from '../../component/assets/book1.jpg'
import book2 from '../../component/assets/book2.jpg'
import book3 from '../../component/assets/book3.jpg'
import book4 from '../../component/assets/book4.jpg'
import book5 from '../../component/assets/book5.jpg'
import book6 from '../../component/assets/book6.jpg'
import toppod1 from '../../component/assets/toppod1.jpg'
import toppod2 from '../../component/assets/toppod2.jpg'
import toppod3 from '../../component/assets/toppod3.jpg'
import toppod4 from '../../component/assets/toppod4.jpg'
import trentpod1 from '../../component/assets/trendpod1.jpg'
import trentpod2 from '../../component/assets/trendpod2.jpg'
import trentpod3 from '../../component/assets/trendpod3.jpg'
import trentpod4 from '../../component/assets/trendpod4.jpg'
import scpod1 from '../../component/assets/scpod1.jpg'
import scpod2 from '../../component/assets/scpod2.jpg'
import scpod3 from '../../component/assets/scpod3.jpg'
import scpod4 from '../../component/assets/scpod4.jpg'
import next from '../../component/assets/next.png'





const Library = () => {
    const [videos, changeVideo] = useState(false)
    const [article, changeArticle] = useState(true)
    const [books, changeBooks] = useState(false)
    const [podcast, changePodcast] = useState(false)
    const showArticle = () => {
        changeArticle(true)
        changeVideo(false)
        changeBooks(false)
        changePodcast(false)
    }
    const showVideo = () => {
        changeArticle(false)
        changeVideo(true)
        changeBooks(false)
        changePodcast(false)
    }
    const showBooks = () => {
        changeArticle(false)
        changeBooks(true)
        changeVideo(false)
        changePodcast(false)
    }
    const showPodcast = () => {
        changeArticle(false)
        changeBooks(false)
        changeVideo(false)
        changePodcast(true)
    }
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Library</h3>
            </div>
            <div className='container-fluid px-5 mt-2 mb-2'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row px-5 mb-3'>
                            <Toggle clicked={article} onClick={() => showArticle(true)}>ARTICLES</Toggle>
                            <Toggle clicked={videos} onClick={() => showVideo(true)}>VIDEOS</Toggle>
                            <Toggle clicked={books} onClick={()=> showBooks(true)}>BOOKS</Toggle>
                            <Toggle clicked={podcast} onClick={()=> showPodcast(true)}>PODCAST</Toggle>
                        </div>
                        <div style={{ display: !article ? 'none' : '' }}>
                            <div className='column px-4 mt-5'>
                                <h6>Sed ut perspiciatis</h6>
                                <div className='b2'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Neque porro quisquam est.
                            </div>
                            </div>
                            <div className='column px-4 mt-4'>
                                <h6>Sed ut perspiciatis</h6>
                                <div className='b2'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Neque porro quisquam est.
                            </div>
                            </div>
                            <div className='column px-4 mt-4'>
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
                        <div className='row d-flex justify-content-end pr-5 mb-5'>
                            <Toggle clicked>LIST</Toggle>
                            <Toggle>GRID</Toggle>
                            <div className='column mt-5 '>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.jsahdjashd
                                </div>
                            </div>
                            <div className='column mt-4'>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.sadsadsadsa
                                </div>
                            </div>
                            <div className='column mt-4'>
                                <h6>Lorem ipsum dolor</h6>
                                <div className='b2'>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.dsadasfdsa
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-fluid' style={{ display: !videos ? 'none' : '' }}>
                        <div className='row px-5 py-2'>
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />

                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                            <img className='col-3 pb-3' src={list_img} alt='..' />
                        </div>
                    </div>
                    <div className='container py-5 books' style={{display: books ? '':'none'}}>
                        <div className='row book'>
                            <p className='col-3'>Jan. 26, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>Lauren Oyler’s ‘Fake Accounts’ Captures the Relentlessness of Online Life</div>
                                <div className='b2'>
                                    Oyler’s debut novel is about a smart, irascible narrator who is
                                 steeped in the concerns and tone of social media.
                                </div>
                                <div className='b3'>By PARUL SEHGAL</div>
                            </div>
                            <img src={book1}/>
                        </div>
                        <div className='row book'>
                            <p className='col-3'>Jan. 25, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>Lauren Oyler’s ‘Fake Accounts’ Captures the Relentlessness of Online Life</div>
                                <div className='b2'>
                                Mark Harris’s biography tells the story of the writer and
                                 director who formed a beloved comedy duo with Elaine May
                                  and directed movies including “Who’s Afraid of Virginia 
                                  Woolf?” and “The Graduate.”

                                </div>
                                <div className='b3'>By DWIGHT GARNER</div>
                            </div>
                            <img src={book2}/>
                        </div>
                        <div className='row book'>
                            <p className='col-3'>Jan. 24, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>Lauren Oyler’s ‘Fake Accounts’ Captures the Relentlessness of Online Life</div>
                                <div className='b2'>
                                    Oyler’s debut novel is about a smart, irascible narrator who is
                                 steeped in the concerns and tone of social media.
                                </div>
                                <div className='b3'>By PARUL SEHGAL</div>
                            </div>
                            <img src={book3}/>
                        </div>
                        <div className='row book'>
                            <p className='col-3'>Jan. 26, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>Two Sisters Who Changed the Medical Profession</div>
                                <div className='b2'>
                                    Oyler’s debut novel is about a smart, irascible narrator who is
                                 steeped in the concerns and tone of social media.
                                </div>
                                <div className='b3'>By PARUL SEHGAL</div>
                            </div>
                            <img src={book4}/>
                        </div>
                        <div className='row book'>
                            <p className='col-3'>Jan. 25, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>In ‘The Liar’s Dictionary,’ People Work on the Definition of Love and Many Other Words</div>
                                <div className='b2'>
                                Mark Harris’s biography tells the story of the writer and director who
                                 formed a beloved comedy duo with Elaine May and directed movies including
                                  “Who’s Afraid of Virginia Woolf?” and “The Graduate.”
                                </div>
                                <div className='b3'>By DWIGHT GARNER</div>
                            </div>
                            <img src={book5}/>
                        </div>
                        <div className='row book'>
                            <p className='col-3'>Jan. 4, 2021</p>
                            <div className='col-6'>
                                <div className='h7'>Lauren Oyler’s ‘Fake Accounts’ Captures the Relentlessness of Online Life</div>
                                <div className='b2'>
                                Mark Harris’s biography tells the story of the writer and director who
                                 formed a beloved comedy duo with Elaine May and directed movies including
                                  “Who’s Afraid of Virginia Woolf?” and “The Graduate.”
                                </div>
                                <div className='b3'>By DWIGHT GARNER</div>
                            </div>
                            <img src={book6}/>
                        </div>
                    </div>
                    <div className='container py-5 podcast' style={{display: podcast ? '':'none'}}>
                        <h5>Top podcasts</h5>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={toppod1}/>
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={toppod2} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={toppod3} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <div className='row'><img className='col-10' src={toppod4}/> <img className='next' src={next} /></div>
                                
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                        </div>
                        <h5>Trending podcasts</h5>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={trentpod1}/>
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={trentpod2} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={trentpod3} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={trentpod4}/>
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                        </div>
                        <h5>Top podcasts in Society & Culture</h5>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={scpod1}/>
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={scpod2} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={scpod3} />
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
                            </div>
                            <div className='col-3'>
                                <img src={scpod4}/>
                                <div className='Ag'>The Daily</div>
                                <div className='b2'>The New York Times</div>
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