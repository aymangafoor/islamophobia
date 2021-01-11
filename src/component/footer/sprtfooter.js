import React from 'react'
import './footer.css'
import {Button,h1} from '../../component'

class sprtfooter extends React.Component{
render(){
    return(
        <div className='sprt-footer d-flex justify-content-sm-center'>
            <div className='container'>
                <div className='row'>
                    <h3 className='support col-lg-9 col-sm-12 justify-content-sm-center'>Support Our Organization</h3>
                    <div className='sprt-btn col-lg-3 col-sm-12 justify-content-sm-center'><Button white>DONATE NOW</Button></div>
                </div>      
            </div>           
        </div>
    )
}
}
export default sprtfooter;