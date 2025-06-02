import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import "./CustomerReviews.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        name: "Neha Pradeep",
        location: "Kochi, Kerala",
        role: "Homeowner",
        content: "Abhi's Planet turned our old house into a modern sanctuary. Every corner feels personalized and elegant. Truly the best interior design team in Kerala!",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
    },
    {
        name: "Mohammed Al Nahyan",
        location: "Abu Dhabi, UAE",
        role: "Corporate Manager",
        content: "Our Abu Dhabi villa now feels like a five-star retreat. The design, the color palette, and the decor are all world-class. Highly recommended!",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
    },
    {
        name: "Anjali Nair",
        location: "Thiruvananthapuram, Kerala",
        role: "Boutique Owner",
        content: "The studio completely transformed my small boutique space into something stylish and inviting. My customers often ask who designed it!",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
    },
    {
        name: "Rashid Al Amiri",
        location: "Abu Dhabi, UAE",
        role: "Hotel Owner",
        content: "We hired Abhi’s Planet for our hotel lobby makeover. The results were stunning — it feels luxurious yet warm. Guests are loving the vibe!",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
    },
    {
        name: "Arun Dev",
        location: "Calicut, Kerala",
        role: "Café Owner",
        content: "Their design brought a cozy and trendy atmosphere to our café. Footfall has increased since the renovation, and people love the aesthetics!",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
    },
    {
        name: "Fatima Zayed",
        location: "Abu Dhabi, UAE",
        role: "Interior Enthusiast",
        content: "I wanted a space that was minimal yet artistic — Abhi's Planet delivered beyond expectations. Their professionalism and eye for detail are unmatched.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
    }
];


// Split reviews into chunks of 3 for desktop carousel
const desktopReviews = [];
for (let i = 0; i < reviews.length; i += 3) {
    desktopReviews.push(reviews.slice(i, i + 3));
}

export default function CustomerReviews() {
    return (
        <section className="reviews-section">
            <MDBContainer className="py-0">
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>What Our Clients Say<br />About Us</h2><div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">CUSTOMER REVIEWS</span>
                    </div>

                </div>

                {/* <p className="section-description">
                    Discover why clients trust us to transform their spaces into extraordinary environments
                </p> */}
                {/* Desktop Carousel (3 reviews per slide) */}
                <div className="d-none d-lg-block">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={3000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {desktopReviews.map((reviewGroup, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow>
                                    {reviewGroup.map((review, idx) => (
                                        <MDBCol lg="4" key={idx} className="mb-4 mb-lg-0">
                                            <ReviewCard review={review} />
                                        </MDBCol>
                                    ))}
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}

                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <FaChevronLeft />
                    </button>
                    <button className="custom-arrow right" >
                        <FaChevronRight />
                    </button> */}

                </div>

                {/* Mobile Carousel (1 review per slide) */}
                <div className="d-lg-none">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={3000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {reviews.map((review, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow className="justify-content-center">
                                    <MDBCol sm="10" md="8">
                                        <ReviewCard review={review} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}
                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <MDBIcon fas icon="chevron-left" />
                    </button>
                    <button className="custom-arrow right" >
                        <MDBIcon fas icon="chevron-right" />
                    </button> */}
                </div>

            </MDBContainer>
        </section>
    );
}

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <img
                    src={review.avatar}
                    className="review-avatar"
                    alt={review.name}
                />
                <div className="review-titles">
                    <h5 className="review-name">{review.name}</h5>
                    <h6 className="review-role">{review.role}</h6>
                </div>
            </div>

            <div className="review-content">
                <div className="review-line"></div>
                <div className="review-text">
                    <MDBIcon fas icon="quote-left" className="quote-icon" />
                    <p>{review.content}</p>
                </div>
            </div>

            <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                    <MDBIcon key={i} fas icon="star" className="star-icon" />
                ))}
            </div>
        </div>
    );
};