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



const Tracking = () => {
    const [list,changeList] = useState(false)
    const [map,changeMap] = useState(false)
    const [graph,changeGraph] = useState(false)
    const showList =()=>{
        changeList(true)
        changeMap(false)
        changeGraph(false)
    }
    const showMap =()=>{
        changeList(false)
        changeMap(true)
        changeGraph(false)
    }
    const showGraph =()=>{
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
            <div className='container'>
                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={search} alt='' /></button>
                    </div>
                </div>
                <div className='dropdown'>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Date</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Place of the incident</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Legal Aid</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Party in power</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Role of Police</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nature of Harm</button>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Causal Factors</button>
                </div>
                <div className='row'>
                    <div className='col-2.5 mb-3 ml-3 border'>
                        <button className='bttn' style={{ backgroundColor: list ? 'yellow' : 'white', color: list ? 'white' : 'yellow' }} onClick={() => showList()}>List</button>
                        <button className='bttn' style={{ backgroundColor: map ? 'yellow' : 'white', color: map ? 'white' : 'yellow' }} onClick={() => showMap()}>Map</button>
                        <button className='bttn' style={{ backgroundColor: graph ? 'yellow' : 'white', color: graph ? 'white' : 'yellow' }} onClick={() => showGraph()}>Graph</button>
                    </div>
                </div>
                <div className='container py-3' style={{ display: !list ? 'none' : '' }}>
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
                    <div className='row mb-3 d-flex justify-content-center'>
                        <img className='col-2' src={list_img} alt='..' />
                        <img className='col-2' src={list_img} alt='..' />
                        <img className='col-2' src={list_img} alt='..' />
                        <img className='col-2' src={list_img} alt='..' />
                        <img className='col-2' src={list_img} alt='..' />
                    </div>
                </div>
                <div className='container d-flex justify-content-center py-3' style={{ display: map ? '' : 'none' }}>
                    <img className='col-6' src={maps} alt='' />
                    <div className='col-4 bg-light d-flex flex-column h-25 w-25'>
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
                    </div>
                </div>
                <div className='container-fluid' stye={{ display: graph ? '' : 'none' }}>
                    <div className='row mb-1'>
                        <div className='col-5 mr-1 border border-primary'>
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
                            <div className='small-box mr-2' style={{backgroundColor: '#C4C4C4'}} />Place of the incident 
                            <div className='small-box ml-2 mr-2' style={{}}/>Date
                            </div>  
                        </div> 
                        <div className='col-5 border border-primary'>
                            <h6>Party in Power</h6>
                            <div className='row'>
                                <div className='col-5'>
                                    <div className='row'>
                                        <div className='small-box ml-2'> </div>
                                       <div className='h7'>BJP</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{backgroundColor:'#B085FF'}}> </div>
                                        <div className='h7'>INC</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{backgroundColor:'#503795'}} > </div>
                                        <div className='h7'>CPI(M)</div>
                                    </div>
                                    <div className='row'>
                                        <div className='small-box ml-2' style={{backgroundColor:'#000000'}}> </div>
                                        <div className='h7'>Color4</div>
                                    </div>
                                </div>
                                <img className='col-6' height={180} width={180} src={graph2} alt='..' />
                            </div>

                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-5 mr-1  border border-primary'>
                            <h6>Casual Factors</h6>
                            <img height={180} width={300} src={graph3} alt='..' />
                        </div>
                        <div className='col-5 border border-primary'>
                            <h6>Role of  Police</h6>
                            <img height={180} width={180} src={graph4} alt='..' />
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-5 mr-1 border border-primary'>
                            <h6>Legal Aid</h6>
                            <img height={180} width={300} src={graph5} alt='..' />
                        </div>
                        <div className='col-5 border border-primary'>
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