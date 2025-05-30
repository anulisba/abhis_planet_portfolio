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

const reviews = [
    {
        name: "Anna Deynah",
        role: "UX Designer",
        content: "The attention to detail in their designs is remarkable. They transformed our living space into something truly special that reflects our personality perfectly.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
    },
    {
        name: "John Smith",
        role: "Business Executive",
        content: "Working with this team was a game-changer for our office space. Their innovative approach created an environment that boosts productivity and impresses clients daily.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
    },
    {
        name: "Sarah Johnson",
        role: "Restaurant Owner",
        content: "Our restaurant ambiance has received countless compliments since the redesign. They perfectly captured the elegant yet comfortable atmosphere we envisioned.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
    },
    {
        name: "Michael Brown",
        role: "Architect",
        content: "I've collaborated with many designers, but their understanding of space and light is exceptional. The way they balance functionality with aesthetics is impressive.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
    },
    {
        name: "Emily Wilson",
        role: "Hotel Manager",
        content: "Our boutique hotel's transformation exceeded all expectations. Guests constantly comment on the sophisticated yet welcoming interiors that create a memorable stay.",
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
    },
    {
        name: "David Taylor",
        role: "Real Estate Developer",
        content: "Their designs significantly increased property values in our development. The premium finishes and thoughtful layouts set our properties apart in the market.",
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
                        <h2>Interior Solutions Tailored<br />To You</h2><div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">OUR SERVICES</span>
                    </div>

                </div>

                {/* <p className="section-description">
                    Discover why clients trust us to transform their spaces into extraordinary environments
                </p> */}
                {/* Desktop Carousel (3 reviews per slide) */}
                <div className="d-none d-lg-block">
                    <MDBCarousel
                        showControls
                        showIndicators
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
                </div>

                {/* Mobile Carousel (1 review per slide) */}
                <div className="d-lg-none">
                    <MDBCarousel
                        showControls
                        showIndicators
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