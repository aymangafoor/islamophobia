import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import img1 from '../../component/assets/library1.jpg'
import img2 from '../../component/assets/library2.jpg'
import img3 from '../../component/assets/library3.jpg'

const Hate = () => {
    return (
        <div>
            <Header />
            <div className='banner'>
                <h3>Islamophobs</h3>
            </div>
            <div className='container-fluid px-5 mt-5 mb-5'>
                <div className='card mt-2 mb-3'>
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
                <div className='card mb-5'>
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
                <div className='card'>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={img3} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
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
export default Hate;