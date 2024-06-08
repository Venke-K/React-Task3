import React from 'react'

function Card({Data}) {
  return <>
  





 
  
 <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style = {{ backgroundImage :'url("src/Components/Img/bg-showcase-1.jpg")'}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether its a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style = {{ backgroundImage :'url("src/Components/Img/bg-showcase-2.jpg")'}}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style = {{ backgroundImage :'url("src/Components/Img/bg-showcase-3.jpg")'}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use & Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section> 




         <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src='src/Components/Img/testimonials-1.jpg' alt="..." />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">This is fantastic! Thanks so much guys!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src='src/Components/Img/testimonials-2.jpg' alt="..." />
                            <h5>Fred S.</h5>
                            <p className="font-weight-light mb-0">Bootstrap is amazing. Ive been using it to create lots of super nice landing pages.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src= 'src/Components/Img/testimonials-3.jpg' alt="..." />
                            <h5>Sarah W.</h5>
                            <p className="font-weight-light mb-0">Thanks so much for making these free resources available to us!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
   
  
  </>
}
export default Card