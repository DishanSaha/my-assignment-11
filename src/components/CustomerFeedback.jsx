import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper"; // <-- Swiper 9
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


export default function CustomerFeedback() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error('Failed to load reviews:', err));
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
                Customer Feedback
            </h2>

            <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1} // Default for mobile
                spaceBetween={30} // Add spacing between slides
                modules={[EffectCoverflow, Pagination, Autoplay]}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1.5, // Small tablets
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2, // Larger tablets
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3, // Desktop
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 50, // Extra spacing for large screens
                    },
                }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}
