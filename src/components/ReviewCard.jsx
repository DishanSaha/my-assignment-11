import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
    const { userName, user_photoURL, ratings, review: testimonial } = review;

    // Generate stars
    const fullStars = Math.floor(ratings);
    const halfStar = ratings % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed mb-4">{testimonial}</p>

            {/* Ratings */}
            <div className="flex items-center mb-6">
                {Array(fullStars)
                    .fill()
                    .map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                    ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {Array(emptyStars)
                    .fill()
                    .map((_, i) => (
                        <FaRegStar key={i} className="text-yellow-400" />
                    ))}
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 mb-6"></div>

            {/* Profile */}
            <div className="flex items-center gap-4">
                <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={user_photoURL}
                    alt={userName}
                />
                <div>
                    <h4 className="text-lg font-bold text-gray-900">{userName}</h4>
                    <p className="text-gray-500 text-sm">Customer</p>
                </div>
            </div>
        </div>
    );
}
