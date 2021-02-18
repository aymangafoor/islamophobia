import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import './headernew.css'
import close from '../assets/close.png'

const Header = () => {
    console.log('path',window.location.pathname)
    const path = window.location.pathname
    const [menus, open] = useState(false)
    return (
        <div>
            <div className='header container-fluid pt-5'>
                <div className='row d-flex pt-4 ml-2'>
                    <img className='search ml-5' onClick={() => alert('get')} alt='search' src={search} />
                    <Link to='/' className='logo d-flex flex-column justify-content-center col-9' style={{textDecoration:'none'}}>
                        <div className='logo d-flex flex-column justify-content-center col-9'>
                            <h2 className='logo'>Islamophobia</h2>
                            <div className='sub-logo'>India</div>
                        </div>
                    </Link>

                    <div className='add col-2'>
                        <button className='add-btn'><div className='h8 text-align-center'>ADD DATA</div></button>
                    </div>
                </div>
                <div className='links container mt-4'>
                    <div className='row-fluid col-12 d-flex justify-content-between'>
                        <Link to='/definition' style={{color: path=='/definition'? '#FAB62F':'white'}}>Definition</Link>
                        <span>|</span>
                        <Link to='/tracking' style={{color: path=='/tracking'? '#FAB62F':'white'}}>Tracking Islamophobia</Link>
                        <span>|</span>
                        <Link to='/everyday' style={{color: path=='/everyday'? '#FAB62F':'white'}}>Everyday Islamophobia</Link>
                        <span>|</span>
                        <Link to='/news' style={{color: path=='/news'? '#FAB62F':'white'}}>Islamophobia News</Link>
                        <span>|</span>
                        <Link to='/hate' style={{color: path=='/hate'? '#FAB62F':'white'}}>Hate Groups</Link>
                        <span>|</span>
                        <Link to='/library' style={{color: path=='/library'? '#FAB62F':'white'}}>Library</Link>
                        <span>|</span>
                        <Link to='/about' style={{color: path=='/about'? '#FAB62F':'white'}}>About</Link>
                        <span>|</span>
                        <Link to='/contact' style={{color: path=='/contact'? '#FAB62F':'white'}}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className='header-mob container pt-5 pb-3'>
                <div className='row'>
                    <div className='logo col-9'>
                        <div className='column'>
                            <h2 className='logo'>Islamophobia</h2>
                            <div className='sub-logo'>India</div>
                        </div>

                    </div>
                    <img className='search col' onClick={() => alert('get')} alt='search' src={search} />
                    {!menus ? <img className='tabs col' onClick={() => open(true)} alt='search' src={menu} /> : <img className='tabs col' onClick={() => open(false)} alt='search' src={close} />}
                </div>
            </div>
            {menus ? <div className='menus'>
                <div style={{ textIndent: '-9999px' }}>
                    {document.body.style.overflow = 'hidden'}
                </div>
                <div className='container ml-4 column'>
                    <Link className='menu-tag col-sm-12 mb-4 mt-3' style={{ color: '#FAB62F' }} to=''>Menu</Link>
                    <Link className='col-sm-12' to='/definition'>Definition</Link>
                    <Link className='col-sm-12' to='/tracking'>Tracking Islamophobia</Link>
                    <Link className='col-sm-12' to='/everyday'>Everyday Islamophobia</Link>
                    <Link className='col-sm-12' to='/hate'>Hate Groups</Link>
                    <Link className='col-sm-12' to='/library'>Library</Link>
                    <Link className='col-sm-12' to='/about'>About</Link>
                    <Link className='col-sm-12' to='/contact'>Contact</Link>
                    <Link className='col-sm-12' to=''>Donate</Link>
                </div>
            </div> : <div style={{ textIndent: '-9999px',height:'0px' }}>{document.body.style.overflow = 'auto'}</div>}
        </div>
    )
}
export default Header;