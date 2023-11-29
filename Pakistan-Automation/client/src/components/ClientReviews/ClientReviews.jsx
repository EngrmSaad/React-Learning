import React from "react";
import Slider from "react-slick";
import ts1 from '../../assets/images/icons/author-1.png'
import ts2 from '../../assets/images/icons/author-2.png'
import man1 from '../../assets/images/icons/man1.jpg'
import man2 from '../../assets/images/icons/man2.jpg'
import man3 from '../../assets/images/icons/man3.jpg'

import icon1 from '../../assets/images/icons/icon-3.png'
// import icon1 from '../../images/icons/icon-3.png'
import icon2 from '../../assets/images/icons/icon-7.png'
import icon3 from '../../assets/images/icons/icon-8.png'
import icon4 from '../../assets/images/icons/icon-9.png'
import icon5 from '../../assets/images/icons/icon-10.png'
import "./clientReviews.css"

const ClientReviews = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonial = [
        {
            tsImg: man1,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        },
        {
            tsImg: man2,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Eizabeth Blackwell',
            Sub: "Web Designer",
        },
        {
            tsImg: man3,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        }
        
    ]
    return (

        <section className="testimonial-section">

            
            {/* <div className="icon-layer-one" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="icon-layer-two" style={{ backgroundImage: `url(${icon2})` }}></div>
            <div className="icon-layer-three" style={{ backgroundImage: `url(${icon3})` }}></div>
            <div className="icon-layer-four" style={{ backgroundImage: `url(${icon3})` }}></div>
            <div className="icon-layer-five" style={{ backgroundImage: `url(${icon3})` }}></div> */}
            <div className="auto-container">

                <div className="sec-title centered">
                    <div className="title">Testimonials</div>
                    <h2>What They Say About Our <br /> Company?</h2>
                    <div className="text">We know how important customer experience is for a busines and therefore, <br/> we trive to make your company excel in this.</div>
                </div>

                <div className="testimonial-carousel">

                    <Slider {...settings}>
                        {testimonial.map((tesmnl, tsm) => (
                            <div className="testimonial-block" key={tsm}>
                                <div className="inner-box">
                                    <div className="pattern-layer"></div>
                                    <div className="author-image-outer">
                                        <div className="author-image">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <div className="text">{tesmnl.Des}</div>
                                        <div className="lower-box">
                                            <div className="quote-icon fa fa-quote-left"></div>
                                            <h6>{tesmnl.Title}</h6>
                                            <div className="designation">{tesmnl.Sub}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>

            </div>
        </section>
    );
}

export default ClientReviews;