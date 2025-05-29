import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";

export default function CustomerReviews() {
    return (
        <MDBContainer className="py-5">
            <MDBCarousel showControls showIndicators interval={2000} ride="carousel">

                <MDBCarouselItem className="active">
                    <MDBContainer>
                        <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBContainer>
                        <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBContainer>
                        <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <div
                                    style={{
                                        border: '2px solid yellow',
                                        borderRadius: '5px',
                                        padding: '1rem'
                                    }}
                                >
                                    {/* First Row: Image + Headings */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                            className="rounded-circle shadow-1-strong"
                                            width="75"
                                            height="75"
                                            alt="testimonial"
                                        />
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '1rem' }}>Anna Deynah</h5>
                                            <h6 className="mb-0" style={{ fontSize: '0.9rem', color: 'yellow' }}>UX Designer</h6>
                                        </div>
                                    </div>

                                    {/* Second Row: Line + Paragraph */}
                                    <div className="d-flex">
                                        {/* Yellow Line */}
                                        <div style={{
                                            width: '75px',
                                            height: '2px',
                                            backgroundColor: 'yellow',
                                            marginRight: '1rem',
                                            flexShrink: 0
                                        }}></div>

                                        {/* Paragraph */}
                                        <p style={{ fontSize: '0.85rem', textAlign: 'justify', margin: 0 }}>
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
    );
}