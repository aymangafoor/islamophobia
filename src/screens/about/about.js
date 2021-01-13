import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import img from '../../component/assets/about_img.jpg'
import './about.css'

const About =() =>{
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3 >About us</h3>
            </div>
            <div className='container'>
                <div className='b1 mt-1 mb-1 col-8 mx-auto'>
                    <h3>The Money Talk: The One with the Partner’s Bank Account</h3>
                    Not-so-fun fact: 61% of women say they’d rather talk about their own death than have a conversation about money.
                    That’s some societal money taboo BS, and we’re .
                    So this is The Money Talk, a series in which we’ll be answering example questions about how to kick-start important money convos.
                </div>
                <img className='about-img col-12' src={img} />
                <div className='b1 mt-1 mb-1 col-8 mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit congue amet justo, libero sed in convallis mi. Non posuere purus sed vulputate in. Adipiscing enim pellentesque rutrum quam neque augue sit nunc. Risus, maecenas vitae odio eu lobortis aliquam. Orci sit eleifend habitant purus. Neque, enim viverra quam faucibus tincidunt morbi dolor adipiscing magna. Non nisl, egestas elit, tellus nulla. Risus tortor, augue sit turpis fermentum at in lacus, non. Non facilisis elit vestibulum odio.
                    <br />
                    Turpis vitae tortor porttitor molestie ullamcorper tempor, nibh sed sem. Tellus dui a sit arcu vulputate ac quis.
                    <br />
    Enim et massa nam nulla. Elementum purus morbi sed non mi pharetra. Ultricies imperdiet aliquet cras faucibus pellentesque dictum nisi fringilla et. Semper cursus a curabitur posuere cras scelerisque lobortis turpis. Cras sit nisl ullamcorper amet, ut elit venenatis hendrerit lobortis. Arcu in ipsum ridiculus tortor eros. Habitant gravida id sodales dui massa lorem fermentum sed. Faucibus purus sed egestas lectus netus nec dapibus. Gravida ipsum amet non in urna, ut sollicitudin elementum orci. Nunc vel lectus vulputate felis, risus purus lacus ornare aenean. Viverra tristique sed mi nibh ullamcorper nec viverra.
    Id netus luctus ipsum sem felis elit a.
                    <br />
    Mi malesuada sem in molestie dignissim arcu. Suspendisse sollicitudin sem tincidunt eros vel mi. Arcu mi, consectetur praesent morbi id elit lacus posuere. Scelerisque venenatis, in vestibulum porttitor tincidunt id vulputate accumsan. Maecenas turpis amet, turpis nunc, at lorem. Ac nunc sed massa ut aliquet risus dui nunc. Fames vitae lobortis orci nunc nisl auctor. Nibh condimentum semper nullam quam vitae nisl amet. Faucibus ullamcorper nulla scelerisque dolor viverra id.
             </div>
            </div>
            <Footer />
        </div>
    )
}
export default About;