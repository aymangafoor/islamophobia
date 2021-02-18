import React, {useState} from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import search from '../../component/assets/Vector.png'
import img1 from '../../component/assets/library1.jpg'
import img2 from '../../component/assets/library2.jpg'
import img3 from '../../component/assets/library3.jpg'
import './news.css'

const News = () => {
    const [drops, drop] = useState(false)

    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Islamophobia News</h3>
            </div>
            <div className='container-fluid'>
            <div class="input-group mb-3 mt-3 px-5">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn bg-white" type="button" id="button-addon2"><img src={search} alt='' /></button>
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
            </div>
            <div className='container-fluid news px-5 mt-5 mb-5'>
                <div className='card px-2 mt-2 mb-3'>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={img1} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Sed ut perspiciatis</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit congue amet justo, libero sed in convallis mi. Non posuere purus sed vulputate in. Adipiscing enim pellentesque rutrum quam neque augue sit nunc. Risus, maecenas vitae odio eu lobortis aliquam. Orci sit eleifend habitant purus. Neque, enim viverra quam faucibus tincidunt morbi dolor adipiscing magna. Non nisl, egestas elit, tellus nulla. Risus tortor, augue sit turpis fermentum at in lacus, non. Non facilisis elit vestibulum odio. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card px-2 mb-5'>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={img2} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Sed ut perspiciatis</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit congue amet justo, libero sed in convallis mi. Non posuere purus sed vulputate in. Adipiscing enim pellentesque rutrum quam neque augue sit nunc. Risus, maecenas vitae odio eu lobortis aliquam. Orci sit eleifend habitant purus. Neque, enim viverra quam faucibus tincidunt morbi dolor adipiscing magna. Non nisl, egestas elit, tellus nulla. Risus tortor, augue sit turpis fermentum at in lacus, non. Non facilisis elit vestibulum odio. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card px-2'>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={img3} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-dark">
                                <h5 class="card-title">Sed ut perspiciatis</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit congue amet justo, libero sed in convallis mi. Non posuere purus sed vulputate in. Adipiscing enim pellentesque rutrum quam neque augue sit nunc. Risus, maecenas vitae odio eu lobortis aliquam. Orci sit eleifend habitant purus. Neque, enim viverra quam faucibus tincidunt morbi dolor adipiscing magna. Non nisl, egestas elit, tellus nulla. Risus tortor, augue sit turpis fermentum at in lacus, non. Non facilisis elit vestibulum odio. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default News