import React, { useState } from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './tracking.css'
import search from '../../component/assets/Vector.png'
import list_img from '../../component/assets/list_card.jpg'
import maps from '../../component/assets/map.jpg'
//import graph1 from '../../component/assets/graph1.jpg'
import graph2 from '../../component/assets/graph2.jpg'
import graph3 from '../../component/assets/graph3.jpg'
import graph4 from '../../component/assets/graph4.jpg'
import graph5 from '../../component/assets/graph5.jpg'
import graph6 from '../../component/assets/graph6.jpg'
import { Toggle } from '../../component'



const Tracking = () => {
    const [list, changeList] = useState(true)
    const [map, changeMap] = useState(false)
    const [graph, changeGraph] = useState(false)
    const [drops, drop] = useState(false)
    const showList = () => {
        changeList(true)
        changeMap(false)
        changeGraph(false)
    }
    const showMap = () => {
        changeList(false)
        changeMap(true)
        changeGraph(false)
    }
    const showGraph = () => {
        changeList(false)
        changeMap(false)
        changeGraph(true)
    }
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Tracking Islamophobia</h3>
            </div>
            <div className='container-fluid'>
                <div class="input-group mb-3 mt-3 px-5">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary bg-white" type="button" id="button-addon2"><img src={search} alt='' /></button>
                    </div>
                </div>
                <div className='dropdowns row px-5'>
                    <button class="btn dropdown-toggle">Date</button>
                    <button class="btn dropdown-toggle" type="button">Place of the incident</button>
                    <button class="btn dropdown-toggle" type="button">Legal Aid</button>
                    <button class="btn dropdown-toggle" type="button">Party in power</button>
                    <button class="btn dropdown-toggle" type="button">Role of Police</button>
                    <div className='column'>
                        <button type="button" class="btn dropdown-toggle" onClick={() => { drops ? drop(false) : drop(true) }}>Nature of Harm</button>
                        {drops ? <div className='drops col-3'>
                            <div class="mb-3">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            Social Boycott
                        </div>
                            <div class="mb-3">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            Institutional Discrimination
                        </div>
                            <div class="mb-3">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            Murders/Lynchings
                        </div>
                            <div class="mb-3">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            Damage/Theft of Property
                        </div>
                        </div> : ''}
                    </div>
                    <button class="btn dropdown-toggle">Causal Factors</button>
                </div>
                <div className='row px-5'>
                    <div className='col-2.5 mb-3 px-3 ml-3'>
                        <Toggle className='bttn' style={{ backgroundColor: list ? '#FAB62F' : 'white', color: list ? 'white' : '#FAB62F' }} onClick={() => showList()}>List</Toggle>
                        <Toggle className='bttn' style={{ backgroundColor: map ? '#FAB62F' : 'white', color: map ? 'white' : '#FAB62F' }} onClick={() => showMap()}>Map</Toggle>
                        <Toggle className='bttn' style={{ backgroundColor: graph ? '#FAB62F' : 'white', color: graph ? 'white' : '#FAB62F' }} onClick={() => showGraph()}>Graph</Toggle>
                    </div>
                </div>
                <div className='container-fluid' style={{ display: !list ? 'none' : '' }}>
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
                <div className='container justify-content-center py-3' style={{ display: map ? 'flex' : 'none' }}>
                    <img className='col-6' src={maps} alt='' />
                </div>
                <div className='container-fluid' style={{ display: graph ? '' : 'none' }}>
                    <div className='row mb-1'>
                        <div className='col-lg-5 col-sm-12 mr-sm-2 border border-primary'>
                            <h6>Place of the Incident</h6>
                            <div className='row boxes d-flex flex-row-reverse justify-content-center mb-2'>
                                <div className='boxe1'><p className='d-flex justify-content-center value'>32</p></div>
                                <div className='boxe2'><p className='d-flex justify-content-center value'>256</p></div>
                                <div className='boxe3'><p className='d-flex justify-content-center value'>144</p></div>
                                <div className='boxe4'><p className='d-flex justify-content-center value'>168</p></div>
                                <div className='boxe5'><p className='d-flex justify-content-center value'>248</p></div>
                                <div className='boxe6'><p className='d-flex justify-content-center value'>96</p></div>
                                <div className='boxe7'><p className='d-flex justify-content-center value'>32</p></div>
                                <div className='boxe8'><p className='d-flex justify-content-center value'>32</p></div>
                                <div className='boxe9'><p className='d-flex justify-content-center value'>32</p></div>
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='small-box mr-2' style={{ backgroundColor: '#C4C4C4' }} />Place of the incident
                            <div className='small-box ml-2 mr-2' style={{}} />Date
                            </div>
                        </div>
                        <div className='col-lg-5 col-sm-12 mr-sm-2 border border-primary'>
                            <h6>Party in Power</h6>
                            <div className='row'>
                                <div className='col-5'>
                                    <div className='row'>
                                        <div className='small-box ml-2'> </div>
                                        <div className='h7'>BJP</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{ backgroundColor: '#B085FF' }}> </div>
                                        <div className='h7'>INC</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{ backgroundColor: '#503795' }} > </div>
                                        <div className='h7'>CPI(M)</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{ backgroundColor: '#000000' }}> </div>
                                        <div className='h7'>Color4</div>
                                    </div>
                                </div>
                                <img className='col-6' height={180} width={180} src={graph2} alt='..' />
                            </div>

                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-lg-5 col-sm-12 mr-sm-2 border border-primary'>
                            <h6>Casual Factors</h6>
                            <img height={180} width={300} src={graph3} alt='..' />
                        </div>
                        <div className='col-lg-5 col-sm-12 border border-primary'>
                            <h6>Role of  Police</h6>
                            <img height={180} width={180} src={graph4} alt='..' />
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-lg-5 col-sm-12 mr-sm-2 border border-primary'>
                            <h6>Legal Aid</h6>
                            <img height={180} width={300} src={graph5} alt='..' />
                        </div>
                        <div className='col-lg-5 col-sm-12 mr-sm-2 border border-primary'>
                            <h6>Nature of Harm</h6>
                            <img height={180} width={300} src={graph6} alt='..' />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Tracking;