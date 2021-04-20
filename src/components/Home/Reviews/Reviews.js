import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mobo-fix-server.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className="mt-5 mb-5 review-main">
                <h3 className="text-center">What Others Say About Us!</h3>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    {
                        reviews.map(review =>
                            <div key={review._id}>
                                <img src={review.clientAvatar} alt="testimonial" />
                                <div className="myCarousel">
                                    <h3>{review.clientName}</h3>
                                    <h4>{review.clientEmail}</h4>
                                    <p>
                                        {review.clientReview}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </>
    );
};

export default Reviews;